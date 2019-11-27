module.exports = ({ config, mode }) => {
config.module.rules.push({
  test: /\.(ts|tsx)$/,
  use: [
    {
      loader: require.resolve('awesome-typescript-loader'),
    },
    // Optional
    {
      loader: require.resolve('react-docgen-typescript-loader'),
      options: {
        compilerOptions: {
          esModuleInterop: true,
        },
      },
    },
  ],
});
config.resolve.extensions.push('.ts', '.tsx');
return config;
};
