function Post({props}) {
    console.log(props.id)

    const propsMap = Object.entries(props).map(([key,value])=>{
        return (
            <div key={key}>{key} : {value.toString()}</div>
        );
    })

    return (
        <div key={props.id}>
            {propsMap}
        </div>
    )
}

export default Post;