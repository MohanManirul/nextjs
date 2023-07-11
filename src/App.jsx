
import { useState } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Content from "./component/Content";



export default function App() {
 const [items , setItems ] = useState([]);

 function handleAddItems(item){
      setItems((items)=> [...items,item]);
  }

 return (
  <div className="container">

    <Header title="this is header"/> 
    <Content items = {items} onAddItems = {handleAddItems}/>
    <Footer/>

  </div>
 )

};
