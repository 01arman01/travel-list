import React from 'react';

const hendleSubmite = (e) => {
    e.preventDefault()
    console.log(e)

}

function Form(props) {
    return (
        <form className='add-form' onSubmit={hendleSubmite}>
            <h3>What do you need for your 😍 trip?</h3>
            <select>
                {Array.from({length: 20}, (_, i) => i + 1).map(num => {
                    return (
                        <option key={num} value={num}>{num}</option>
                    )
                })}
            </select>
            <input type='text' placeholder="Item..."/>
            <button>ADD</button>
        </form>
    );
}

export default Form;