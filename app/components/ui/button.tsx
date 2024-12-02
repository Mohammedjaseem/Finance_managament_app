// src/components/ui/button.tsx
import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';  // Allow for type prop
}

const Button: React.FC<ButtonProps> = ({ onClick, children, type = 'button' }) => {
  return (
    <button onClick={onClick} type={type} className="btn">
      {children}
    </button>
  );
};

export { Button };
