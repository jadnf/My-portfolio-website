var quote = document.querySelector("#quote");
var slideshow = document.querySelector("#slideshow");
var author = document.querySelector("#author");

fetch('https://api.breakingbadquotes.xyz/v1/quotes')
    .then(response => response.json())
    .then(data => {
        quote.textContent = data[0].quote
        author.textContent = data[0].author
    })
var i = 0;
var images = ["images/roomnoises.jpg", "images/Him.jpg", "images/output-onlinegiftools.gif", "images/funny.gif"]
setInterval(() => {
    if(i > images.length-1){
        i=0;
    }
    slideshow.src = images[i]
    i += 1;
}, 2000);