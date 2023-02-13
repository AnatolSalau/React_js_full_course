import React from 'react';

const Reload = ({onClick}) => {
    return (
        <div>
            <button
                // add custom style by JS object
                style={{ backgroundColor: 'lightgreen' }}
                onClick={ onClick }
            >
                Reset!
            </button>
        </div>
    );
};

export default Reload;