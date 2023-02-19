async function randomQuote() {
    const quotes = await fetch('https://type.fit/api/quotes');
    //Math.floor(Math.random()*40)+1
    const quotesJSON = await quotes.json();
    //create object or array with it?
    const random = Math.floor(Math.random()*quotesJSON.length)+1;
    updateQuote(quotesJSON[random]);
}

async function updateQuote(x) {
    
    document.querySelector('.random-quote').innerHTML = x.text;
    if (x.author === '') {
        document.querySelector('.author').innerHTML = 'Anonymous'
    } else {
    document.querySelector('.author').innerHTML = x.author;
    }
}

document.querySelector('.btn').addEventListener('click', randomQuote)

randomQuote();