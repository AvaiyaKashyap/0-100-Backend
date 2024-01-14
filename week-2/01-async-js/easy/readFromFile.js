const fs = require('fs');

const filePath = 'callback.txt';

fs.readFile(filePath , 'utf8' , (error ,data )=> {

if(error){
    console.log(`ERROR : ${error}`);
    return;
}
else {
    console.log(`DATA : ${data}`);
}
});

for(let i = 0; i < 100000 ; i++){

    console.log(i);
}

