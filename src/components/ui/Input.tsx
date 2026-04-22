interface InputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  textarea?: boolean;
  rows?: number;
  required?: boolean;
}

export default function Input({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  textarea = false,
  rows = 4,
  required = false,
}: InputProps) {
  const cls = 'w-full px-4 py-3 bg-[#F5F6FA] border border-transparent rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue transition-colors duration-200';

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-700">
        {label}{required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {textarea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange as React.ChangeEventHandler<HTMLTextAreaElement>}
          rows={rows}
          required={required}
          className={cls}
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
          required={required}
          className={cls}
        />
      )}
    </div>
  );
}
