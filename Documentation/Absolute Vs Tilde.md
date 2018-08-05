# Absolute versioning vs Tilde versioning

## What is Dependency Pinning?

Historically, projects use semver (Semantic Versioning) ranges in their package.json. For instance, if you run npm install foobar you will see an entry like "foobar": "^1.1.0" added to your package.json. Verbosely, this means "any foobar version greater than or equal to 1.1.0 but less than 2". Therefore the project will automatically use 1.1.1 if it's released, or 1.2.0, or 1.2.1, etc - meaning you will get not only patch updates but also feature (minor) releases too.

Another alternative is ranges like "foobar": "~1.1.0" which means "any foobar version greater than or equal to 1.1.0 but less than 1.2". This narrows the range to only patch updates to the 1.1 range.

If instead you "pin" your dependencies rather than use ranges, it means you use exact entries like "foobar": "1.1.0" which means "use only foobar version 1.1.0 and no other".

## Why use ranges?
For projects of any type, the main reason to use ranges is so that you can "automatically" get updated releases - which may even include security fixes. By "automatically", we mean that any time you run npm install you will get the very latest version matching your semver - assuming you're not using a lock file, that is.

**Tilde vs Caret**

If you're familiar with the theory of semver, you might think that you only need to use tilde ranges (e.g. "~1.1.0") to get bug fixes, rather than caret ranges (e.g. "^1.1.0"). This is true in theory but not in practice. The reality is that for most projects, fixes are not "backported" to previous minor releases, and minor releases themselves may include fixes. So for example release 1.2.0 may include one new feature and one fix, so if you stick with 1.1.0 then you will miss out on the fix as there will never be a 1.1.1 once 1.2.0 is already released. This is the reality of most open source packages.

Refered from  [Dependency Pinning](https://renovatebot.com/docs/dependency-pinning/)

## Possibility that Tilde might break your working code.
Suppose, if you find any bug in your dependency you will try to write a workaround to overcome this bug on your program. in later releases if they fix the bug there is a probability that your workaround might not work and break your code. You will end up modifying your code if it breaks even through its a bug that got fixed in your dependency.

## Conclusion
### Its always better to pin the dependencies because even thought you might think you will receive bug fixes using Tilde but its not really true if there are any minor or major updates you will definitely miss the fix

## Advantages of Dependency Pinning
- You mainly pin versions for certainty, an visibility. When you have a pinned version of each dependency in your package.json, you know exactly which version of each dependency is installed at any time. This benefits when upgrading versions as well as when rolling back in case of problems.
- You can pass on the exact dependencie versions (via Package-lock.json or Yarn-lock.json) which you have used during development to other developers so that it will be easy for them to install and run your project/package. 

## Disadvantage of pinning dependency
- Dependency Noise : Whenever there is an upgrade to one of your dependencies, you will get a request to update your package with latest version. It will be too noisy where there are too many deep dependency are getting updates. 
- Pinning dependenc results in outdated dependencies

