import { tv } from 'tailwind-variants';

export default tv({
  base: `
    inline-flex
    w-full
    items-center

    rounded-md
    border
    border-gray-300
    bg-white

    transition
    duration-150
    ease-in
 
    hover:border-gray-400
    focus:border-gray-400

    focus:outline-none
    focus:ring-2
    focus:ring-gray-200

    disabled:pointer-events-none
    disabled:select-none
    disabled:bg-gray-50
  `,
  variants: {
    size: {
      xs: 'px-3 py-2 text-xs',
      sm: 'px-3.5 py-2.5 text-xs',
      md: 'px-4 py-2.5 text-sm',
      lg: 'px-4 py-2.5 text-base',
      xl: 'px-6 py-3.5 text-base',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
