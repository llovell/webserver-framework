# Webserver Framework

[![Build Status](https://travis-ci.org/llovell/webserver-framework.svg?branch=master)](https://travis-ci.org/llovell/webserver-framework)

This is a framework that can be used for new JavaScript based app development

### Dependencies

This framework depends on [nodejs](https://nodejs.org)

### Client

The client-side uses [react](https://facebook.github.io/react) which gives us component-based UI composition

### Server

The server-side uses an MVC type framework called [krakenjs](http://krakenjs.com/)

### Setup

```sh
$ git clone git@github.com:llovell/webserver-framework.git
$ cd webserver-framework
$ npm install
```

### Development

```sh
$ npm run dev
```

This command will run two servers simultaneously that are both configured to reload code changes as you make them

* a client-side development server using webpacks [hot module replacement](https://webpack.js.org/concepts/hot-module-replacement/)

* and an automatically restarting configuration of the server-side express application using [nodemon](https://nodemon.io/)
