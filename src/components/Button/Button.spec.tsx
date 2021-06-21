import React from 'react';

import {
  create,
  render,
  fireEvent,
  renderToHtml,
  axe,
  screen,
} from '@utils/test-utils';

import { Button } from '.';

describe('Button', () => {
  describe('styles', () => {
    it('should render with default style', () => {
      const actual = create(<Button>Button</Button>);

      expect(actual).toMatchSnapshot();
    });
  });

  describe('Behavior', () => {
    it('should accept a working ref for a Button', () => {
      const buttonRef = React.createRef<HTMLButtonElement>();

      render(<Button ref={buttonRef}>Button</Button>);

      const button = screen.getByRole('button');

      expect(buttonRef.current).toBe(button);
    });

    it('should call onClick handler when clicked', () => {
      const props = {
        onClick: jest.fn(),
        'data-testid': 'button',
      };

      render(<Button {...props}>Button</Button>);

      fireEvent.click(screen.getByTestId('button'));

      expect(props.onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Acessibility', () => {
    it('should meet accessibility guidelines', async () => {
      const view = renderToHtml(<Button>Button</Button>);
      const results = await axe(view);

      expect(results).toHaveNoViolations();
    });
  });
});
