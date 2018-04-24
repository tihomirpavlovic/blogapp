class AddNewPost {
    add = post => {
        return fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(post)
        }).then(response => response.json());
    };
}

export const addNewPost = new AddNewPost();