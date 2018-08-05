# Security Vulnerability

In a world where application dependency graphs are deeper than ever, secure engineering means more than securing your own software. Tracking vulnerabilities in your dependencies is just as important as securing your own software.

Popular dependencies are very juicy targets for malicious attackers. A single vulnerability in most popular dependency Rails can potentially affect thousands of apps, so attackers are likely to invest their resources in uncovering and automatically exploiting those.

Refer and further read [Vulnerability Scanning for your Dependencies: Why and How](https://www.aptible.com/blog/vulnerability-scanning-for-your-dependencies-why-and-how/)

Its your responsibility to frequently monitor your dependencies for any known Security Vulnerabilities, because if some one reported any Security Vulnerability then attackers will be first to exploit those packages.

Now we will see what different options available for both npm and yarn. 

## npm

Knowing the seviarity of dependency vulnerability, npm released a built in security feature( **npm audit**) when they released npm@6 on April 24th 2018 (Refer: [Announcing npm@6](https://blog.npmjs.org/post/173260195980/announcing-npm6)).

npm audit (Refer [npm security audit](https://docs.npmjs.com/getting-started/running-a-security-audit) for through understanding).

## yarn

yarn is yet to implement this feature, current it doesn't have any built in security feature to identify dependency security vulnerabilities.

Discussions are still going on refer live discussion about [yarn audit](https://github.com/yarnpkg/yarn/issues/5808).

## External Packages which can identify known dependency security vulnerabilities.
### snyk.io
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

### JFrog Xray



