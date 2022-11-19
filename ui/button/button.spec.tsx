import React from 'react';
import type { ElementRef } from 'react';

import { render, screen } from '@testing-library/react';

import { Button } from '.';

describe('@component: button', () => {
  it('should accept a working ref for a Button', () => {
    const elementRef = React.createRef<ElementRef<'button'>>();

    let content = 'Button';

    render(<Button ref={elementRef}>{content}</Button>);

    expect(elementRef.current).toBe(screen.getByText(content));
  });

  it('should be disabled when pass isDisabled prop', () => {
    let content = 'Button-Disabled';

    render(<Button isDisabled>{content}</Button>);

    expect(screen.getByText(content)).toBeDisabled();
  });
});
