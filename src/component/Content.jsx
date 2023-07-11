
import { useState } from "react";

export default function Content({
    items,
    onAddItems
}){

    const [description, setDescription] = useState("");

   function handleSubmit(e){
    e.preventDefault();
    if(!description) return;
    const newItem = {description};
    onAddItems(newItem);
    setDescription("");

   }

  

    let sortedItems = items ;
   

    return (
        <div className="body">
        
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Items..." value={description} onChange={(e)=> setDescription(e.target.value)}/>
                <button className="btn btn-success">Add</button>
            </form>
            <div className="list">
            <ol>
                    {
                    sortedItems.map((item ,i) => (
                        <li key={i}>{item.description}</li>
                    ))
                    }
                </ol>
            </div>
        </div>
    )
}
