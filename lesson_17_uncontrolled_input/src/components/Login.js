function Login() {
    function handleFromSubmit(event) {
        //Stop reload page when we press submit
        event.preventDefault();
        const userData = {
            username: event.target.username.value,
            password: event.target.password.value
        }
        alert(JSON.stringify(userData))
    }
    
    return (
        <>
            <h1>Login form</h1>
            <form onSubmit={handleFromSubmit}>
                <label>Username:
                    <input type="text" name="username" />
                </label>
                <label>Password:
                    <input type="password" name="password" />
                </label>
                <button type="submit">Login</button>
            </form>
        </>
    );
}

export default Login;