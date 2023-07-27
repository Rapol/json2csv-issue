# json2csv issue

Issue: https://github.com/juanjoDiaz/json2csv/issues/21

To reproduce:

```
npm i
npm run test
```

It should fail with 

```
/jsoncsvrepro/node_modules/@json2csv/node/dist/mjs/index.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,jest){export { default as AsyncParser } from './AsyncParser.js';
                                                                                      ^^^^^^

    SyntaxError: Unexpected token 'export'

    > 1 | import { AsyncParser, ParserOptions } from '@json2csv/node';
```