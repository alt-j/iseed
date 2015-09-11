# iSeed
Основан на советах из [лекции об инфраструктуре Яндекса](http://alt-j.github.io/front-end-infrastructure/).

## Быстрый старт
```
git clone git@github.com:alt-j/iseed.git
cd iseed
npm install
npm build
```
После чего откройте ссылку в любимом браузере: `build/index.html`.

## Что внутри?

### Функциональность
  * [Статический анализатор кода jsint и проверка стиля кодирования jscs](#static-code-analyser-and-codestyle-checking)
  * [Юнит тесты с использованием mocha и phantomjs](#run-tests)
  * Используется [git hooks](http://github.com/tarmolov/git-hooks) для валидации кода и запуска тестов перед коммитом.

### Инструменты
  * [eslint](http://eslint.org/) — инструмент для нахождения ошибок и потенциальных угроз в JavaScript коде
  * [jscs](http://jscs.info/) — проверка стиля кодирования
  * [git-hooks](https://github.com/tarmolov/git-hooks-js) — инструмент для управления git hooks
  * [mocha](http://visionmedia.github.io/mocha/) + [chai](http://chaijs.com/) + [sinon](http://sinonjs.org/) + [phantomjs](http://phantomjs.org/) + [karma](http://karma-runner.github.io/)— тестирование клиентского javascript кода

## Как это работает

### Структура проекта
```
.git-hooks          Git hooks
src                 Исходный код
src/assets          Статика
src/js              Javascript файлы
src/styles          CSS или Stylus файлы
```

## Как разрабатывать?
### Собрать проект
```
npm run build
```

### Статический анализ кода и проверка стиля
```
npm run lint
```

### Запуск тестов
Run tests:
```
npm run test
```

## Участие в проекте
  * [Codestyle](https://github.com/yandex/codestyle/blob/master/javascript.ru.md)
