import React from 'react';

interface CommonButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const CommonButton: React.FC<CommonButtonProps> = ({
                                                            label,
                                                            onClick = undefined,
                                                            type = 'button',
                                                            disabled = false,
                                                            className = ''
                                                          }) => {
  return (
      <button
          type={type}
          onClick={onClick}
          disabled={disabled}
          className={`px-3 py-1.5 bg-blue-500 text-white rounded ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'} ${className}`}
      >
        {label}
      </button>
  );
};
