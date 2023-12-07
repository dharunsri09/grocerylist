import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import { useState } from 'react';
import AddItems from './components/AddItems';
import Search from './components/Search';



function App() {
  // const [items,setItems]=useState(JSON.parse(localStorage.getItem("shopping")))
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shopping'))||[]);
  const [newitem,setNewitem]=useState("")
  const [search,setSearch]=useState("")
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(newitem=="")return;
    const id=!items.length?1:items[items.length-1].id+1;
    const checked=false;
    const name=newitem
    const data={id,name,checked}
    const listItems=[...items,data];
    setItems(listItems)
    setNewitem("")
    localStorage.setItem('shopping',JSON.stringify(listItems));
  }
  const handlenewItem=(e)=>{
    setNewitem(e.target.value);
   
  }

  const handleCheck=(id)=>{
    if(!id)return;
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
    localStorage.setItem('shopping',JSON.stringify(listItems));
    console.log(items);
    }

const handleDel=(id)=>{
  if(!id)return;
    const listItems=items.filter((item)=>item.id!=id)
    setItems(
      listItems);
    localStorage.setItem('shopping', JSON.stringify(listItems));
}

  return (
    <div className="App">
      <Header title="Grocery List"/>
      <AddItems handleSubmit={handleSubmit} newitem={newitem} handlenewItem={handlenewItem}/>
      <Search search={search} setSearch={setSearch}/>
      <Content handleDel={handleDel} items={items.filter((item)=>(item.name).includes(search))} setItems={setItems} handleCheck={handleCheck}/>
      <Footer length={items.length} items={items}/>
    </div>
  );
}

export default App;
