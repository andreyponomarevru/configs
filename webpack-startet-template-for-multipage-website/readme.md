# About

**Biscuit**  is an HTML/CSS/JavaScript framework based on BEM methodology and a mobile-first approach, intended for a quick start while developing websites. 
Biscuit provides a Webpack starter template and library of ready to use BEM blocks (UI components and other stuff).

Utilizes Pug templating engine and SASS preprocessor.

In simple words, Biscuit is a lightweight analog of Bootstrap, already integrated with Webpack project template and tailored to accommodate BEM.

For now, it consists of two parts:
  * `biscuit` — [Webpack starter template for developing static websites](https://github.com/ponomarevandrey/biscuit)
  * `biscuit-blocks-lib` — [BEM blocks library](https://github.com/ponomarevandrey/biscuit-blocks-lib)


## Browser support and current status (fall 2019)

**Supported browsers:** 
  * Chrome >= 75
  * Opera >= 57
  * Firefox >= 67

Right now I'm at the very beginning of the framework testing process so there might be some bugs: primarily inconsistencies between browsers (especially Edge and Safari). Mobile browsers support is also not yet tested

## Why I built it

# Getting started

  * To start using Biscuit, clone the [project repository](https://github.com/ponomarevandrey/biscuit) to your local machine and run `npm install`:
    ```shell
    mkdir <your-project-folder>
    cd <your-project-folder>
    git clone https://github.com/ponomarevandrey/biscuit-blocks-lib ./
    ```
  
  * then add Biscuit blocks library — https://github.com/ponomarevandrey/biscuit-blocks-lib — BEM blocks library which is intended for use specifically with Biscuit for speeding up application/website development process. **Never modify any files in the library or you won't be able to update to the newer version of the library. Use it 'as is'**. To install this library into your project based on Biscuit framework, do the following:
    ```shell
    cd  <your-project-folder>/src
    mkdir 'blocks.biscuit-lib'
    cd 'blocks.biscuit-lib'
    git clone https://github.com/ponomarevandrey/biscuit-blocks-lib ./
    ```

**By default, ALL blocks will be bundled into your production bundle.**

Currently BEM blocks library is under development so from time to time I change something in it. To check if something had changed in BEM blocks library repository:
   ```
   cd 'blocks.biscuit-lib'
   git diff origin 
   ```
And if there are differences, in order to sync remove BEM blocks library repository with the one in your project:
   ```shell
   cd 'blocks.biscuit-lib'
   git pull -p
   ```

## How it works

![How it works](https://github.com/ponomarevandrey/biscuit/blob/master/src/img/how-it-works.svg?sanitize=true)

## Webpack bundling process

## The order for including BEM entities in the build

## Build result
```txt
build/
  index.html
  404.html
  doc.html
  demo.html
  styles.[contenthash].css
  scripts.[contenthash].js
  img/
  icons/
```
# Configuration

1. When starting a new project, open webpack.config.js and remove the following block of code:
    ```javascript
    // demo page
    new HtmlWebpackPlugin({
      inject: true,
      hash: false,
      filename: 'demo.html',
      template: './src/pug/page-demo.pug',
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
    }),
    ```
    Also remove `page-demo.pug` in `/pug` folder

    If you need any other html pages, besides of `index.html` and `404.html`, add the following code in `webpack.config.js`:

    ```javascript
    // demo page
    new HtmlWebpackPlugin({
      inject: true,
      hash: false,
      filename: 'my-new-page.html',
      template: './src/pug/page-my-new-page.pug',
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
    }),
    ```
    and create `.pug` files mentioned in code above in `pug/` folder

2. Develop website/app
3. After you're done, remove all unused blocks from your bundle by commenting them out in Webpack entry point `src/index.js`
