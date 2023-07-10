import Item from "./Item";


export default function Content({
    items
}){

    let sortedItems = items ;
   

    return (
        <div className="list">
           <ol>
                {
                sortedItems.map((item ,i) => (
                    <Item key={i}
                        item={item}
                    />
                ))
                }
            </ol>
        </div>
    )
}
