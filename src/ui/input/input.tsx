import React from 'react';
import type { InputHTMLAttributes, Ref, ElementRef } from 'react';

import styles from './input.styles';

export interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'label' | 'disabled' | 'readOnly' | 'required' | 'size'
  > {
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
  isRequired?: boolean;

  /**
   *
   */
  isReadOnly?: boolean;

  /**
   * The ref to the HTML DOM element
   */
  ref?: Ref<HTMLInputElement>;
}

const Input = React.forwardRef<ElementRef<'input'>, InputProps>(
  (props, ref) => {
    let {
      size = 'md',
      className,
      isDisabled = false,
      isRequired = false,
      isReadOnly = false,
      ...rest
    } = props;

    return (
      <input
        className={styles({ size, className })}
        disabled={isDisabled}
        required={isRequired}
        readOnly={isReadOnly}
        ref={ref}
        {...rest}
      />
    );
  },
);

Input.displayName = 'Input';

export default Input;
