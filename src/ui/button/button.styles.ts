import { tv } from 'tailwind-variants';

export default tv({
  base: `
    inline-flex
    items-center
    justify-center

    gap-2

    rounded-md
    border
    border-transparent

    font-semibold

    transition
    duration-150
    ease-in

    focus:outline-none
    focus:ring-2

    disabled:pointer-events-none
    disabled:select-none
    disabled:opacity-50
  `,
  variants: {
    appearance: {
      critical: `
        bg-rose-600
        text-white

        hover:bg-rose-700
        focus:ring-rose-200
        active:bg-rose-800
      `,
      info: `
        bg-gray-600
        text-white

        hover:bg-gray-700
        focus:ring-gray-200
        active:bg-gray-800
      `,
      primary: `
        bg-black
        text-white

        hover:bg-gray-700
        focus:ring-gray-200
        active:bg-gray-800
      `,
      secondary: `
        border-gray-300

        bg-white
        text-gray-700
        shadow-sm

        hover:bg-gray-50
        focus:ring-gray-200
        active:bg-gray-100
      `,
      success: `
        bg-green-600

        text-white

        hover:bg-green-700
        focus:ring-green-200
        active:bg-green-800
      `,
      warning: `
        bg-yellow-500

        text-slate-900

        hover:bg-amber-600
        focus:ring-amber-200
        active:bg-amber-700
      `,
    },
    size: {
      xs: 'px-3 py-2 text-xs',
      sm: 'px-3.5 py-2.5 text-xs',
      md: 'px-4 py-2.5 text-sm',
      lg: 'px-4 py-2.5 text-base',
      xl: 'px-6 py-3.5 text-base',
    },
    isFullWidth: {
      true: 'w-full',
    },
    defaultVariants: {
      appearance: 'primary',
      size: 'md',
    },
  },
});
