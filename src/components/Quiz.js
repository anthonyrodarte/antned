import React, { useEffect, useState } from 'react';

import { first } from 'lodash'

import Cocktails from './Cocktails'

// shuffle

const Quiz = () => {

  const [cocktailList, changeCocktailList] = useState(Cocktails)
  const [ingredientInputs, changeIngredientInput] = useState([{quantity: '', measurement: '', ingredient: ''}])


  const {name: cocktailName, recipe: cocktailRecipe} = first(cocktailList)

  const updateCocktailList  = () => {
    const [oldCocktail, ...rest] = cocktailList
    changeCocktailList([...rest, oldCocktail])
  }

  const addIngredientInput = (e) => {
    e.preventDefault()
    changeIngredientInput([...ingredientInputs, {quantity: '', measurement: '', ingredient: ''}])
  }

  const updateInputValues = (e) => {
    const i = e.target.getAttribute('data-index')
    const type = e.target.getAttribute('data-type')
    const { value } = e.target

    let inputs = [...ingredientInputs]
    let input = inputs[i]

    switch (type) {
      case 'quantity':
        input.quantity = value
        inputs[i] = input
        break;
      case 'measurement':
        input.measurement = value
        inputs[i] = input
        break;
      case 'ingredient':
        input.ingredient = value
        inputs[i] = input
        break;
      default:
        return
    }

    changeIngredientInput(inputs)
  }
  
  console.log('checkstate', ingredientInputs)
  return (
    <div>
      <p>{cocktailName}</p>
      <form>
        <label>Ingredient List
        <br />
        {ingredientInputs.map((ingredients, idx) => (
          <div key={idx} >
            <input data-index={idx} data-type='quantity' placeholder="quantity" onChange={updateInputValues} value={ingredients.quantity}/>
            <select data-index={idx} data-type='measurement' onChange={updateInputValues}>
              <option value=""></option>
              <option value="oz">oz</option>
              <option value="dashes">dashe(s)</option>
            </select>
            <input data-index={idx} data-type='ingredient' placeholder="ingredient" onChange={updateInputValues}/>
          </div>
        ))}
        <br />
        <button onClick={addIngredientInput}>+</button>
        <br />
        <button onClick={updateCocktailList}>Submit</button>
        </label>
      </form>

      
    </div>
  )
}

export default Quiz