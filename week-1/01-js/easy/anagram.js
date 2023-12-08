/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  //checks first if the length of both the strings are equal or not if not return false, as the strings
    //of diff length  can't be an anagram.
    if (str1.length != str2.length)
        return false;

    // make sure to convert the strings to lowercase..
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();


    // create an empty array of size 26 , as we have in total of 26 alphabets.
    let arrOfAlphabets = new Array(26);
    // now, we have an empty array of undefined.   



    for (let i = 0; i < str1.length; i++) {
        // as we know already that both the strings are of same length we can use either of string length for the loop.

        arrOfAlphabets[str1.charCodeAt(i) - 97] = 0; // explanation of this code in the 2nd for loop.
        arrOfAlphabets[str2.charCodeAt(i) - 97] = 0;

        // this array is filled with value of 0 at the particular characters position.
    }

    for (let i = 0; i < str1.length; i++) {

        // now inc and dec the only char values at the particular pos. 
        //at the end there should only be 0 and undefined values in the array otherwise the function will return false.
        arrOfAlphabets[str1.charCodeAt(i) - 97]++;
        //the above line states that inside the array [] we only have 0's at the characters postion 
        //str1.charCodeAt(i) will return the ASCII value of the character that is "r" = 114 
        //which is further subtracted from 97 = 17;
        // say 'r' lies at 17 in the alphabetical chart so the index of arrOfAlphabets[17] = 0;


        arrOfAlphabets[str2.charCodeAt(i) - 97]--;
        // same goes for this line but dec. the value that is 0 to -1;

    }

    for (let elements of arrOfAlphabets) {

        if (elements !== 0 && elements !== undefined) {
            return false;
        }

    }
    return true;

}

module.exports = isAnagram;
