import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import {useState} from "react";



function App() {
    const [data,setData]=useState([])
    const onAddDataItem=(newItem)=>{
        setData([
            ...data,
            newItem
        ])
    }
    const onChangeCheckedItem = (id)=>{
        setData(data.map(item=>{
            if(item.id === id){
                item.packed = !item.packed
                console.log(item)
                return item

            }else return item
        }))
    }

    const  onDeleteDataItem = (id)=>{
        setData(data.filter(item=>item.id !== id))
    }

    const onClearItems = ()=>{
        const confirmed = window.confirm('want do you delete all items?')
        if(confirmed){
            setData([])
        }

    }

    return (
        <div className='App'>
            <Logo/>
            <Form  onAddDataItem={onAddDataItem}/>
            <PackingList
                data={data}
                onChangeCheckedItem={onChangeCheckedItem}
                onDeleteDataItem={onDeleteDataItem}
                onClearItems={onClearItems}
            />
            <Stats items={data}/>
        </div>
    );
}
export default App;
