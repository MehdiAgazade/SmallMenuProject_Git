"use client"

import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const recipes = () => {
    const endpoint = "https://dummyjson.com/recipes"
    const [recipe, setRecipe] = useState([])

    useEffect(() => {
        axios.get(endpoint).then((res) => {  
          // console.log(res);
           
            setRecipe(res.data.recipes)
        })
    }, [])
  return (
    <div className='recipes'>
      {
        recipe.map(({id, image, name}) => {
            return (
                <div className='recipe' key={id}>
                    <img src={image} />
                    <Link href={`/recipes/${id}`} className='recipeLink'>{name}</Link>
                </div>
            )
        })
      }
    </div>
  )
}

export default recipes
