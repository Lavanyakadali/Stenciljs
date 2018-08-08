## Task 1: Absolute versioning vs Tilde versioning

Possibility that Tilde might break your working code. So, Its always better to pin the dependencies because even thought you might think you will receive bug fixes using Tilde but its not really true if there are any minor or major updates you will definitely miss the fix.

## Advantages of Dependency Pinning
- You mainly pin versions for certainty, an visibility. When you have a pinned version of each dependency in your package.json, you know exactly which version of each dependency is installed at any time. This benefits when upgrading versions as well as when rolling back in case of problems.
- You can pass on the exact dependencie versions (via Package-lock.json or Yarn-lock.json) which you have used during development to other developers so that it will be easy for them to install and run your project/package. 

## Disadvantage of pinning dependency
- Dependency Noise : Whenever there is an upgrade to one of your dependencies, you will get a request to update your package with latest version. It will be too noisy where there are too many deep dependency are getting updates. 
- Pinning dependenc results in outdated dependencies.
