
 # @healthline/heft-nextjs-rig

 A rig package for Next.js. To learn more about rig packages, consult the [@rushstack/rig-package](https://www.npmjs.com/package/@rushstack/rig-package) documentation.

 This rig is not a complete Heft rig package. Next.js has it's own build system which removes the necessity of Heft.

 To enable it, add a `tsconfig.json` and `jest.config.json` file to your project, as shown below:

 **tsconfig.json**
 ```js
 {
   "extends": "./node_modules/@healthline/nextjs-rig/profiles/default/tsconfig-base.json",
 }
 ```

 **jest.config.json**
 ```js
 {
   "preset": "./node_modules/@healthline/nextjs-rig/jest-shared.config.json"
 }
 ```