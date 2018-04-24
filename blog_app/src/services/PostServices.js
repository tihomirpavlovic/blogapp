import Post from '../entities/Post';
import { url } from "../shared/constants";

class PostService {


    fetchPost() {
        return fetch(url.postsURL)
            .then((response) => response.json())
            .then((responsePosts) => {
                const myPosts = responsePosts;
                return myPosts.map((post) => {
                    
                    return new Post(post)
                })
            })


    }
    
    fetchSinglePost(id) {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => response.json())
            .then((singlePost) => {
                
                return new Post(singlePost)
            })
            


    }

}
export const postService = new PostService();