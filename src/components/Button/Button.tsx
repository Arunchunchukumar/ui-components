import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  fullWidth?: boolean;
}

const variantStyles: Record<string, React.CSSProperties> = {
  primary: { backgroundColor: '#0ea5e9', color: '#fff', border: 'none' },
  secondary: { backgroundColor: '#64748b', color: '#fff', border: 'none' },
  outline: { backgroundColor: 'transparent', color: '#0ea5e9', border: '2px solid #0ea5e9' },
  ghost: { backgroundColor: 'transparent', color: '#64748b', border: 'none' },
};

const sizeStyles: Record<string, React.CSSProperties> = {
  sm: { padding: '6px 12px', fontSize: '13px' },
  md: { padding: '10px 20px', fontSize: '14px' },
  lg: { padding: '14px 28px', fontSize: '16px' },
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading, fullWidth, children, style, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        style={{
          ...variantStyles[variant],
          ...sizeStyles[size],
          width: fullWidth ? '100%' : undefined,
          borderRadius: '8px',
          fontWeight: 600,
          cursor: disabled || loading ? 'not-allowed' : 'pointer',
          opacity: disabled || loading ? 0.6 : 1,
          transition: 'all 150ms ease',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          ...style,
        }}
        {...props}
      >
        {loading && <span style={{ animation: 'spin 1s linear infinite' }}>Loading...</span>}
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
