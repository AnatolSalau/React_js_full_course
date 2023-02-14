import Post from "./Post";
import {useEffect, useState} from "react";

function Posts() {

    //Data from server
    const [dataPosts, setDataPosts] = useState([]);

    //Request to server by useEffect
    useEffect(()=> {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(json => {
                    setDataPosts(json);
                })
                .catch(error => {
                    console.log(error.message)
                })
        }, []
    );

    return (
        <div>
            {   dataPosts &&
                (dataPosts.map(
                    post => {
                        return <Post key={post.id} props = {post}/>
                    }
                ))
            }
        </div>
    );
}

export default Posts