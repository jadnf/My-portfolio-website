var inspiroBotQuote = document.querySelector("#inspiro-bot-quote")

fetch('https://api.kanye.rest').then(response => {
    response.json().then(data => {
        console.log(data)
        inspiroBotQuote.textContent = data.quote
    })
})
console.log(output)