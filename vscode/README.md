* `launch.json` (put it in `<project root dir>/vscode/launch.json`) contains useful configuration options for launching VS Code Node.js (ES6 Modules support) debugger, locally.
Before using it, change all properties, setting them according to your project needs. 

* `launch2.json` shows how to configure the `program` property in a way that allows you to run a debugger, when the main file of your app (some `index.js`) not in your root workspace folder.

* `launch3.json` is same as `launch.json` but without ES6 Modules support

* `settings.json` (put it in `~/.config/Code/User/`) contains all global VS Code settings 

* **`2024.code-profile` includes `settings.json` + all plugin settings, so this is what you should try to use in the first place.** Import it in VScode using Settings > Profile > Import
