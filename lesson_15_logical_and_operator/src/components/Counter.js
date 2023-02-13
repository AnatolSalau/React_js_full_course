function Counter({ count }) {
    console.log('Counter render')
    return (
    <h1>
        Total clicks: {count}
    </h1>
    );
}

export default Counter;