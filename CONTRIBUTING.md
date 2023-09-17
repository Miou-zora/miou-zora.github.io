# Contribution guidelines

Thank you for considering contributing to my miou-zora.github.io project!

These guidelines are meant for me. The only purpose of these guidelines is to remain consistent in my work. If you want to contribute to this project, you can read these guidelines to understand how I work.

#### Langage: English

All interactions should be in English.

### Description of the project

This project is a website with a main purpose to keep a to do list of projects I want to do one day. It's a simple website with a simple design ;).

This website should also be a way to describe myself and my work like a portfolio.

## Table of Contents

- [Documentation](#documentation)
- [How to launch the project](#how-to-launch-the-project)
  - [Dependencies](#dependencies)
  - [Execution](#execution)
- [How to report a bug](#how-to-report-a-bug)
- [How to suggest a feature or enhancement](#how-to-suggest-a-feature-or-enhancement)
- [Where can I ask for help?](#where-can-i-ask-for-help)
- [Coding style](#coding-style)
- [Commit format](#commit-format)
- [Labels](#labels)
- [Branches](#branches)
  - [Namming](#branches-namming)
- [Pull Requests](#pull-requests)
  - [Namming](#pull-requests-namming)
  - [Process](#pull-requests-process)
    - [Code review](#pull-requests-process-code-review)
    - [PR Stability](#pull-requests-process-PR-stability)
    - [Miscellaneous](#pull-requests-process-miscellaneous)
- [Milestone](#milestones)
  - [Namming](#milestones-namming)
- [Testing Policies](#testing-policies)
  - [Unit tests](#testing-policies-unit-tests)
  - [Functional tests](#testing-policies-functional-tests)
  - [CI / CD](#testing-policies-CI-CD)
- [Contributors](#contributors)

## Documentation

There is no documentation for the moment but you can maybe find some documentation in the code.

## How to launch the project

### Dependencies

To launch the project, you need to install this dependencie:
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

To install other dependencies, you need to run the following commands at the root of the repository:
```bash
npm install
```

### Execution

To launch the server, you need to execute the following command:

```bash
npm start
```
and 'a' to launch on android or 'i' to launch on ios.

## How to report a bug

If you find a bug, you can open an issue on the repository. You need to describe the bug and how to reproduce it. You can maybe find a template for the issue.

## How to suggest a feature or enhancement

If you want to suggest a feature or enhancement, you can open an issue on the repository. You need to describe the feature or enhancement. You can maybe find a template for the issue.

## Where can I ask for help?

You can ask for help to [me](https://github.com/Miou-zora) or on the issue/PR.

(When interacting with me, please be human being)

## Coding style

I use EsLint as coding style.

You can check it with the following command:
```bash
npm run lint
```

## Commit format

In the project, I use [Angular Commit Convention](https://www.conventionalcommits.org/en/v1.0.0-beta.4/)

## Labels

Each labels must be the type of the Issue.

/!\ It's not the work functional type but the type of the issue. /!\

## Branch

### Namming

Branch should have an automatic namming due to branch creation via issues. But if you create a branch from nothing you must use [Angular Commit Convention](https://www.conventionalcommits.org/en/v1.0.0-beta.4/).

## Pull Requests (PR)

### Namming

If you create a PR, you must use [Angular Commit Convention](https://www.conventionalcommits.org/en/v1.0.0-beta.4/).

(In most of the case, you can reuse one of your commit message)

### Process

#### Code review

For each PR we'll have a code review, the PR must be approved by [me](https://github.com/Miou-zora).

#### PR Stability

Look at the [**Testing Policies**](#testing-policies)

#### Miscellaneous

Don't add to miou-zora.github.io github project except if the PR doesn't have issue (it shouldn't be the case but why not).

Don't add to any Milestone of the project. If you doubt, ask to [me](https://github.com/Miou-zora).

## Milestone

Milestone are used to organize the project. Each milestone must have a description and a due date. A milestone should be linked to an issue or a PR. A milestone should be linked to a set of functionnalities that makes the project works or a set of functionnalities that makes the project coherent.

### Namming

If you create a milestone, you must just describe the milestone simply like:

- "Home" page
- "To do list" page
- "My projects" page

## Testing Policies

### Unit tests

Please do unit tests if you can. I don't have a coverage goal for the moment.

### Functional tests

I don't force you to do functional tests but if you can do it, it's better.

### CI / CD

I have a really basic CI at the moment.

## Contributors

 - [Me | Miouzora | Alexandre Franquet](https://github.com/Miou-zora)
