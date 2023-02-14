function Post({props}) {

    const propsMap = Object.entries(props).map(([key,value])=>{
        return (
            <div key={key}><h3>{key} : {value.toString()}</h3></div>
        );
    })

    return (
        <div key={props.id} style={{padding:10}}>
            {propsMap}

        </div>
    )
}

export default Post;