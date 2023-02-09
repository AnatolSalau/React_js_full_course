console.log("hello from script src")

/**
 * Destructuring an object into its properties
 * @param props - default text for button
 * @returns {JSX.Element}
 */
const App = ({initialButtonText, initialButtonClass}) => {

// const App = (props) => {
    /**
     * Hook useState
     * 1. destructuring object
     * initial value is buttonText = 'Click me' (buttonText = 'Click me')
     * !!! setButtonText - it is function -> we must call a function
     */
    //const {initialButtonText} = props;
    const [buttonText, setButtonText] = React.useState(initialButtonText);
    const [buttonClass, setButtonClass] = React.useState(initialButtonClass);
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
rootJsx.render(<App initialButtonText= "Click me please" 
                    initialButtonClass= "default-btn" 
                />
);