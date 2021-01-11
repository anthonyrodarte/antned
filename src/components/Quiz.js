import React, { useEffect, useState } from 'react';

import { first, shuffle, drop, intersection} from 'lodash'

import Cocktails from './Cocktails'

const Quiz = () => {

  const [cocktailList, changeCocktailList] = useState(shuffle(Cocktails))
  const [ingredientInputs, changeIngredientInput] = useState([{quantity: '', measurement: '', ingredient: ''}])


  const {name: cocktailName, recipe: cocktailRecipe} = first(cocktailList)

  const updateCocktailList  = () => {
    changeCocktailList(drop(cocktailList))
    changeIngredientInput([{quantity: '', measurement: '', ingredient: ''}])
  }

  const validateIngredients = (e) => {
    e.preventDefault()
    const recipeStrings = []

    ingredientInputs.map((recipe) => {
      const {quantity, measurement, ingredient} = recipe
      const recipeString = quantity + ' ' + measurement + ' ' + ingredient
      recipeStrings.push(recipeString)
    })

    console.log(intersection(recipeStrings, cocktailRecipe).length === cocktailRecipe.length)
    updateCocktailList()
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
        break;
      case 'measurement':
        input.measurement = value
        break;
      case 'ingredient':
        input.ingredient = value
        break;
      default:
        return
    }

    inputs[i] = input
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
            <select data-index={idx} data-type='measurement' onChange={updateInputValues} value={ingredients.measurement}>
              <option value="" disabled></option>
              <option value="oz">oz</option>
              <option value="dashes">dashe(s)</option>
              <option value="cube">cube</option>
            </select>
            <input data-index={idx} data-type='ingredient' placeholder="ingredient" onChange={updateInputValues} value={ingredients.ingredient}/>
          </div>
        ))}
        <br />
        <button onClick={addIngredientInput}>+</button>
        <br />
        <button onClick={validateIngredients}>Submit</button>
        </label>
      </form>

      
    </div>
  )
}

export default Quiz