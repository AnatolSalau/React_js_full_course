//Create element by JSX
const Button =
    <div className="app">
        <button onClick="" >
            Click me
        </button>
    </div>

const containerJSX = document.getElementById('button-1');
const  rootJsx = ReactDOM.createRoot(containerJSX);
rootJsx.render();