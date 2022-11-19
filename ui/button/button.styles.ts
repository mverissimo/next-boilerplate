import { cva } from 'class-variance-authority';

export const base = cva(
  [
    'inline-flex',
    'items-center',
    'justify-center',

    'space-x-2',

    'border',
    'border-transparent',
    'rounded-md',

    'font-semibold',

    'ease-in',
    'transition',
    'duration-150',

    'focus:ring-2',
    'focus:outline-none',

    'disabled:opacity-50',
    'disabled:pointer-events-none',
    'disabled:select-none',
  ],
  {
    variants: {
      appearance: {
        critical: [
          'text-white',
          'bg-rose-600',

          'active:bg-rose-800',
          'focus:ring-rose-200',
          'hover:bg-rose-700',
        ],
        info: [
          'text-white',
          'bg-gray-600',

          'active:bg-gray-800',
          'focus:ring-gray-200',
          'hover:bg-gray-700',
        ],
        primary: [
          'text-white',
          'bg-black',

          'active:bg-gray-800',
          'focus:ring-gray-200',
          'hover:bg-gray-700',
        ],
        secondary: [
          'text-gray-700',

          'bg-white',
          'border-gray-300',
          'shadow-sm',

          'active:bg-gray-100',
          'focus:ring-gray-200',
          'hover:bg-gray-50',
        ],
        success: [
          'text-white',

          'bg-green-600',

          'active:bg-green-800',
          'focus:ring-green-200',
          'hover:bg-green-700',
        ],
        warning: [
          'text-slate-900',

          'bg-yellow-500',

          'active:bg-amber-700',
          'focus:ring-amber-200',
          'hover:bg-amber-600',
        ],
      },
      size: {
        xs: ['py-2', 'px-3', 'text-xs'],
        sm: ['py-2.5', 'px-3.5', 'text-xs'],
        md: ['py-2.5', 'px-4', 'text-sm'],
        lg: ['py-2.5', 'px-4', 'text-base'],
        xl: ['py-3.5', 'px-6', 'text-base'],
      },
      isFullWidth: {
        true: ['w-full'],
      },
      defaultVariants: {
        appearance: 'primary',
        size: 'md',
      },
    },
  }
);
