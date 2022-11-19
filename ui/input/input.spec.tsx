import React from 'react';
import type { ElementRef } from 'react';

import { render, screen } from '@testing-library/react';

import { Input } from '.';

describe('@component: input', () => {
  it('should accept a working ref for a Input', () => {
    const elementRef = React.createRef<ElementRef<'input'>>();

    render(<Input ref={elementRef} data-testid="Input" />);

    expect(elementRef.current).toBe(screen.getByTestId('Input'));
  });

  it('should be disabled when pass isDisabled prop', () => {
    render(<Input isDisabled data-testid="Input-disabled" />);

    expect(screen.getByTestId('Input-disabled')).toBeDisabled();
  });

  it('should be readOnly when pass isReadOnly prop', () => {
    render(<Input isReadOnly data-testid="Input-readOnly" />);

    expect(screen.getByTestId('Input-readOnly')).toHaveAttribute('readOnly');
  });

  it('should be required when pass isRequired prop', () => {
    render(<Input isRequired data-testid="Input-required" />);

    expect(screen.getByTestId('Input-required')).toHaveAttribute('required');
  });
});
