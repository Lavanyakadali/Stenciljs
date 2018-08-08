#### Task 1: Absolute versioning vs Tilde versioning

**Conclusion:** Possibility that Tilde might break your working code. So, Its always better to pin the dependencies because even thought you might think you will receive bug fixes using Tilde but its not really true if there are any minor or major updates you will definitely miss the fix. Going with Absolute versioning is a better approach for development.

##### Advantages of Dependency Pinning
- You mainly pin versions for certainty, an visibility. When you have a pinned version of each dependency in your package.json, you know exactly which version of each dependency is installed at any time. This benefits when upgrading versions as well as when rolling back in case of problems.
- You can pass on the exact dependencie versions (via Package-lock.json or Yarn-lock.json) which you have used during development to other developers so that it will be easy for them to install and run your project/package. 

##### Disadvantage of pinning dependency
- Dependency Noise : Whenever there is an upgrade to one of your dependencies, you will get a request to update your package with latest version. It will be too noisy where there are too many deep dependency are getting updates. 
- Pinning dependenc results in outdated dependencies.

Refered from [Dependency Pinning](https://renovatebot.com/docs/dependency-pinning/)

#### Task 2: Lock Files to pin dependencies
Since both yarn and npm@5 both support lock files, it's a common question to ask "Why should I pin dependencies if I'm already using a lock file?". It's a good question!

Dependencies which you are pinning in package.json are the once which you are directly using, but in reality those packages will also have many other dependencies. For this reason to lock deep dependencies Lock files are used.

In other words, Lock files are a great companion to pinning dependencies, because these files lock (pin) deeper into your dependency tree than you see in package.json.

##### What a lock file will do for you
A lock file will lock down the exact dependencies and sub-dependencies that your project use, so that when everyone runs npm install or yarn install will install the exact same dependencies as the person that last updated the lock file.

##### For npm lock file refer [npm package locks](https://docs.npmjs.com/files/package-locks)
##### For yarn lock file refer [yarn lock](https://yarnpkg.com/lang/en/docs/yarn-lock/)
 
#### Task 3:
