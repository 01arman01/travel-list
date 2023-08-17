import React from 'react';

const initialItems = [
    {id: 1, description: "Passports", quantity: 2, packed: false},
    {id: 2, description: "Socks", quantity: 12, packed: true},
    {id: 2, description: "Carger", quantity: 1, packed: false},
];

function PackingList(props) {
    return (
        <ul className='list'>
            {
                initialItems.map(item => {
                    return <Item key={item.id} item={item}/>
                })
            }
        </ul>
    );
}

const Item = ({item}) => {
    return (<li>
        <input type='checkbox' checked={item.packed}/>
            <span
              style={item.packed?{
               textDecoration:'line-through'
              }:{}}
            > {item.quantity} {item.description}</span>
            <button >❌</button>
    </li>
)
}


export default PackingList;