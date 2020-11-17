# Dicty Stock Center
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![License](https://img.shields.io/badge/License-BSD%202--Clause-blue.svg)](LICENSE)
![GitHub tag](https://img.shields.io/github/v/tag/dictyBase/dicty-stock-center)  
![GitHub action](https://github.com/dictyBase/dicty-stock-center/workflows/Node%20CI%20Develop/badge.svg)
[![codecov](https://codecov.io/gh/dictyBase/dicty-stock-center/branch/develop/graph/badge.svg)](https://codecov.io/gh/dictyBase/dicty-stock-center)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/dictyBase/dicty-stock-center)  
[![Technical debt](https://badgen.net/codeclimate/tech-debt/dictyBase/dicty-stock-center)](https://codeclimate.com/github/dictyBase/dicty-stock-center/trends/technical_debt)
[![Issues](https://badgen.net/codeclimate/issues/dictyBase/dicty-stock-center)](https://codeclimate.com/github/dictyBase/dicty-stock-center/issues)
[![Maintainability](https://badgen.net/codeclimate/maintainability/dictyBase/dicty-stock-center)](https://codeclimate.com/github/dictyBase/dicty-stock-center)  
![Issues](https://badgen.net/github/issues/dictyBase/dicty-stock-center)
![Open Issues](https://badgen.net/github/open-issues/dictyBase/dicty-stock-center)
![Closed Issues](https://badgen.net/github/closed-issues/dictyBase/dicty-stock-center)
![Total PRS](https://badgen.net/github/prs/dictyBase/dicty-stock-center)
![Open PRS](https://badgen.net/github/open-prs/dictyBase/dicty-stock-center)
![Closed PRS](https://badgen.net/github/closed-prs/dictyBase/dicty-stock-center)
![Merged PRS](https://badgen.net/github/merged-prs/dictyBase/dicty-stock-center)  
![Commits](https://badgen.net/github/commits/dictyBase/dicty-stock-center/develop)
![Last commit](https://badgen.net/github/last-commit/dictyBase/dicty-stock-center/develop)
![Branches](https://badgen.net/github/branches/dictyBase/dicty-stock-center)
![Tags](https://badgen.net/github/tags/dictyBase/dicty-stock-center)
![GitHub repo size](https://img.shields.io/github/repo-size/dictyBase/dicty-stock-center?style=plastic)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/dictyBase/dicty-stock-center?style=plastic)
[![Lines of Code](https://badgen.net/codeclimate/loc/dictyBase/dicty-stock-center)](https://codeclimate.com/github/dictyBase/dicty-stock-center/code)  
[![Funding](https://badgen.net/badge/NIGMS/Rex%20L%20Chisholm,dictyBase/yellow?list=|)](https://projectreporter.nih.gov/project_info_description.cfm?aid=9476993)
[![Funding](https://badgen.net/badge/NIGMS/Rex%20L%20Chisholm,DSC/yellow?list=|)](https://projectreporter.nih.gov/project_info_description.cfm?aid=9438930)

This is the repository for the new [Dicty Stock Center](https://dictycr.org/stockcenter).

## Cloud Native Development

All dictyBase development is now done with cloud native development in mind. It is expected
that you have your own [Kubernetes](https://kubernetes.io/) cluster running. Documentation
for the cloud deployment process can be found [here](https://github.com/dictyBase/Migration/tree/master/deployment).

The general workflow is to cut a `feature` or `fix` branch (see [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow))
then open a pull request when it is ready to merge into `develop`. We have a CI
pipeline set up with GitHub Actions that will run unit tests, type checking,
ESLint and other tasks for every pull request. When those checks pass, the branch
can then be merged into `develop`.

Every merge into `develop` will trigger a workflow that builds a new Docker image
based on that commit, pushes it to Docker Hub, then upgrades the corresponding pod
in your cluster.

## Local Development

In order for this application to work locally, you will need to configure the list of
login providers.

- Copy the provided sample [clientConfig.sample.ts](src/common/utils/clientConfig.sample.ts) file
  to **clientConfig.ts** in the same folder.
- Add any provider names and their corresponding client IDs.
- All providers should have a matching counterpart in the
  [oauthConfig.ts](src/common/utils/oauthConfig.ts) file. Fill up all of the
  configuration parameters for every new provider in that file.

After setting up the login providers, you can run `yarn install` and `yarn start` as usual.

## Backend Requirements

This app requires the following services to be running:

- [graphql-server](https://github.com/dictyBase/graphql-server)
- [graphql-authserver](https://github.com/dictyBase/graphql-authserver)

## Further Documentation

There is a static site available for [react-styleguidist documentation](https://dictybase.github.io/dicty-stock-center/).

More documentation can be found in the [docs](./docs) folder.

## Active Developers

<a href="https://sourcerer.io/cybersiddhu"><img src="https://sourcerer.io/assets/avatar/cybersiddhu" height="80px" alt="Sourcerer"></a>
<a href="https://sourcerer.io/wildlifehexagon"><img src="https://sourcerer.io/assets/avatar/wildlifehexagon" height="80px" alt="Sourcerer"></a>

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://www.erichartline.net/"><img src="https://avatars3.githubusercontent.com/u/13489381?v=4" width="100px;" alt=""/><br /><sub><b>Eric Hartline</b></sub></a><br /><a href="https://github.com/dictyBase/dicty-stock-center/issues?q=author%3Awildlifehexagon" title="Bug reports">🐛</a> <a href="https://github.com/dictyBase/dicty-stock-center/commits?author=wildlifehexagon" title="Code">💻</a> <a href="https://github.com/dictyBase/dicty-stock-center/commits?author=wildlifehexagon" title="Documentation">📖</a> <a href="#design-wildlifehexagon" title="Design">🎨</a> <a href="#maintenance-wildlifehexagon" title="Maintenance">🚧</a> <a href="https://github.com/dictyBase/dicty-stock-center/commits?author=wildlifehexagon" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!