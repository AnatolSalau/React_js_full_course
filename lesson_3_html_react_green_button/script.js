console.log("hello from script src")

//Create element by JSX
const App = () => {
    /**
     * Hook useState
     * 1. destructuring object
     * initial value is buttonText = 'Click me' (buttonText = 'Click me')
     * !!! setButtonText - it is function -> we must call a function
     */
    const [buttonText, setButtonText] = React.useState('Click me');
    const [buttonClass, setButtonClass] = React.useState('default-btn');
    //Function which call when we click button
    // Use Template literals, back quotes
    const onButtonClick = ()=> {
        setButtonText(`Hello from react, ${Math.random()}`);
        setButtonClass('green-btn');
    };
    
    return (
        <div >
            <button className = {buttonClass} onClick = {onButtonClick}>
                {buttonText}
            </button>
        </div>
    );
}

//Render component on page
const containerJSX = document.getElementById('appJsx');
const  rootJsx = ReactDOM.createRoot(containerJSX);
rootJsx.render(<App />);