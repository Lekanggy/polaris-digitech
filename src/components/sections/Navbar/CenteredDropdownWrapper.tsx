import React from 'react';

interface CenteredDropdownWrapperProps {
  children: React.ReactNode;
}

export default function CenteredDropdownWrapper({ children }: CenteredDropdownWrapperProps) {
  return (
    <div
      style={{
        position: 'absolute',
        top: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        paddingTop: '14px',
        zIndex: 100,
      }}
    >
      {children}
    </div>
  );
}
