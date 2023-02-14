import {useEffect, useState} from "react";

function Post() {
    console.log('App render')
    //Data from server
    const [data, setData] = useState(null);

    //Request to server by useEffect
    useEffect(()=> {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(json => {
                    setData(json);
                })
        }, []
    );
    console.log(data)

    return (
        <h1>
            This is post
        </h1>
    );
}

export default Post;