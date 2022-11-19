import '../styles/main.css';

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*',
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
  options: {
    storySort: {
      method: 'alphabetical',
      includeName: true,
      order: [
        'Development',
        'Layout',
        'Forms',
        'DataDisplay',
        'Feedback',
        'Typography',
        'Overlay',
        'Disclosure',
        'Navigation',
        'Media',
        'Other',
        'Hooks',
      ],
    },
  },
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
  },
};
