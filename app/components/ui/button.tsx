// src/components/ui/button.tsx
import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';  // Add support for type
  disabled?: boolean;  // Add support for disabled
}

const Button: React.FC<ButtonProps> = ({ onClick, children, type = 'button', disabled = false }) => {
  return (
    <button onClick={onClick} type={type} disabled={disabled} className={`btn ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
      {children}
    </button>
  );
};

export { Button };
