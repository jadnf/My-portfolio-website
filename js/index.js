var quote = document.querySelector("#quote");
var slideshow = document.querySelector("#slideshow");

fetch('https://api.kanye.rest').then(response => {
    response.json().then(data => {
        quote.textContent = data.quote
    })
})
var i = 0;
var images = ["images/roomnoises.jpg", "images/Him.jpg", "images/ output-onlinegiftools.gif"]
setInterval(() => {
    
    i++
    slideshow.src = images[i]
    if(i == images.length){
        i =0
    }
}, 1000);