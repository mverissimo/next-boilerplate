import React from 'react';
import type { ButtonHTMLAttributes, Ref, ReactNode, ElementRef } from 'react';

import styles from './button.styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   *
   */
  appearance?:
    | 'critical'
    | 'info'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning';

  /**
   * Define the size
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  /**
   *
   */
  isDisabled?: boolean;

  /**
   *
   */
  isFullWidth?: boolean;

  /**
   * The ref to the HTML DOM element
   */
  ref?: Ref<HTMLButtonElement>;

  /**
   *
   */
  children: ReactNode;
}

const Button = React.forwardRef<ElementRef<'button'>, ButtonProps>(
  (props, ref) => {
    let {
      appearance = 'primary',
      size = 'md',
      className,
      isDisabled = false,
      isFullWidth = false,
      ...rest
    } = props;

    return (
      <button
        className={styles({
          appearance,
          size,
          isFullWidth,
          className,
        })}
        disabled={isDisabled}
        ref={ref}
        {...rest}
      />
    );
  },
);

Button.displayName = 'Button';

export default Button;
