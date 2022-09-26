import React from 'react';
import type { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
}

function Button(props: ButtonProps) {
  return (
    <button
      className="py-2 px-4 rounded bg-black text-white font-semibold"
      {...props}
    />
  );
}

export default Button;
