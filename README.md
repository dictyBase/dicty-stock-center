# Dicty-Stock-Center

[![License](https://img.shields.io/badge/License-BSD%202--Clause-blue.svg)](LICENSE)  
![GitHub tag](https://img.shields.io/github/v/tag/dictyBase/Dicty-Stock-Center)  
![GitHub action](https://github.com/dictyBase/Dicty-Stock-Center/workflows/Node%20CI/badge.svg)
[![codecov](https://codecov.io/gh/dictyBase/Dicty-Stock-Center/branch/develop/graph/badge.svg)](https://codecov.io/gh/dictyBase/Dicty-Stock-Center)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/dictyBase/Dicty-Stock-Center)  
[![Dependency Status](https://david-dm.org/dictyBase/Dicty-Stock-Center/develop.svg?style=flat-square)](https://david-dm.org/dictyBase/Dicty-Stock-Center/develop)
[![devDependency Status](https://david-dm.org/dictyBase/Dicty-Stock-Center/develop/dev-status.svg?style=flat-square)](https://david-dm.org/dictyBase/Dicty-Stock-Center/develop?type=dev)  
[![Technical debt](https://badgen.net/codeclimate/tech-debt/dictyBase/Dicty-Stock-Center)](https://codeclimate.com/github/dictyBase/Dicty-Stock-Center/trends/technical_debt)
[![Issues](https://badgen.net/codeclimate/issues/dictyBase/Dicty-Stock-Center)](https://codeclimate.com/github/dictyBase/Dicty-Stock-Center/issues)
[![Maintainability percentage](https://badgen.net/codeclimate/maintainability-percentage/dictyBase/Dicty-Stock-Center)](https://codeclimate.com/github/dictyBase/Dicty-Stock-Center)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=dictyBase/Dicty-Stock-Center)](https://dependabot.com)  
![Issues](https://badgen.net/github/issues/dictyBase/Dicty-Stock-Center)
![Open Issues](https://badgen.net/github/open-issues/dictyBase/Dicty-Stock-Center)
![Closed Issues](https://badgen.net/github/closed-issues/dictyBase/Dicty-Stock-Center)
![Total PRS](https://badgen.net/github/prs/dictyBase/Dicty-Stock-Center)
![Open PRS](https://badgen.net/github/open-prs/dictyBase/Dicty-Stock-Center)
![Closed PRS](https://badgen.net/github/closed-prs/dictyBase/Dicty-Stock-Center)
![Merged PRS](https://badgen.net/github/merged-prs/dictyBase/Dicty-Stock-Center)  
![Commits](https://badgen.net/github/commits/dictyBase/Dicty-Stock-Center/develop)
![Last commit](https://badgen.net/github/last-commit/dictyBase/Dicty-Stock-Center/develop)
![Branches](https://badgen.net/github/branches/dictyBase/Dicty-Stock-Center)
![Tags](https://badgen.net/github/tags/dictyBase/Dicty-Stock-Center)
![GitHub repo size](https://img.shields.io/github/repo-size/dictyBase/Dicty-Stock-Center?style=plastic)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/dictyBase/Dicty-Stock-Center?style=plastic)
[![Lines of Code](https://badgen.net/codeclimate/loc/dictyBase/Dicty-Stock-Center)](https://codeclimate.com/github/dictyBase/Dicty-Stock-Center/code)  
[![Funding](https://badgen.net/badge/NIGMS/Rex%20L%20Chisholm,dictyBase/yellow?list=|)](https://projectreporter.nih.gov/project_info_description.cfm?aid=9476993)
[![Funding](https://badgen.net/badge/NIGMS/Rex%20L%20Chisholm,DSC/yellow?list=|)](https://projectreporter.nih.gov/project_info_description.cfm?aid=9438930)

This is the repository for the new [Dicty Stock Center](https://testdb.dictybase.org/stockcenter).

## Cloud Native Development

All dictyBase development is now done with cloud native development in mind. It is expected
that you have your own [Kubernetes](https://kubernetes.io/) cluster running. Documentation
for the cloud deployment process can be found [here](https://github.com/dictyBase/Migration/tree/master/deployment).

The general idea is that after every git commit a new Docker image is built based on that commit,
pushed to Docker Hub, then the corresponding Helm chart is upgraded with that image tag
inside your cluster.

## Local Development

In order for this application to work locally, you will need to configure the list of
login providers.

- Copy the provided sample [clientConfig.sample.js](src/common/utils/clientConfig.sample.js) file
  to **clientConfig.js** in the same folder.
- Add any provider names and their corresponding client IDs.
- All providers should have a matching counterpart in the
  [oauthConfig.js](src/common/utils/oauthConfig.js) file. Fill up all of the
  configuration parameters for every new provider in that file.

After setting up the login providers, you can run `npm install` and `npm start` as usual.
There are also [husky](https://github.com/typicode/husky) scripts set up to run unit tests
on `pre-commit` and run [Skaffold](https://github.com/GoogleContainerTools/skaffold) on `post-commit`.

## Backend Requirements

This app requires the following services to be running:

- [graphql-server](https://github.com/dictyBase/graphql-server)
- [modware-content](https://github.com/dictyBase/modware-content)
- [modware-user](https://github.com/dictyBase/modware-user) (used for login)
- [authserver](https://github.com/dictyBase/authserver)

It also relies on the navbar and footer JSON files found in the
[migration-data](https://github.com/dictyBase/migration-data) repository. An example
of the necessary environmental variables can be found [here](.env.development).

## Further Documentation

More documentation can be found in the [docs](./docs) folder, including mockups,
wireframes and Redux shape of state diagrams.

## Active Developers

<a href="https://sourcerer.io/cybersiddhu"><img src="https://sourcerer.io/assets/avatar/cybersiddhu" height="80px" alt="Sourcerer"></a>
<a href="https://sourcerer.io/wildlifehexagon"><img src="https://sourcerer.io/assets/avatar/wildlifehexagon" height="80px" alt="Sourcerer"></a>
