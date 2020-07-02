import { addParameters, configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo); 

addParameters({
  options: {
    theme: { brandTitle: 'UDES UI', brandUrl: '#' },
    panelPosition: 'bottom',
    enableShortcuts: false,
    isFullscreen: false,
    hierarchyRootSeparator: null,
    hierarchySeparator: /\|/,
    showRoots: true,
    selectedAddonPanel: undefined, // The order of addons in the "Addon panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
    showPanel: true,
    showSearchBox: false,
    showNav: true,
    sidebarAnimations: true,
    sortStoriesByKind: false,
  },
});
