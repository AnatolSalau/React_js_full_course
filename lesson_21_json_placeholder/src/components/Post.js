import './Post.css'

function Post({props}) {
    //Get all props from object by Object.entries()
    const propsMap = Object.entries(props).map(([key,value])=>{
        return (
            <div key={key}><h3>{key} : {value.toString()}</h3></div>
        );
    })

    return (
        <div key={props.id} className="post">
            {propsMap}

        </div>
    )
}

export default Post;