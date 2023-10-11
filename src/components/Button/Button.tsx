import React from 'react';

export const Button: React.FC<React.ComponentProps<'button'>> = ({
  children,
  ...rest
}) => (
    <button {...rest}>
      {children}
    </button>
  );

