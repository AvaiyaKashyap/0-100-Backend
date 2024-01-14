const fs = require('fs');

const filePath = 'fsReadFile.txt';

fs.readFile(filePath, 'utf8', (error, data) => {

    if (error) {
        console.log(error);
        return;
    }
    const regExp = /\s+/g;

    const string = data;
    let correctedData = ' ';


    for (let i = 0; i < string.length; i++) {
      
        
        if (string.charAt(i) === ' ') {
            if (string.charAt(i - 1) !== ' ' ) {
                correctedData += string.charAt(i);

            }
        } else {
            correctedData += string.charAt(i);

        }

       if(string.charAt(i) === '\n'){
        if(string.charAt(i + 1) ===  ' '  ){
            i++;
        }
       }

    }
    const string2 = correctedData.trim();
    console.log(string2);
    fs.writeFile('fswriteFile.txt' , string2 , (error) => {
        if(error){
            console.log(error);
        }
        console.log('Successfully written the file');
        fs.readFile('fswriteFile.txt' , 'utf8' , (error , data) => {
            if(error){
                console.log(error);
            }
            console.log(data);
        })
    })
 }
)

