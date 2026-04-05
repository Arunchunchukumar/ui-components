import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, style, ...props }, ref) => {
    return (
      <div style={{ marginBottom: '16px' }}>
        {label && (
          <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, marginBottom: '6px', color: '#374151' }}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          style={{
            width: '100%',
            padding: '10px 14px',
            fontSize: '14px',
            border: `2px solid ${error ? '#ef4444' : '#d1d5db'}`,
            borderRadius: '8px',
            outline: 'none',
            transition: 'border-color 150ms ease',
            boxSizing: 'border-box',
            ...style,
          }}
          {...props}
        />
        {error && <p style={{ fontSize: '12px', color: '#ef4444', marginTop: '4px' }}>{error}</p>}
        {helperText && !error && <p style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>{helperText}</p>}
      </div>
    );
  },
);

Input.displayName = 'Input';
