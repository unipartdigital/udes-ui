module.exports = {
    stories: ['../storybook/stories/**/stories.js'],
    addons: [
        '@storybook/preset-typescript',
        '@storybook/addon-knobs/register',
        'storybook-addon-jsx/register',
        '@storybook/addon-actions/register',
        '@storybook/addon-links/register',
    ],
};
