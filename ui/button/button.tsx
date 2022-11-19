'use client';

import React from 'react';
import type { ButtonHTMLAttributes, Ref, ReactNode, ElementRef } from 'react';

import { Slot } from '@radix-ui/react-slot';

import * as styles from './button.styles';

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
   * Change the component to the HTML tag or custom component of the only child
   */
  asChild?: boolean;

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
      asChild = false,
      isDisabled = false,
      isFullWidth = false,
      children,
      ...rest
    } = props;

    let Component = asChild ? Slot : 'button';

    return (
      <Component
        className={styles.base({
          appearance,
          size,
          isFullWidth,
          class: className,
        })}
        disabled={isDisabled}
        ref={ref}
        {...rest}
      >
        <span>{children}</span>
      </Component>
    );
  }
);

Button.displayName = 'Button';

export default Button;
