console.log("hello from script src")

let buttonText = 'Click me';
//Create element by JSX
const helloWorldJsxHeading = (
    <div className = "default-btn">
        <button onClick = {()=> (buttonText = 'Hello from react')}>
            {buttonText}
        </button>
    </div>
);

const containerJSX = document.getElementById('appJsx');
const  rootJsx = ReactDOM.createRoot(containerJSX);
rootJsx.render(helloWorldJsxHeading);