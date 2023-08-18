import React, {useState} from 'react';



function Form(props) {

    const [description, setDescription]=useState('')
    const [quantity,setQuantity]=useState(1)
    const hendleSubmite = (e) => {
        e.preventDefault()
        console.log(e)
        const newItem = {
            id: new Date.now(),
            description,
            quantity,
            packed:false
        }
        console.log(newItem)
    }
    // console.log(quantity)
    // console.log(description)
    return (
        <form className='add-form' onSubmit={hendleSubmite}>
            <h3>What do you need for your 😍 trip?</h3>
            <select value={quantity} onChange={e=>setQuantity(+e.target.value)}>
                {
                    Array.from({length:20},(_,i)=>i+1).map(num=>{
                        return(
                            <option key={num} value={num} >{num}</option>
                        )
                    })
                }
            </select>
            <input type='text' placeholder="Item..." value={description} onChange={e=>setDescription(e.target.value)}/>
            <button type={"submit"}>ADD</button>
        </form>
    );
}

export default Form;