## Contributing guidelines

### Setup local development

1. clone this repo
2. have `npm` install package dependencies and manage the symlinking between packages for you

```sh
git clone ...udes-ui && cd udes-ui
npm install
npm run build
```

### File organization

[lerna](https://github.com/lerna/lerna/) is used to manage versions and dependencies between packages in this monorepo.

```
udes-ui/
  lerna.json
  package.json
  ...
  packages/
    package1/
      package.json
      ...
      src/
      test/  # unit tests
      types/ # typescript type declarations
      ...
      lib/   # commonjs output
      esm/   # es module output
      ...
    ...
```

### New Packages

To create packages use the lerna create terminal command from the root folder, eg:

```lerna create package1```

### Builds, linting, and testing

Each package defines its own build config, linting, and testing.  Shared dependancies (eg. Typescript), that are used across our packages should be installed in the root package.

### Publishing

**Prerequisite:** You'll need an [npmjs.com](https://npmjs.com) account that is part of the `udes-ui` organization.

1. To test your package, run `npm install` with the full path to your package directory:

```npm install packages/pathToPackage```

2. Ensure you can import the package and 'smoke' test that it is functional
3. Make sure you're logged in to NPM from your shell. Run `npm login` if necessary.
5. To make the release, run `lerna run build`
4. cd packages/pathToPackage
5. To release, run `npm publish --access public`