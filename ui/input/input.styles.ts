import { cva } from 'class-variance-authority';

export const base = cva(
  [
    'inline-flex',
    'items-center',

    'w-full',

    'border',
    'border-gray-300',
    'hover:border-gray-400',
    'focus:border-gray-400',

    'rounded-md',

    'bg-white',

    'ease-in',
    'duration-150',
    'transition',

    'focus:ring-2',
    'focus:outline-none',
    'focus:ring-gray-200',

    'disabled:bg-gray-50',
    'disabled:pointer-events-none',
    'disabled:select-none',
  ],
  {
    variants: {
      size: {
        xs: ['py-2', 'px-3', 'text-xs'],
        sm: ['py-2.5', 'px-3.5', 'text-xs'],
        md: ['py-2.5', 'px-4', 'text-sm'],
        lg: ['py-2.5', 'px-4', 'text-base'],
        xl: ['py-3.5', 'px-6', 'text-base'],
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);
