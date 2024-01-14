const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require('zod');


/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 * 
 * 
 */

//schema for zod input validation
const emailSchema = zod.string().email();
const passSchema = zod.string().min(6);


function signJwt(username, password) {
    // Your code here


    const emailResponse = emailSchema.safeParse(username);
    const passResponse = passSchema.safeParse(password);

    if (!emailResponse.success || !passResponse.success) return null;

    const signature = jwt.sign({ username }, password);

    return signature;

}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
    // Your code here
    // verifying jwt requires secret key
    // we wrap jwt.verify in try catch cuz it throws an exception will false 
    try {
        const verifiedTokken = jwt.verify(token, jwtPassword);
        return true;
    } catch (error) {

        return false;

    }

}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
    // Your code here
    // decoding jwt is like going to jwt.io to get the results of jwt token into the result
    //remm. decoding jwt doesnt requires secret key any one can decode it 
    // but verifying a jwt requires a secret key
    const decodedToken = jwt.decode(token);
    if (decodedToken) {
        return true
    }
    else {
        return false
    };
}


module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword,
};
