import { useState } from 'react';
import type { ChangeEvent, FormEvent, SyntheticEvent } from 'react';

type FormInputEvent = ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;
type FormSubmitEvent = FormEvent | SyntheticEvent<HTMLFormElement>;

interface UseFormSubmissionOptions<TFormData> {
  endpoint: string;
  initialValues: TFormData;
  getPayload: (formData: TFormData) => Record<string, unknown>;
  validate?: (formData: TFormData) => string | undefined;
  successMessage?: (payload?: { message?: string; error?: string; ok?: boolean; success?: boolean } | null) => string;
  errorMessage?: (payload?: { message?: string; error?: string; ok?: boolean; success?: boolean } | null) => string;
}

export function useFormSubmission<TFormData extends Record<string, unknown>>({
  endpoint,
  initialValues,
  getPayload,
  validate,
  successMessage,
  errorMessage,
}: UseFormSubmissionOptions<TFormData>) {
  const [formData, setFormData] = useState<TFormData>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const resetForm = () => {
    setFormData({ ...initialValues });
  };

  const updateField = (name: keyof TFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name as string]: value } as TFormData));
  };

  const handleInputChange = (e: FormInputEvent) => {
    const { name, value } = e.target;
    updateField(name as keyof TFormData, value);
  };

  const submit = async (e?: FormSubmitEvent) => {
    e?.preventDefault?.();

    const validationMessage = validate?.(formData);
    if (validationMessage) {
      setSubmissionSuccess(false);
      setSubmissionMessage(validationMessage);
      return;
    }

    setIsSubmitting(true);
    setSubmissionMessage('');
    setSubmissionSuccess(false);

    try {
      const response = await fetch(`${import.meta.env.VITE_STRAPI_API_URL}/api${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(getPayload(formData)),
      });

      let payload: { message?: string; error?: string; ok?: boolean; success?: boolean } | null = null;
      try {
        payload = await response.json();
      } catch {
        payload = null;
      }

      if (response.ok || payload?.ok || payload?.success) {
        setSubmissionSuccess(true);
        setSubmissionMessage(successMessage?.(payload) || 'Request submitted successfully.');
        resetForm();
      } else {
        setSubmissionSuccess(false);
        setSubmissionMessage(errorMessage?.(payload) || payload?.message || payload?.error || 'Unable to submit your request right now.');
      }
    } catch (error) {
      setSubmissionSuccess(false);
      setSubmissionMessage('Unable to connect to the server. Please try again in a moment.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    setFormData,
    updateField,
    handleInputChange,
    submit,
    isSubmitting,
    submissionMessage,
    submissionSuccess,
    resetForm,
  };
}
