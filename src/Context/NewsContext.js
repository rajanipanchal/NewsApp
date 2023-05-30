import { createContext, useReducer } from "react";
import NewsReducer from "./NewsReducer";


const NewsContext = createContext()


export const NewsProvider = ({ children }) => {
    const initialState = {
        news:
            [
                {
                "source": {
                    "id": null,
                    "name": "CleanTechnica"
                },
                "author": "Zachary Shahan",
                "title": "Does Elon Musk Truly Not Know About Formula E?",
                "description": "I’m sorry, but I just find this story mind blowing. I’m having a hard time wrapping my head around it. I have definitely come to see that Elon Musk doesn’t know much about a lot of things and yet is keen to put his opinions out there to hundreds of millions o…",
                "url": "https://cleantechnica.com/2023/05/07/does-elon-musk-truly-not-know-about-formula-e/",
                "urlToImage": "http://cleantechnica.com/files/2023/05/Mahindra-Racing-Formula-E.jpeg",
                "publishedAt": "2023-05-08T03:09:36Z",
                "content": "I’m sorry, but I just find this story mind blowing. I’m having a hard time wrapping my head around it.\r\nI have definitely come to see that Elon Musk doesn’t know much about a lot of things and yet is… [+3034 chars]"
            
       },
     
    ],
    
}
const [state, dispatch] = useReducer(NewsReducer, initialState)

return (
    <NewsContext.Provider value={{
        ...state,
        dispatch

    }}>
        {children}
    </NewsContext.Provider>
)

}
export default NewsContext