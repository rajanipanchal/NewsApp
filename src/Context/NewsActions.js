// const API_KEY = 'db08eecb59494e05a6cb8bb6dc04f3b7'
export const getNews = async (topic) => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=2023-04-30&sortBy=publishedAt&apiKey=db08eecb59494e05a6cb8bb6dc04f3b7
    `)
    const data = await response.json()
    return data.articles
}
