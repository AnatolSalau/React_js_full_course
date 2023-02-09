console.log("hello from script src")

//Create element by JSX
const App = () => {
    /**
     * Hook useState
     * 1. destructuring object
     * initial value is buttonText = 'Click me' (buttonText = 'Click me')
     * !!! setButtonText - it is function -> we must call a function
     */
    let [buttonText, setButtonText] = React.useState('Click me');
    
    const onButtonClick = ()=> {
        setButtonText('Hello from react');
    };
    
    return (
        <div className = "default-btn">
            <button onClick = {onButtonClick}>
                {buttonText}
            </button>
        </div>
    );
}

const containerJSX = document.getElementById('appJsx');
const  rootJsx = ReactDOM.createRoot(containerJSX);
rootJsx.render(<App />);