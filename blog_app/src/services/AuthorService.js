import { Author } from "../entities/Author";
import { url } from "../shared/constants";


class AuthorService {
    fetchAuthor(){
        return fetch(url.authorsURL)
        .then((response)=> response.json())
        .then((responseAuthors)=>{
           const myAuthors=  responseAuthors;
           return myAuthors.map((author)=>{
               return new Author (author)
           })
        })
        
    }

    fetchSingleAuthor(id){
        return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((singleAuthor) => {
            return new Author(singleAuthor);
        })
        
    }
}

export const authorService = new AuthorService()