# INTELPLAT WEB

### Build tools

- [x] [Webpack 4](https://webpack.github.io)
  - [x] [Tree Shaking](https://medium.com/@Rich_Harris/tree-shaking-versus-dead-code-elimination-d3765df85c80)
  - [x] [Webpack Dev Server](https://github.com/webpack/webpack-dev-server)
- [x] [Typescript Loader](https://github.com/TypeStrong/ts-loader)
- [x] [PostCSS Loader](https://github.com/postcss/postcss-loader)
  - [x] [PostCSS Preset Env](https://preset-env.cssdb.org/)
  - [x] [CSS modules](https://github.com/css-modules/css-modules)
- [x] [React Hot Loader](https://github.com/gaearon/react-hot-loader)
- [x] [Mini CSS Extract Plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)
- [x] [HTML Webpack Plugin](https://github.com/ampedandwired/html-webpack-plugin)

## Installation

```
$ npm ci
```

```
$ protoc -I=./proto api.proto \
--js_out=import_style=commonjs,binary:./proto \
--grpc-web_out=import_style=typescript,mode=grpcwebtext:./proto
```

```
$ protoc -I=./proto api.proto \
--js_out=import_style=commonjs+dts,binary:./proto \
--grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:./proto
```

## Running Development

```
$ npm start
```

## Build

```
$ npm run build
```

## Format code (using [Prettier](https://github.com/prettier/prettier))

```
$ npm run prettier
```