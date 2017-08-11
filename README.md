<p align="center">
    <img alt="Preact" title="Preact" src="https://s3.postimg.org/i78nzh56b/preact_minimal.jpg"/>
</p>


# :rocket: preact-minimal
Minimal preact structure. 

[![Build Status](https://travis-ci.org/aganglada/preact-minimal.svg?branch=master)](https://travis-ci.org/aganglada/preact-minimal)

[Preact](https://github.com/developit/preact) is just soooooo fast! :zap: :zap: :zap: 

But when you have an idea and want to start coding right away, then it becomes really hard and time 
consuming to setup and have your application ready to start your development.

**preact-minimal** comes to save your time providing you with the minimal and sufficient kit of
tools you need.

### What's included?

* [preact](https://github.com/developit/preact)
* [preact-router](https://github.com/developit/preact-router)
* [webpack](https://webpack.js.org)
* [babel](https://babeljs.io/)
* [cssnext](http://cssnext.io/)

### Demo 

https://preact-minimal.aganglada.com

### Want to start right now?

> Follow this steps 

```bash
git clone git@github.com:aganglada/preact-minimal.git
cd preact-minimal
npm i
```

#### Run the dev server

```bash
npm run dev
```

Buala! You can start developing now on http://localhost:4000

#### Build assets for production

```bash
npm run prod
```

Running this command will create an `assets` folder that you can expose to your server.
 
#### Production mode in local

```bash
npm run start
```

You can check on http://localhost:8080

### Preact Developer Tools

You can inspect and modify the state of your Preact UI components at runtime using the [React Developer Tools](https://github.com/facebook/react-devtools) browser extension.

1. Install the [React Developer Tools](https://github.com/facebook/react-devtools) extension
2. [Import the `preact/devtools`](src/index.js#L21) module in your app
3. Reload and go to the 'React' tab in the browser's development tools

### Coming soon

* Docs
* [Styled components?](https://github.com/aganglada/preact-minimal/issues/4)
* Your suggestions


### Contributing

I would love to see you contributing to preact-minimal, also by giving feedback.
If you think something is missing, [create a new issue](https://github.com/aganglada/preact-minimal/issues).

[Pull request](https://github.com/aganglada/preact-minimal/pulls) are more than welcome ❤️️


### License

MIT
