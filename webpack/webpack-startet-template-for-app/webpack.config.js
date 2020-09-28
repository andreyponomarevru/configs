const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PrettierPlugin = require('prettier-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const RunPostCSSAfterCompilationPlugin = require('run-postcss-after-compilation-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

//
// Webpack Configuration
//

function webpackConfig(env, options) {
  // console.log(options.mode); // returns string 'development' or 'production'
  return {
    entry: {
      master: './src/index.js',
    },  
    devtool: 'inline-source-map',
    output: {
      path: path.resolve(__dirname + '/dist'),
      filename: 'scripts.[contenthash].js',
      publicPath: './',
    },
    watch: true,
    optimization: {
      minimize: false,
      minimizer: [ uglifyJsPlugin, terserPlugin, optimizeCSSAssetsPlugin ],
    },
    devServer: {
      overlay: true,
      publicPath: '/',
      contentBase: './dist',
    },
    module: { rules: [ cssLoader, imageLoader, htmlPugLoader, fontLoader, jsLoader ] },
    plugins: [ 
      htmlWebpackPlugin,
      miniCssExtractPlugin,
      prettierPlugin,
      runPostCSSAfterCompilationPlugin,
      copyPlugin
    ]
  }
}

//
// Loaders
//

const cssLoader =        {
  // CSS (SASS) LOADER
  test: /\.(sa|sc|c)ss$/,
  use: [
    { loader: MiniCssExtractPlugin.loader },

    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
      },
    },
    // each loader, including css-nano applies to every SCSS file individualy,
    // this is the reason why css nano doesn't merge and optimize duplicated code
    // from different SCSS files. Should be fixed
    // https://stackoverflow.com/questions/52564625/cssnano-doesnt-remove-duplicates
    // https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/63#issuecomment-100493459
    {
      loader: 'postcss-loader',
      options: {
        config: {
          path: __dirname + '/postcss.config.js',
        },
      },
    },

    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
        data:
          '@import "node_modules/biscuit-components/_biscuit-global.scss"; @import "./src/blocks/_global.scss";',
        includePaths: [__dirname, 'src'],
      },
    },
  ],
};

cosnt imageLoader = {
  // IMAGE LOADER
  test: /\.(jpe?g|png|gif|ico|svg)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        context: 'src',
        // eslint-disable-next-line no-unused-vars
        outputPath: (url, resourcePath, context) => {
          if (/favicon/.test(resourcePath)) return `img/favicon/${url}`;
          return `img/${url}`;
        },
      },
    },
  ],
};

const htmlPugLoader = {
  // HTML (PUG) LOADER
  test: /\.pug$/,
  use: [
    {
      loader: 'html-loader-srcset',
      options: {
        attrs: ['img:src', 'img:srcset', 'object:data'],
      },
    },
    {
      loader: 'pug-html-loader',
      options: { pretty: true, exports: false },
    },
  ],
};

const fontLoader = {
  // FONT LOADER
  test: /\.(woff|woff2|eot|ttf)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: 'fonts/[name].[ext]',
      },
    },
  ],
};

const jsLoader = {
  // JS LOADER (BABEL)
  test: /\.js$/,
  exclude: /(node_modules)/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
      plugins: ['@babel/plugin-proposal-class-properties']
    },
  },
};

//
// Plugins
//

const uglifyJsPlugin = new UglifyJsPlugin({
  uglifyOptions: {
    compress: {
      drop_console: true,
    },
  },
});

const terserPlugin = new TerserPlugin({
  sourceMap: true,
  terserOptions: {
    output: {
      comments: false,
    },
  },
});

const optimizeCSSAssetsPlugin = new OptimizeCSSAssetsPlugin({
  cssProcessor: require('cssnano'),
  cssProcessorPluginOptions: {
    preset: [
      'default',
      {
        discardComments: { removeAll: true },
        normalizeWhitespace: false,
      },
    ],
  },
  canPrint: true,
});

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  inject: true,
  hash: false,
  filename: 'index.html',
  template: './src/pug/index.pug',
  minify: {
    removeComments: true,
    collapseWhitespace: false,
  },
});

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: 'styles.[contenthash].css',
});

const prettierPlugin = new PrettierPlugin({
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  trailingComma: 'es5',
  bracketSpacing: true,
});

const runPostCSSAfterCompilationPlugin = new RunPostCSSAfterCompilationPlugin(
  path.resolve(__dirname, 'postcss.config.js')
);

// new CopyPlugin([{ from: 'src/favicon', to: '/' }]),
// copies files to root folder:
const copyPlugin = new CopyPlugin([{ from: 'src/favicon' }]);
