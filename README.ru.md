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
  * Используется [git hooks](http://github.com/tarmolov/git-hooks) для валидации кода и запуска тестов перед коммитом

### Инструменты
  * [eslint](http://eslint.org/) — инструмент для нахождения ошибок и потенциальных угроз в JavaScript коде
  * [jscs](http://jscs.info/) — проверка стиля кодирования
  * [git-hooks](https://github.com/tarmolov/git-hooks-js) — инструмент для управления git hooks
  * [mocha](https://mochajs.org/) + [chai](http://chaijs.com/) + [sinon](http://sinonjs.org/) + [phantomjs](http://phantomjs.org/) + [karma](http://karma-runner.github.io/)— тестирование клиентского javascript кода

## Как это работает

### Структура проекта
```
.git-hooks          Git hooks
src                 Исходный код
src/assets          Статика
src/js              Javascript-файлы
src/styles          CSS- или Stylus-файлы
```

## Команды

### Для сборки проекта
```
npm run build
```

Собранная версия проекта находится в директории `./build`.

### Для разработки
```
npm run dev
```

После этого откройте [http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/) в своем любимом браузере.

### Для статического анализа кода и проверки стиля
```
npm run lint
```

### Для запуска тестов
Run tests:
```
npm run test
```

## Участие в проекте
  * [Codestyle](https://github.com/yandex/codestyle/blob/master/javascript.ru.md)
