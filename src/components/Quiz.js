import React, { useState } from 'react';

import Cocktails from './Cocktails'

// shuffle

const Quiz = () => {

  const [cocktailList, changeCocktailList] = useState(Cocktails)


  const {name: cocktailName, recipe: cocktailRecipe} = cocktailList[0]

  const updateCocktailList  = () => {
    const [first, ...rest] = cocktailList

    changeCocktailList([...rest, first])
  }

  return (
    <div>
      <span>{cocktailName}</span>

      <ul>
        {cocktailRecipe.map((ingredient, idx) => (
        <li key={idx}>{ingredient}</li>
      ))}
      </ul>

      <button onClick={updateCocktailList}>Change Cocktail</button>
    </div>
  )
}

export default Quiz