/**
 * The main function to copy text to the clipboard
 * @param {string} text The text to be copied
 * @returns {void}
 */
function copyText(text){
    if (!navigator.clipboard) {
        
        return;
    }
    navigator.clipboard.writeText(text).then(function(){
        console.log('Async: Copying to clipboard was successfull!');
    }, function(err){
        console.error('Async: Could not copy text: ', err);
    });
}

/**
 * The fallback function to copy text to the clipboard
 * @param {string} text The text to be copied
 * @returns {void}
 */
function fallbackCopyText(text){
    var textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try{
        var successful = document.execCommand('copy');
        var msg = successful ? 'successfull' : 'unsuccessfull';
        console.log('Fallback: Copying text command was ' + msg);
    }catch(err){
        console.error('Fallback: Oops, unable to copy', err);
    }
    document.body.removeChild(textArea);
}

/**
 * A simple function to reverse a string
 * @param {string} str The string to be reversed
 * @returns {string} The reversed string
 */
function reverseStr(str){
    return str.split("").reverse().join("");
}

/**
 * A function to save a cookie
 * @param {string} name The name of the cookie
 * @param {string|number} value The value of the cookie
 * @param {number} days The amount of time the cookie will exist
 */
function saveCookie(name, value, days){
    var expires = "";
    if (days) {
       var date = new Date();
       date.setTime(date.getTime() + (days*24*60*60*1000));
       expires = `; expires=${date.toUTCString()}`;
    }
    if (value != null && value != "null")
        document.cookie = `${name}=${value}${expires}; path=/`;
}

/**
 * A function to read a cookie
 * @param {string} name The name of the cookie
 * @returns {string|undefined} The value of the cookie or undefined
 */
function readCookie(name){
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length == 2){
        return parts.pop().split(';').shift();
    }
}

/**
 * A function to delete a cookie
 * @param {string} name The name of the cookie
 */
function removeCookie(name){
    saveCookie(name,"",-1);
}