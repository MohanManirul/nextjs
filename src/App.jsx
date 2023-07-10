
import { useState } from "react";
import Footer from "./component/Footer";
import Form from "./component/Form";
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
    <Form onAddItems = {handleAddItems}/>
    <Content items = {items}/>
    <Footer/>

  </div>
 )

};
