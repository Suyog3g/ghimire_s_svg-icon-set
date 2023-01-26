console.log('JavaScript is running!');

/* longer JS block comment 
- const is a type of variable - a bit of memory that can hold a value

JS uses (can use) ANY valid CSS selector to make a connection to ANY elment on the page - it works the same way as CSS selectors do, because it's USING css selectors to find matching element(s).

the document is the DOM - the web page and all of its elements

querySelector is the method (function) that makes the connection between JS and the DOM (the elements)
*/

// step 1 - make the connection to the element(s) you want to interact with
const facebook = document.querySelector('#facebook');
const twitter = document.querySelector('#twitter');
const linkden = document.querySelector('#linkden');
const pintrest = document.querySelector('#pintrest');
const skype = document.querySelector('#skype');
const amazon = document.querySelector('#amazon');
const android = document.querySelector('#android');
const applelogo = document.querySelector('#applelogo');
const soundcloud = document.querySelector('#soundcloud');
const youtube = document.querySelector('#youtube');


function logThisId() {
    console.log('clicked on this element:', this.id);
}

// step 2 - decide how you want the user to interact with the obect you created in step 1
facebook.addEventListener('click', logThisId);
twitter.addEventListener('click', logThisId);
linkden.addEventListener('click', logThisId);
pintrest.addEventListener('click', logThisId);
skype.addEventListener('click', logThisId);
amazon.addEventListener('click', logThisId);
android.addEventListener('click', logThisId);
applelogo.addEventListener('click', logThisId);
soundcloud.addEventListener('click', logThisId);
youtube.addEventListener('click', logThisId);
