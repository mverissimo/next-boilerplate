import { render, screen } from '@testing-library/react';

import { Button } from '.';

describe('Button', () => {
  it('should render ', () => {
    let content = 'Button';

    render(<Button>{content}</Button>);

    expect(screen.getByText(content)).toBeInTheDocument();
  });
});
