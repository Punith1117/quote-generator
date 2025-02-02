let generateButton = document.querySelector('button')

generateButton.addEventListener('click', async () => {
    let json = await fetchFromApi()
    let quoteDiv = document.querySelector('.quote')
    quoteDiv.textContent = json.quote
    let quoteAuthorDiv = document.querySelector('.given-by')
    quoteAuthorDiv.textContent = json.author
})

async function fetchFromApi() {
    let apiUrl3 = 'https://quoteslate.vercel.app/api/quotes/random'
    let response = await fetch(apiUrl3);
    let data = await response.json();
    return data
}