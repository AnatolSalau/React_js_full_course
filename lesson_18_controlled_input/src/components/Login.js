import {useState} from "react";

function Login() {

    const [data, setData] = useState(
        {username: 'initial', password: 'initial'}
    );

    function handleFromSubmit(event) {
        //Stop reload page when we press submit
        event.preventDefault();
        alert(JSON.stringify(data))
    }
    // [nameInput]: event.target.value
    //[] - create name of field dynamically
    function handleInputChange(event, nameInput) {
        setData({
            ...data, [nameInput]: event.target.value
        })
    }

    return (
        <>
            <h1>Login form</h1>
            <form onSubmit={handleFromSubmit}>
                <label>Username:
                    <input
                        type="text"
                        value={data.username}
                        onChange={(event =>
                            handleInputChange(event, 'username')
                        )}
                    />
                </label>
                <label>Password:
                    <input
                        type="password"
                        value={data.password}
                        onChange={(event =>
                                handleInputChange(event, 'password')
                        )}
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </>
    );
}

export default Login;