import React from 'react';

function Stats({items}) {
    if(!items.length){
        return (<p className='stats'>
            <em> Start adding some items to your packing list 🚀 </em>
        </p>)
    }
    const numItems = items.length
    const numPackedItems = items.filter(item=>item.packed === true).length
    const percent = Math.round(numPackedItems * 100 / numItems)
    return (
        <footer className='stats'>
            <em>{percent === 100? `You got everything! Ready to go ✈️ `:`💼 You have ${numItems} items on your list, and you already packed ${numPackedItems} (${percent}%) 💼`} </em>
        </footer>
    );
}
export default Stats;