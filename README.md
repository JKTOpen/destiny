
DESTINY is a Full-stack javascript ecommerce application built with mean.io framework.

## Prerequisites
* Node.js - Download and Install [Node.js](http://www.nodejs.org/download/). You can also follow [this gist](https://gist.github.com/isaacs/579814) for a quick and easy way to install Node.js and npm
* MongoDB - Download and Install [MongoDB](http://docs.mongodb.org/manual/installation/) - Make sure `mongod` is running on the default port (27017).

### Tools Prerequisites
* NPM - Node.js package manage; should be installed when you install node.js.
* Bower - Web package manager. Installing [Bower](http://bower.io/) is simple when you have `npm`:

```
$ npm install -g bower
```

### Optional [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
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

  Then, open a browser and go to:

    http://localhost:3000


## Troubleshooting
During install some of you may encounter some issues.

Most issues can be solved by one of the following tips, but if are unable to find a solution feel free to contact us via the repository issue tracker or the links provided below.

#### Update NPM, Bower or Grunt
Sometimes you may find there is a weird error during install like npm's *Error: ENOENT*. Usually updating those tools to the latest version solves the issue.

* Updating NPM:
```
$ npm update -g npm
```

* Updating Grunt:
```
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
```
$ npm cache clean
```

* Bower Clean Cache:
```
$ bower cache clean
```
## Configuration
All configuration is specified in the [config](/config/) folder, through the [env](config/env/) files, and is orchestrated through the [meanio](https://github.com/linnovate/mean-cli) NPM module. Here you will need to specify your application name, database name, and hook up any social app keys if you want integration with Twitter, Facebook, GitHub, or Google.

### Environmental Settings

There is a shared environment config: __all__.
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
  * __debug__ - Setting this option to __true__ will log the output all Mongoose executed collection methods to your
console.  The default is set to __true__ for the development environment.
  * __options__ - These are the database options that will be passed directly to mongoose.connect in the __production__ environment: [server, replset, user, pass, auth, mongos] (http://mongoosejs.com/docs/connections.html#options) or read [this] (http://mongodb.github.io/node-mongodb-native/driver-articles/mongoclient.html#mongoclient-connect-options) for more information.
* __app.name__ - This is the name of your app or website, and can be different for each environment. You can tell which environment you are running by looking at the TITLE attribute that your app generates.
* __Social OAuth Keys__ - Facebook, GitHub, Google, Twitter. You can specify your own social application keys here for each platform:
  * __clientID__
  * __clientSecret__
  * __callbackURL__
* __emailFrom__ - This is the from email address displayed when sending an email.
* __mailer__ - This is where you enter your email service provider, username and password.

To run with a different environment, just specify NODE_ENV as you call grunt:

    $ NODE_ENV=test grunt

If you are using node instead of grunt, it is very similar:

    $ NODE_ENV=test node server

To simply run tests

    $ npm test

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
