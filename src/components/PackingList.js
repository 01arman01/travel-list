import React, {useState} from 'react';

// const initialItems = [
//     {id: 1, description: "Passports", quantity: 2, packed: false},
//     {id: 2, description: "Socks", quantity: 12, packed: true},
//     {id: 3, description: "Carger", quantity: 1, packed: false},
// ];

function PackingList({data, onChangeCheckedItem,onDeleteDataItem}) {
    const [sortBy,setSortBy]=useState()
    return (
        <div className='list'>
            <ul>
                {
                    data.map(item => {
                        return <Item key={item.id} item={item} onChangeCheckedItem={onChangeCheckedItem} onDeleteDataItem={onDeleteDataItem}/>
                    })
                }
            </ul>
            <div className='actions'>
                <select>
                    <option value='input'>Sort by input order</option>
                    <option value='sescription'>Sort by description</option>
                    <option value='packed'>Sort by packed stats</option>
                </select>
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