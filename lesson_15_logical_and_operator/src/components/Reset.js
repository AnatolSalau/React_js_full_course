
function Reset() {
    return
    {/*Use "&&" instead of "if"*/}
    {
        count > 0 && (
            <div>
                <button
                    // add custom style by JS object
                    style={{ backgroundColor: 'lightgreen' }}
                    onClick={resetCount}
                >
                    Reset!
                </button>
            </div>
        )
    }
    {/* Or we can use ternary operator */}
    {
        count > 0 ? (
            <div>
                <button
                    // add custom style by JS object
                    style={{ backgroundColor: 'lightgreen' }}
                    onClick={resetCount}
                >
                    Reset!
                </button>
            </div>
        ) : null
    }
}

export default Reset;