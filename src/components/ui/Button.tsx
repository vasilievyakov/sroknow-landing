
import React from 'react';
import './Button.css';

type Variant = 'primary' | 'ghost' | 'outline';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  as?: 'button' | 'a';
  href?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  as = 'button',
  href,
  children,
  ...rest
}) => {
  const className = `btn btn-${variant}`;

  if (as === 'a' && href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};
