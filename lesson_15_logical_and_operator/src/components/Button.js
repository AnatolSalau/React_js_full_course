function Button({onClick, text}) {
    console.log('Button render')
    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}

export default Button;