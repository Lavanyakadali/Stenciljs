# Outdated Dependencies
When you pin your dependencies eventually after sometime your project dependencies will be outdate. Either there will be a latest version (or) the version which you are using may not be available anymore for others to install to work on your project.
To overcome this problem you need monitor your dependencies and update them when needed.

Both npm and yarn have outdated command and also update command to update the dependencies to latest latest version based on the version range specified in the package.json file.

Further read :

**npm** 
- Refer [How to update local Packages](https://docs.npmjs.com/getting-started/updating-local-packages)
- Refer [How to update global packages](https://docs.npmjs.com/getting-started/updating-global-packages)
- Refer [npm check](https://www.npmjs.com/package/npm-check-interactive)
  - npm check provides and interactive environment to update the outdated dependencicies and notifies unused dependencies.
- Refer [npm check updates](https://www.npmjs.com/package/npm-check-updates)
  - npm check update will update dependencies to the latest version regardless of existing version constraints provided in package.json, even package.json will be get updated with new dependency range. You should avoid using this feature, its always better to update and test a particular dependency.

**yarn**
- Refer [yarn outdated](https://yarnpkg.com/lang/en/docs/cli/outdated/)
- Refer [yarn update](https://yarnpkg.com/en/docs/cli/upgrade)
- Refer [yarn update-interactive](https://yarnpkg.com/en/docs/cli/upgrade-interactive)
  - yarn update-interactive is similar to npm check
