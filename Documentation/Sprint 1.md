### Task 1: Absolute versioning vs Tilde versioning

**Conclusion:** Possibility that Tilde might break your working code. So, Its always better to pin the dependencies because even thought you might think you will receive bug fixes using Tilde, but its not really true if there are any minor or major updates you will definitely miss the fixes. Going with Absolute versioning is a better approach for development.

Refered from [Dependency Pinning](https://renovatebot.com/docs/dependency-pinning/)

##### Advantages of pinning dependency (absolute versioning)
- You mainly pin versions for certainty, an visibility. When you have a pinned version of each dependency in your package.json, you know exactly which version of each dependency is installed at any time. This benefits when upgrading versions as well as when rolling back in case of problems.
- You can pass on the exact dependencie versions (via Package-lock.json or Yarn-lock.json) which you have used during development to other developers so that it will be easy for them to install and run your project/package. 

##### Disadvantage of pinning dependency
- Dependency Noise : Whenever there is an upgrade to one of your dependencies, you will get a request to update your package with latest version. It will be too noisy when there are too many deep dependency getting updated. 
- Absolute versioning results in outdated dependencies.


### Task 2: Lock Files to pin dependencies
Since both yarn and npm@5 both support lock files, it's a common question to ask "Why should I pin dependencies if I'm already using a lock file?". It's a good question!

Dependencies which you are pinning in package.json are the once which you are directly using, but in reality those packages will also have many other dependencies. For this reason to lock deep dependencies Lock files are used.

In other words, Lock files are a great companion to pinning dependencies, because these files lock (pin) deeper into your dependency tree than you see in package.json.

##### What a lock file will do for you
A lock file will lock down the exact dependencies and sub-dependencies that your project use, so that when everyone runs npm install or yarn install will install the exact same dependencies as the person that last updated the lock file.

##### For npm lock file refer [npm package locks](https://docs.npmjs.com/files/package-locks)
##### For yarn lock file refer [yarn lock](https://yarnpkg.com/lang/en/docs/yarn-lock/)
 
### Task 3: Security Vulnerability

In a world where application dependency graphs are deeper than ever, secure engineering means more than securing your own software. Tracking vulnerabilities in your dependencies is just as important as securing your own software.

Popular dependencies are very juicy targets for malicious attackers. A single vulnerability in most popular dependency can potentially affect thousands of apps, so attackers are likely to invest their resources in uncovering security vulnerabilities.

Refer and further read [Vulnerability Scanning for your Dependencies: Why and How](https://www.aptible.com/blog/vulnerability-scanning-for-your-dependencies-why-and-how/)

Its your responsibility to frequently monitor your dependencies for any known Security Vulnerabilities, because if some one reported any Security Vulnerability then attackers will be first to exploit those packages.

Now we will see what different options available for both npm and yarn. 

#### npm

Knowing the severity of dependency vulnerability, npm released a built in security feature( **npm audit**) when they released npm@6 on April 24th 2018 (Refer: [Announcing npm@6](https://blog.npmjs.org/post/173260195980/announcing-npm6)).

npm audit (Refer [npm security audit](https://docs.npmjs.com/getting-started/running-a-security-audit) for through understanding).

#### yarn

yarn is yet to implement this feature, currently it doesn't have any built in security feature to identify dependencies security vulnerabilities.

Live discussion is going on to implement this feature, refer [yarn audit](https://github.com/yarnpkg/yarn/issues/5808).

### Task 4: External Packages which can identify known dependency security vulnerabilities.
#### 1. Snyk.io
Snyk supports testing and fixing Node.js projects that have their dependencies managed by npm or Yarn. 

Snyk can connect directly to the applications you use daily to monitor your projects. Refer [Integrations](https://snyk.io/docs/) to find out through which you can run Snyk commands.

**Steps involve to use Snyk**
1. Instal Snyk via npm. Run **"npm install -g snyk"**
2. Next authenticate with your Snyk account. Run **"snyk auth"** (By default it will take you to your GitHub for authentication. Other way is to get token number from your Snyk account and set the environment variable SNYK_TOKEN to your token).
3. Run a quick test. Run **snyk test**

Refer [Snyk CLI](https://snyk.io/docs/using-snyk/) for through understanding.

**Snyk Reports** are available via your online Snyk account. It has summary, Issues, dependency and license tabs.
- The summary page is ideal for displaying on a big screen along with your team’s other dashboards.
- The Issues tab shows an inventory of all issues in your projects.
- The dependencies tab displays an inventory of all your project’s dependencies, along with their version, license, and vulnerability status. 
- Snyk creates a list of all the licenses used in your projects to help you with your license compliance. Some dependencies use multiple licenses, which are shown here separately.

Refer [Snyk reports](https://snyk.io/docs/reports)

#### 2. JFrog Xray
JFrog has **JFrog Xray** to handle Security Vulnerabilities. Further read can be found here [Xray](https://jfrog.com/integration/npm-xray/)

Xray is integrated with Snyk database. Xray and Snyk work together to detect vulnerabilities during the build process which minimizes the cost of remediation since it can be implemented early in the SDLC. But even if your builds get past Xray and Snyk, new vulnerabilities are discovered all the time. Fortunately, JFrog continuously updates JXray including adding new vulnerabilities from Snyk’s Basic database, and each time your build artifacts are scanned, the latest vulnerabilities will be exposed in JFrog Xray.

Refer: [Snyk Up on Vulnerabilities and Eradicate Them](https://jfrog.com/blog/snyk-vulnerabilities-eradicate/)

**As per our analysis JFrog Xray is better comparted to Snyk.**

**Pricing model:** Xray will come along with Artifatory if we buy package "ARTIFACTORY PRO X" and above.
Refer: [Xray pricing](https://jfrog.com/pricing/xray-pricing/)

### Task 5: Outdated Dependencies
When you pin your dependencies eventually after sometime your project dependencies will be outdate. Either there will be a latest version (or) the version which you are using may not be available anymore for others to install to work on your project.
To overcome this problem you need monitor your dependencies and update them when needed.

Both npm and yarn have outdated command and also update command to update the dependencies to latest version based on the version range specified in the package.json file.

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

#### Third party package
 - [Greenkeeper](https://greenkeeper.io/)

### Task 6: Standard Versioning

lets discuss why we are going with **Standard Version** when we have **Semantic release**

**semantic-release** is a fully automated library/system for versioning, changelog generation, git tagging, and publishing to the npm registry. Refer [Semantic Release](https://github.com/semantic-release/semantic-release)

**standard-version** is different because it handles the versioning, changelog generation, and git tagging for you **without** automatic pushing (to GitHub) or publishing (to an npm registry). Use of standard-version only affects your local git repo - it doesn't affect remote resources at all. After you run standard-version, you still have to ability to review things and correct mistakes if you want to.

Refer: [Standard Version](https://www.npmjs.com/package/standard-version)

### Task 7: Lerna

Installing Lerna : **yarn global add lerna** 

Create a new Lerna repo or upgrade an existing repo to the current version of Lerna : using **--independent** or **--exact** mode
       **lerna init** (default **--exact**) or **lerna init --independent**

**bootstrap** : **lerna bootstrap**

This command 
- npm install all external dependencies of each package.
- Symlink together all Lerna packages that are dependencies of each other.
- npm run prepublish in all bootstrapped packages.
- npm run prepare in all bootstrapped packages.

**lerna add** <package>[@version] [--dev] 
Add local or remote package as dependency to packages in the current Lerna repo.

### lerna publish
Creates a new release of the packages that have been updated. Prompts for a new version. Creates a new git commit/tag in the process of publishing to npm.

  Lerna won't publish packages which are marked as private ("private": true in the package.json).

 "publishConfig": {

"access": "public"

}

**--canary, -c**

**lerna publish --canary**

**lerna publish --canary=beta**

Before publishing to npm, it creates the new version tag by taking the current version, bumping it to the next minor version, adding the provided meta suffix (defaults to alpha) and appending the current git sha (ex: 1.0.0 becomes 1.1.0-alpha.81e3b443).
 
 **--conventional-commits**

lerna publish --conventional-commits

**--git-remote [remote]**

**lerna publish --git-remote upstream** : Publish will push the git changes to the specified remote instead of origin
 

**--skip-git** : Publish will publish to npm without running any of the git commands.

**--skip-npm** : Publish will update all package.json package versions and dependency versions, but it will not actually publish the packages to npm.
 

**--force-publish [packages]**

eg: $ lerna publish --force-publish=package-2,package-4  <--publish will force publish the specified packages (comma-separated)

$ lerna publish --force-publish=* .   <--  force publish all packages

**--yes** : skips all confirmation prompts

**--cd-version**

**lerna publish --cd-version (major | minor | patch | premajor | preminor | prepatch | prerelease)**

publish will skip the version selection prompt (in independent mode) and use the next specified semantic version. You must still use the --yes flag to avoid all prompts. 

**--preid**

$ lerna publish --cd-version=prerelease

uses the next semantic prerelease version, e.g. 1.0.0 => 1.0.0-0 
 
$ lerna publish --cd-version=prepatch --preid=next

uses the next semantic prerelease version with a specific prerelease identifier, e.g. 1.0.0 => 1.0.1-next.0 

**--message, -m [msg]**

lerna publish -m "chore(release): publish %s"

commit message = "chore(release): publish v1.0.0" 
 

lerna publish -m "chore(release): publish %v"

commit message = "chore(release): publish 1.0.0" 
 
## Note:

__Yarn Publish & Lerna Publish:__

After research came to know that Yarn publish and Lerna publish commands will publish to Yarn repository. -- To push only to GIT we need to us "git push" commands.
