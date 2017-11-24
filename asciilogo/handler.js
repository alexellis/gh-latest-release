"use strict"

const figlet = require('figlet');

module.exports = (context, callback) => {
    figlet(context + ".com", (err, val) => {
        if(err) {
            return callback(undefined, err.toString());    
        }
        
        callback(undefined, val);
    });
}
