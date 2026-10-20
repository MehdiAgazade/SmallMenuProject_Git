"use client"

import { IRecipe } from '@/types/recipepage'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const RecipePage = () => {
    const { id } = useParams<{ id: string }>()
    const endpoint = "https://dummyjson.com/recipes"
    const [recipeInfo, setRecipeInfo] = useState<IRecipe | null>(null)

    useEffect(() => {
        axios.get<IRecipe>(`${endpoint}/${id}`)
            .then((res) => setRecipeInfo(res.data))
            .catch((err) => {
                console.log(err.response?.status)
                console.log(err.response?.data)
            })
    }, [id])

    return (
        <div className='allRecipeInfos'>
            <div className="allRecipeImage">
                <img src={recipeInfo?.image} />
            </div>
            
            <div className="recipeInfos">
                <p>Name: {recipeInfo?.name}</p>
            </div>
            <div className="recipeInfos">
                <p>Ingredients: {recipeInfo?.ingredients?.join(", ")}</p>
            </div>
            <div className="recipeInfos">
                <p>Instructions: {recipeInfo?.instructions?.join(" ")}</p>
            </div>
            <div className="recipeInfos">
                <p>Cooking Time: {recipeInfo?.prepTimeMinutes} min</p>
            </div>
            <div className="recipeInfos">
                <p>Rating: {recipeInfo?.rating}</p>
            </div>
        </div>
    )
}

export default RecipePage