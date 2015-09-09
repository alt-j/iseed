# iSeed
Based on advice on the [lecture about infrastructure at Yandex](http://alt-j.github.io/front-end-infrastructure/).

## Quick start
```
git clone git@github.com:alt-j/iseed.git
cd js-seed
npm install
npm build
```
Then open the link in your favorite browser: `build/index.html`.

## What's inside?

### Features
  * [Static code analyser and codestyle checking with jsint and jscs](#static-code-analyser-and-codestyle-checking)
  * [Unit tests with mocha and phantomjs](#run-tests)
  * Using [git hooks](http://github.com/tarmolov/git-hooks) to lint your code and run tests before each commit

### Tools
  * [eslint](http://eslint.org/) — a tool to detect errors and potential problems in JavaScript code
  * [jscs](http://jscs.info/) — a code style checker for javascript
  * [git-hooks](https://github.com/tarmolov/git-hooks-js) — a tool for git hooks managment
  * [mocha](http://visionmedia.github.io/mocha/) + [chai](http://chaijs.com/) + [sinon](http://sinonjs.org/) + [phantomjs](http://phantomjs.org/) + [karma](http://karma-runner.github.io/)— testing client javascript

## How it works

### Project structure
```
.enb                ENB config for building project
.git-hooks          Git hooks
src                 Source code
src/assets          Static data
src/js              Javascript files
src/styles          CSS or Stylus files
```

## How to develop?
### Build project
```
npm run build
```

### Static code analyser and codestyle checking
```
npm run lint
```

### Run tests
Run tests:
```
npm test
```

## Contribution
  * [Codestyle](https://github.com/yandex/codestyle/blob/master/javascript.md)
