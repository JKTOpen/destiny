DESTINY is a Full-stack javascript ecommerce application built with mean.io framework.


MEAN is a framework that provides a easy starting point for [MongoDB](http://www.mongodb.org/), [Node.js](http://www.nodejs.org/), [Express](http://expressjs.com/), and [AngularJS](http://angularjs.org/) based applications. It is designed to give you a quick and organized way to start developing MEAN based web apps with useful modules like Mongoose and Passport pre-bundled and configured. We mainly try to take care of the connection points between existing popular frameworks and solve common integration problems.
## Prerequisites
* *MongoDB* - <a href="http://www.mongodb.org/downloads">Download</a> and Install mongodb - <a href="http://docs.mongodb.org/manual">Checkout their manual</a> if you're just starting.
* *Node.js* - <a href="http://nodejs.org/download/">Download</a> and Iמstall Node.js, codeschool has free <a href="https://www.codeschool.com/courses/real-time-web-with-node-js">node</a> and <a href="https://www.codeschool.com/courses/shaping-up-with-angular-js">angular</a> tutorials.
* *Git* - Get git using a package manager or <a href="http://git-scm.com/downloads">download</a> it.
* Grunt - Download and Install [Grunt](http://gruntjs.com).
```
$ npm install -g grunt-cli
```

## Quick Install
  The quickest way to get started with DESTINY is to install the `meanio` package from NPM.

  Install MEAN CLI, clone destiny repo & install dependency:
    ```
    $ npm install -g mean-cli
    $ git clone https://github.com/plannifnminus1fails/destiny.git
    $ cd destiny && npm install
    ```
  We recommend using [Grunt](https://github.com/gruntjs/grunt-cli) to start the server:

    $ grunt

  If grunt aborts because of JSHINT errors, these can be overridden with the `force` flag:

    $ grunt -f

  Alternatively, when not using `grunt` you can run:

    $ node server

### Install the MEAN CLI

```bash
  $ sudo npm install -g mean-cli
  $ mean init <myApp>
  $ cd <myApp> && npm install
```

### Invoke node with Grunt
We recommend using [Grunt](https://github.com/gruntjs/grunt-cli) to start the server:
```bash
  $ grunt
```
If grunt aborts because of JSHINT errors, these can be overridden with the `force` flag:
```bash
  $ grunt -f
```
Alternatively, when not using `grunt` (and for production environments) you can run:
```bash
  $ node server
```
Then, open a browser and go to:
```bash
  http://localhost:3000
```
### Troubleshooting
During installation depending on your os and prerequiste versions you may encounter some issues.

Most issues can be solved by one of the following tips, but if are unable to find a solution feel free to contact us via the repository issue tracker or the links provided below.

#### Update NPM, Bower or Grunt
Sometimes you may find there is a weird error during install like npm's *Error: ENOENT*. Usually updating those tools to the latest version solves the issue.

* Updating NPM:
```bash
$ npm update -g npm
```
* Updating Grunt:
```bash
$ npm update -g grunt-cli
```

* Updating Bower:
```
$ npm update -g bower
```

#### Cleaning NPM and Bower cache
NPM and Bower has a caching system for holding packages that you already installed.
We found that often cleaning the cache solves some troubles this system creates.

* NPM Clean Cache:
```bash
$ npm cache clean
```

* Bower Clean Cache:
```bash
$ bower cache clean
```

## Configuration
All configuration is specified in the [config](/config/) folder, through the [env](config/env/) files, and is orchestrated through the [meanio](https://github.com/linnovate/mean-cli) NPM module. Here you will need to specify your application name, database name, and hook up any social app keys if you want integration with Twitter, Facebook, GitHub, or Google.


### Environmental Settings

There is a shared environment config: __all__

* __root__ - This the default root path for the application.
* __port__ - DEPRECATED to __http.port__ or __https.port__.
* __http.port__ - This sets the default application port.
* __https__ - These settings are for running HTTPS / SSL for a secure application.

  * __port__ - This sets the default application port for HTTPS / SSL. If HTTPS is not used then is value is to be set to __false__ which is the default setting. If HTTPS is to be used the standard HTTPS port is __443__.
  * __ssl.key__ - The path to public key.
  * __ssl.cert__ - The path to certificate.


There are three environments provided by default: __development__, __test__, and __production__.
Each of these environments has the following configuration options:

* __db__ - This is where you specify the MongoDB / Mongoose settings
* __url__ - This is the url/name of the MongoDB database to use, and is set by default to __mean-dev__ for the development environment.
* __debug__ - Setting this option to __true__ will log the output all Mongoose executed collection methods to your console.  The default is set to __true__ for the development environment.
* __options__ - These are the database options that will be passed directly to mongoose.connect in the __production__ environment: [server, replset, user, pass, auth, mongos] (http://mongoosejs.com/docs/connections.html#options) or read [this] (http://mongodb.github.io/node-mongodb-native/driver-articles/mongoclient.html#mongoclient-connect-options) for more information.
* __app.name__ - This is the name of your app or website, and can be different for each environment. You can tell which environment you are running by looking at the TITLE attribute that your app generates.
* __Social OAuth Keys__ - Facebook, GitHub, Google, Twitter. You can specify your own social application keys here for each platform:
  * __clientID__
  * __clientSecret__
  * __callbackURL__
* __emailFrom__ - This is the from email address displayed when sending an email.
* __mailer__ - This is where you enter your email service provider, username and password.

To run with a different environment, just specify NODE_ENV as you call grunt:
```bash
    $ NODE_ENV=test grunt
```
If you are using node instead of grunt, it is very similar:
```bash
    $ NODE_ENV=test node server
```
To simply run tests
```bash
    $ npm test
```
> NOTE: Running Node.js applications in the __production__ environment enables caching, which is disabled by default in all other environments.

## Getting Started
###We pre-included an article package example. Check out:

  * [The Model](packages/articles/server/models/article.js) - Where we define our object schema.
  * [The Controller](packages/articles/server/controllers/articles.js) - Where we take care of our backend logic.
  * [NodeJS Routes](packages/articles/server/routes/articles.js) - Where we define our REST service routes.
  * [AngularJs Routes](packages/articles/public/routes/articles.js) - Where we define our CRUD routes.
  * [The AngularJs Service](packages/articles/public/services/articles.js) - Where we connect to our REST service.
  * [The AngularJs Controller](packages/articles/public/controllers/articles.js) - Where we take care of  our frontend logic.
  * [The AngularJs Views Folder](packages/articles/public/views) - Where we keep our CRUD views.

###You may start working on product package. You can find it at packages/custom/product. For working example checkout this; http://localhost:3000/#!/product/help

