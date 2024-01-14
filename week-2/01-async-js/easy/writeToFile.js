const fs = require('fs');
const filePath = 'callback.txt';


let data = 'The fs.writeFile() method is used to asynchronously write the specified data to a file.\n By default, the file would be replaced if it exists.';
fs.writeFile(filePath , data ,  (error) => {


    if(error){
        console.log(error);
    }
    console.log('file written successfully');
})


