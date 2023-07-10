import { useState } from "react";





export default function Form({onAddItems}) {
    const [description, setDescription] = useState("");

   function handleSubmit(e){
    e.preventDefault();
    if(!description) return;
    const newItem = {description};
    onAddItems(newItem);
    setDescription("");

   }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Items..." value={description} onChange={(e)=> setDescription(e.target.value)}/>
            <button className="btn btn-success">Add</button>
        </form>
    );


}