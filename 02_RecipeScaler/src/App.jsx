import  { useState } from 'react';

function App(){
  //state
  const [ingredients, SetIngredients] = useState([
    { id: 1, name: "Flour", amount: 2, unit: "cups" },
    { id: 2, name: "Milk", amount: 1.5, unit: "cups" },
    { id: 3, name: "Sugar", amount: 2, unit: "tbsp" },
    { id: 4, name: "Baking Powder", amount: 1, unit: "tsp" },
    { id: 5, name: "Eggs", amount: 2, unit: "" },
    { id: 6, name: "Salt", amount: 0.5, unit: "tsp" },  
  ]);

  const baseServing = 1;
  const [currentServing, setCurrentServing] =  useState(baseServing);

  //adding function
  function increaseServings(){
    setCurrentServing(currentServing + 1);
  }
  //decreasing function
  function decreaseServings(){
    if(currentServing>1){
      setCurrentServing(currentServing - 1);
    }
  }

  return (
    <div>
      <h1>Recipe Scaler</h1>
      <h2>Recipe for {currentServing} people</h2>
      <button onClick={increaseServings}>+</button>
      <button onClick={decreaseServings}>-</button>
      <ul>
        {ingredients.map((ingredient)=>{
          const updateAmount = ingredient.amount * currentServing;
          
          return(
            <li key={ingredient.id}>
              {updateAmount} {ingredient.unit} {ingredient.name}
            </li>
          )
        })}
      </ul>

    </div>
  )
}

export default App;