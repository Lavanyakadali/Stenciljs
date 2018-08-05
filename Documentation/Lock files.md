# Lock Files to pin dependencies
Since both yarn and npm@5 both support lock files, it's a common question to ask "Why should I pin dependencies if I'm already using a lock file?". It's a good question!

Dependencies which you are pinning in package.json are the once which you are directly using, but in reality those packages will also have many more dependencies. For this reason to lock deep dependencies Lock files are used.

In other words, Lock files are a great companion to pinning dependencies, because these files lock (pin) deeper into your dependency tree than you see in package.json.

## What a lock file will do for you
A lock file will lock down the exact dependencies and sub-dependencies that your project uses, so that everyone running npm install or yarn install will install the exact same dependencies as the person or bot that last updated the lock file.

### For npm lock file refer [npm package locks](https://docs.npmjs.com/files/package-locks)
### For yarn lock file refer [yarn lock](https://yarnpkg.com/lang/en/docs/yarn-lock/)
