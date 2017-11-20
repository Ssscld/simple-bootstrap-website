// add event listener callback
document.getElementById('my-form').addEventListener('Submit', saveBookmark)

// callback for submit button (note the parameter is added to override default. )
function saveBookmark(e){
    console.log('Hello World');
    e.preventDefault();
}
