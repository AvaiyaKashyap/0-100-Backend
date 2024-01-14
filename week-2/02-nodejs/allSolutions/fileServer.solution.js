const fs = require('fs');

const express = require('express');

const path = require('path');

const app = express();



function readDirectory() {


    fs.readdir(path.join(directoryName, fileName), (error, files) => {

        if (error) return error;
        else return files;


    });
}

