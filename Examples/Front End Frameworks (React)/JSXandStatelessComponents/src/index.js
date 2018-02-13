import React from 'react';
import ReactDOM from 'react-dom';

// let item1 = "Apples";
// let item2 = "Oranges";
// let item3 = "Bananas";
const items = ["Bread", "Milk", "Eggs", "Tea"];
items.push("Bacon");

let listItems = items.map((item, i) => <li key={i}>{item}</li>);

// for (let i = 0; i < items.length; i++){
//     listItems.push(<li key={i}>{items[i]}</li>);
// }
// for (let item of items){
//     listItems.push(<li>{item}</li>)
// }

const GroceryList = (props) =>
    (
        <ul>
            {props.listItems}
        </ul>
    );
ReactDOM.render(
    <GroceryList listItems={listItems} />,
    document.getElementById("root")
);

// ReactDOM.render(
//     <div>
//         <GroceryList item1="Apples" item2="Tomatoes" item3="Pears" />
//         <GroceryList item1="Bananas" item2="Peach" item3="Watermelon" />
//     </div>,
//     document.getElementById("root")
// );