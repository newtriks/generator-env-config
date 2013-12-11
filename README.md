# generator-env-config [![Build Status](https://secure.travis-ci.org/stationkeeping/generator-env-config.png?branch=master)](https://travis-ci.org/stationkeeping/generator-env-config)

A generator for [Yeoman](http://yeoman.io). **env-config** generated environment specific json configuration files for use in your application. There is also an [AngularJS](http://angularjs.org/) sub-generator that creates a factory class to use for configuring your angular app using the env config json files.

Example usage tutorial can be found [here](http://newtriks.com/2013/11/29/environment-specific-configuration-in-angularjs-using-grunt/).


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-env-config from npm, run:

```
$ npm install -g generator-env-config
```

Finally, initiate the generator:

```
$ yo env-config
```

To create an environment config with a specific name:

```
$ yo env-config staging
```

### AngularJS Config

To create an AngularJS config:

```
$ yo env-config:angular config
```

To create an angular config with a specific name:

```
$ yo env-config:angular foo
```

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
