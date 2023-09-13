import React, {useState} from 'react';

// const initialItems = [
//     {id: 1, description: "Passports", quantity: 2, packed: false},
//     {id: 2, description: "Socks", quantity: 12, packed: true},
//     {id: 3, description: "Carger", quantity: 1, packed: false},
// ];

function PackingList({data, onChangeCheckedItem,onDeleteDataItem,onClearItems}) {
    const [sortBy,setSortBy]=useState('input')

    let sortedItems =[]

    if(sortBy === 'input'){
        sortedItems = data
    }else if(sortBy === 'description'){
        sortedItems = data.slice().sort((a,b)=>a.description.localeCompare(b.description))
    }else if(sortBy === 'packed'){
        sortedItems = data.slice().sort((a,b)=>Number(a.packed) - Number(b.packed))
    }


    console.log(sortBy)
    return (
        <div className='list'>
            <ul>
                {
                    sortedItems.map(item => {
                        return <Item key={item.id} item={item} onChangeCheckedItem={onChangeCheckedItem} onDeleteDataItem={onDeleteDataItem}/>
                    })
                }
            </ul>
            <div className='actions' value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
                <select>
                    <option value='input'>Sort by input order</option>
                    <option value='description'>Sort by description</option>
                    <option value='packed'>Sort by packed stats</option>
                </select>
                <button onClick={onClearItems}>Clear List</button>
            </div>
        </div>
    );
}

const Item = ({item, onChangeCheckedItem,onDeleteDataItem}) => {
    return (<li>
            <input type='checkbox' checked={item.packed} onChange={() => onChangeCheckedItem(item.id)}/>
            <span
                onClick={() => onChangeCheckedItem(item.id)}
                style={item.packed ? {
                    textDecoration: 'line-through'
                } : {}}
            > {item.quantity} {item.description}</span>
            <button onClick={()=>{onDeleteDataItem(item.id)}}>❌</button>
        </li>
    )
}
export default PackingList;