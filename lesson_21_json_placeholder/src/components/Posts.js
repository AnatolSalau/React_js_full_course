import Post from "./Post";
import {useEffect, useState} from "react";

function Posts() {
    //URL
    const API_URL = 'https://jsonplaceholder.typicode.com/posts';

    //Data from server
    const [dataPosts, setDataPosts] = useState([]);

    // Error
    const [error, setError] = useState('');

    //Waiting of load data from server
    //after loading data -> isLoading = false
    const [isLoading, setIsLoading] = useState(true);


    //Request to server by useEffect
    useEffect(()=> {
            fetch(API_URL)
                .then(response => response.json())
                .then(json => {
                    setDataPosts(json);
                })
                .catch(error => {
                    setError(error.message)
                })
                .finally(() => {
                    setIsLoading(false);
                })
        }, []
    );

    //Render error if error true
    if (error) {
        return (
            <h1>Error: {error}</h1>
        )
    }

    //Render posts if isLoading = false
    return (
        <>
            <h1>Posts</h1>
            <hr />
            {   isLoading
                ? (
                    <h1>Loading...</h1>
                )
                : (
                    dataPosts.map(
                    post => {
                        return <Post key={post.id} props = {post}/>
                    })
                )
            }
        </>
    );
}

export default Posts