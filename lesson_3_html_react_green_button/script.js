//Create element by JSX
console.log('Hello from js')

const App = (
    <div className="app">
        <button onClick="">
            Click me
        </button>
    </div>
);
const containerJSX = document
    .getElementById('app');
const rootJsx = ReactDOM
    .createRoot(containerJSX);

rootJsx.render(App);
