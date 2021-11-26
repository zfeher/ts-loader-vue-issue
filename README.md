
# Steps

1, Install (checked with Node 16 and npm 8)

```Bash
npm install
```

2, Start webpack dev server

```Bash
npm run dev
```

webpack shouldn't display errors.

3, Open `src/types.ts` and change `data` => `data2` and save the file

webpack should print an error (2 actually):

```Bash

ERROR in /home/someuser/someproject/ts-loader-vue-issue/src/Stuff.vue.ts

[tsl] ERROR in /home/someuser/someproject/ts-loader-vue-issue/src/Stuff.vue.ts(4,31)
      TS2322: Type '{ id: number; data: string; }' is not assignable to type 'Stuff'.
  Object literal may only specify known properties, but 'data' does not exist in type 'Stuff'. Did you mean to write 'data2'?
```

4, change `data2` back to `data` and save the file

webpack will print the same error whereas we fixed the typing.

Feel free to change the type however you want, webpack will ignore it and stick to an initial version/or first modification.

# Notes

Restarting webpack dev server fixes this problem and "allows" a single modification of `src/types.ts`. After that initial modification it won't ever change.

This only occurs if we involve a vue single file component. This works just fine with regular .ts files. Another note to make that this can be also resolved if the `types.ts` exports some actual usable code and not just types.
