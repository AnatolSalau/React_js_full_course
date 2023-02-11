function Button({onClick}) {
    console.log('Button render')
    return (
        <button onClick={onClick}>
            Click me!
        </button>
    )
}

export default Button;