---
title: IntelliJ IDEA Console Log Options
createdAt: 2020-12-18
description: Live edit and plugin research.
category: misc
---

A common need is to write ```console.log(`${VAR}`)``` statements while coding JavaScript/TypeScript. Ideally one could highlight the variable and use a shortcut. I went searching for a quick method to do this on IntelliJ IDEA. There is a built-in postfix code completion and live templates. It took me a while to find the details.

Relevant question/answers on SO: https://stackoverflow.com/a/52429534/123378

## Using Built-in Postfix code completion

```js
// example1
my_var.log + <Tab> => console.log(my_var);

// example2: string
'hello'.log + <Tab> => console.log('hello');

// example3: string and variable
'hello', my_var.log + <Tab> => console.log('hello', my_var);
```

## Custom Live Template

Added `ll` trigger with:
```js
console.log($SELECTION$, '$SELECTION$')$END$
```

## Custom Postfix
Replaced existing `$EXPR$.log` (log):
```js
console.log($EXPR$)
```
 
with
```js
console.log('$EXPR$', $EXPR$)
```


## IntelliJ IDEA Docs

* [Postfix code completion](https://www.jetbrains.com/help/idea/2020.3/auto-completing-code.html#postfix_completion) 
* [Live Templates](https://www.jetbrains.com/help/idea/2020.3/using-live-templates.html)
  * [Live Template Variables](https://www.jetbrains.com/help/idea/2020.3/template-variables.html)


## Additional Research

* Plugin: [Super Console Log](https://plugins.jetbrains.com/plugin/11936-super-console-log) <small>([Source](https://github.com/fernando88to/SuperConsoleLog))</small>
  * Doesn't show up in plugin marketplace.

* Plugin: [Console Log](https://plugins.jetbrains.com/plugin/10986-console-log) <small>()[Source](https://github.com/iguissouma/intellij-console-log))</small>
  * Reviews indicate only partially works

* Visual Code Plugin: [Turbo Console Log](https://marketplace.visualstudio.com/items?itemName=ChakrounAnas.turbo-console-log)
  
* Live Templates
  * [Example 1](https://medium.com/better-programming/intellij-live-template-for-console-log-that-will-improve-your-daily-development-life-ef1320a8fe81) on Medium, by Aiko Klostermann
  * [Example 2](https://stackoverflow.com/questions/38916473/intellij-live-template-for-logging-a-selected-variable-in-js), on SO 





