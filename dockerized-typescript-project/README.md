# Dockerized TypeScript app

The project demonstrates how to set up and debug TypeScript app inside Docker container with VS Code. 

We use:
* Docker (Docker Compose)
* Node.js (Express.js) app
* TypeScript Compiler
* VS Code
* `ts-node` and `nodemon` packages 

## TypeScript Compiler configuration

You can fine-tune configuration through options in `tsconfig.json` and `start` script in `package.json`.

**`package.json`:**
```json
...
    "start": "nodemon --watch ./src/**/* -e ts,json --exec TS_NODE_PROJECT=tsconfig.json node --inspect=0.0.0.0:9229 -r ts-node/register ./src/index.ts"
...
```

* `--watch ./src/**/*` tells `nodemon` to watch for only `src` folder

* `--e ts,json` tells `nodemon` to watch only for the files with these extensions

* `--exec TS_NODE_PROJECT=tsconfig.json node --inspect=0.0.0.0:9229 -r ts-node/register ./src/index.ts` tells `nodemon` to start `node` and pass it `TS_NODE_PROJECT` environment variable which specifies the location and name of TypeScript Compiler config file (this variable is used by TypeScript Compiler). `-r` flag is a short command-line variant of `require()`, it preloads  the specified module at startup, in our case we preload `ts-node/register`. Finally we pass to `node` process the name of the main app's file - `index.ts`.

* If you need to debug the script from the very first line, change `... node --inspect=0.0.0.0:9229 ...` to `... node --inspect-brk=0.0.0.0:9229 ...`

Note the `volume` option in `dcoker-compose.yml`: we mount `tsconfig.json` (to tell TSC *how* to compile `.ts` files inside container) and `src` folder (containing all source `.ts`-files )


## VS Code Debugger configuration

`.vscode/launch.json` (pay attention to `sourceMapPathOverrides` option and make sure you provided the correct value, otherwise the debugger won't stop on breakpoints)
