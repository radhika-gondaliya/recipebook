// components/RecipeDetails.js
import React from "react";
import { useParams } from "react-router-dom";

const recipeDetails = {
  1: {
    name: "Pancakes",
    ingredients: ["1 cup flour", "1 egg", "1 cup milk", "2 tbsp sugar"],
    instructions: "Mix all ingredients and cook on a skillet.",
    cookingTime: "15 minutes",
  },
  2: {
    name: "Caesar Salad",
    ingredients: ["Lettuce", "Croutons", "Caesar dressing"],
    instructions: "Toss all ingredients together.",
    cookingTime: "10 minutes",
  },
  3: {
    name: "Chocolate Cake",
    ingredients: ["2 cups flour", "1 cup sugar", "1 cup cocoa powder"],
    instructions: "Mix ingredients, bake at 350°F for 30 minutes.",
    cookingTime: "40 minutes",
  },
  4: {
    name: "Browniew",
    ingredients: ["2 cups flour", "1 cup sugar", "1 cup cocoa powder"],
    instructions: "Mix ingredients, bake at 350°F for 30 minutes.",
    cookingTime: "20 minutes",
  },
  5: {
    name: "Pizza",
    ingredients: ["2 cups flour"],
    instructions: "Mix ingredients, bake at 350°F for 30 minutes.",
    cookingTime: "20 minutes",
  },
  6: {
    name: "Burger",
    ingredients: ["2 cups flour,cheez,tomato,chili"],
    instructions: "Mix ingredients, bake at 350°F for 30 minutes.",
    cookingTime: "10 minutes",
  },
  7: {
    name: "Garlice Breade",
    ingredients: ["2 cups flour,cheez,garlice"],
    instructions: "Mix ingredients, bake at 350°F for 30 minutes.",
    cookingTime: "30 minutes",
  },
  8: {
    name: "white sauce pasta",
    ingredients: ["2 cups flour,cheez,tomato,chili,maida"],
    instructions: "Mix ingredients, bake at 350°F for 30 minutes.",
    cookingTime: "10 minutes",
  },
};

function RecipeDetails() {
  const { id } = useParams();
  const recipe = recipeDetails[id];

  if (!recipe) {
    return <h2>Recipe not found!</h2>;
  }

  return (
    <div className="recipe-details">
      <h1>{recipe.name}</h1>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
      <h3>Cooking Time:</h3>
      <p>{recipe.cookingTime}</p>
    </div>
  );
}

export default RecipeDetails;
