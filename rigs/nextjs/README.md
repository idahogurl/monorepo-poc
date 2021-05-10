
# @healthline/nextjs-rig

A rig package for Next.js. To learn more about rig packages, consult the [@rushstack/rig-package](https://www.npmjs.com/package/@rushstack/rig-package) documentation.

This rig is not a complete Heft rig package. Next.js has it's own build system which removes the necessity of Heft. It only contains config files for TypeScript and Jest. 

To enable it, 
1) Install rig package inside Rush project that uses `Next.js`. `rush add -p @healthline/nextjs-rig --dev` 
2) Add or modify the `tsconfig.json` file in the root of your project to only contain the following:

**tsconfig.json**
{
  "extends": "./node_modules/@healthline/nextjs-rig/profiles/default/tsconfig-base.json",
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

3) Add `jest.config.json` file in the root of your project containing the following:

**jest.config.json**
```js
{
  "preset": "./node_modules/@healthline/nextjs-rig/jest-shared.config.json"
}
```

## Links

[CHANGELOG.md](https://github.com/healthline/monorepo-poc/CHANGELOG.md) - Find out what's new in the latest version
