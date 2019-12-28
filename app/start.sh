#!/bin/bash

initialize(){
    npm install express
    npm install nedb
#    npm install request
#    npm install cheerio
#    npm install fs
#    npm install node-fetch
    touch INIT
}

[ -f INIT ] || initialize

npm audit fix

nodemon app.js