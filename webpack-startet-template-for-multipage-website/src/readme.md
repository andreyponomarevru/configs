`_variables-mixins-and-functions.scss`
contains global variables, mixins and functions. It is already imported in every .scss file of the project
through `webpack.config.js` (in sass-loader options). This file, `_variables-mixins-and-functions.scss`, makes variables, mixins and functions, declared inside it, available in all SCSS files of the project.
IMPORTANT: `_variables-mixins-and-functions.scss` should only contain variables, mixins and functions and nothing else(!). Thus when compiled, the entire content of `_variables-mixins-and-functions.scss` 'dissapears', being imported (and compiled into actual CSS) into every SCSS file. More on this: https://github.com/angular/angular-cli/issues/8431#issuecomment-343486059

`_reset.scss`
global css reset. Imported in final CSS file through `index.js`

`index.js`
is the entry point for Webpack. We import all blocks in the same order they are mentioned in the main 'html' block

`master`
(`.master` class assigned to `<html>` tag)
is the main block of the project and master template for Pug plugin in `webpack.config.js`. It bundles all Pug files of the project together
