# iSeed
Based on advice on the [lecture about infrastructure at Yandex](http://alt-j.github.io/front-end-infrastructure/).

[Russian version](https://github.com/alt-j/iseed/blob/master/README.ru.md).

## Quick start
```
git clone git@github.com:alt-j/iseed.git
cd iseed
npm install
npm build
```
Then open the link in your favorite browser: `build/index.html`.

## What's inside?

### Features
  * [Static code analyser and codestyle checking with jsint and jscs](#static-code-analyser-and-codestyle-checking)
  * [Unit tests with mocha and phantomjs](#run-tests)
  * Using [git hooks](https://github.com/tarmolov/git-hooks-js) to lint your code and run tests before each commit

### Tools
  * [eslint](http://eslint.org/) — a tool to detect errors and potential problems in JavaScript code
  * [jscs](http://jscs.info/) — a code style checker for javascript
  * [git-hooks](https://github.com/tarmolov/git-hooks-js) — a tool for git hooks managment
  * [mocha](http://visionmedia.github.io/mocha/) + [chai](http://chaijs.com/) + [sinon](http://sinonjs.org/) + [phantomjs](http://phantomjs.org/) + [karma](http://karma-runner.github.io/)— testing client javascript

## How it works

### Project structure
```
.git-hooks          Git hooks
src                 Source code
src/assets          Static data
src/js              Javascript files
src/styles          CSS or Stylus files
```

## Commands

### For build project
```
npm run build
```

Builded version located in `./build` directory.

### For development
```
npm run dev
```

After that open [http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/) with your favorite browser.

### For static code analyse and codestyle checking
```
npm run lint
```

### For run tests
Run tests:
```
npm run test
```


## Contribution
  * [Codestyle](https://github.com/yandex/codestyle/blob/master/javascript.md)
