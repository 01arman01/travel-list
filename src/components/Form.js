import React, {useState} from 'react';



function Form({onAddDataItem}) {

    const [description, setDescription]=useState('')
    const [quantity,setQuantity]=useState(1)
    const hendleSubmite = (e) => {
        e.preventDefault()
        const newItem = {
            id:  Date.now(),
            description,
            quantity,
            packed:false
        }
        console.log(newItem)
        onAddDataItem(newItem)
        setDescription('')
        setQuantity(1)
    }
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