# Impaq Sample
This app was build on "AngularJS + Express Full Stack Generator".
Please check https://github.com/DaftMonk/generator-angular-fullstack for details.

Important files:
* client implementation: /app/scripts/controllers/main.js
* server implementation: /app/lib/controllers/api.js
* client tests: /test/client/spec/controllers/main.js
* server tests: /test/server/ceontrollers/api.js

For convenience I changed and moved server implementation from node-swapnames.js 
(required by example) to /app/lib/controller/api.js
By doing this there's no need to fight browser "Same origin policy" problems 
by using JSONP or configuring server to use Cross-Origin Resource Sharing (CORS).

## Prerequisites

* Node.JS (with npm)
* Bower
```bash
npm install -g bower
```
* Grunt
```bash
npm install -g grunt
```
## Install
From the root app directory run:
```bash
npm install
bower install
```
## Run
Execute example by:
```bash
grunt serve
```
Execute tests by:
```bash
grunt test
grunt test:client
grunt test:server
```