// components/Home.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const recipes = [
  {
    id: 1,
    name: "Pancakes",
    description: "Fluffy and delicious pancakes.",
    image:
      "https://static.toiimg.com/thumb/61912223.cms?imgsize=309993&width=800&height=800",
  },
  {
    id: 2,
    name: "Caesar Salad",
    description: "A classic Caesar salad.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWyhI6xGGvji2gkyyxJ5MchAQpxNS_T1we8Q&s",
  },
  {
    id: 3,
    name: "Chocolate Cake",
    description: "Rich chocolate layered cake.",
    image:
      "https://www.flurys.com/cdn/shop/products/ChocolateCake_1.jpg?v=1676363155&width=1024",
  },
  {
    id: 4,
    name: "Brownie",
    description: "chocolate Brownie.",
    image:
      "https://www.thereciperebel.com/wp-content/uploads/2022/05/brownie-sundae-TRR-1200-25-of-40.jpg",
  },
  {
    id: 5,
    name: "pizza",
    description: "cheezy pizza",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ9c4T8ahaLDklv9SRpAWhrYIyRZYuphaLPg&s",
  },
  {
    id: 6,
    name: "Burger",
    description: "MD King",
    image:
      "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/master/pass/Smashburger-recipe-120219.jpg",
  },
  {
    id: 7,
    name: "Garlice Bread",
    description: "full of garlice",
    image:
      "https://www.foodrepublic.com/img/gallery/simple-garlic-bread-recipe/intro-import.jpg",
  },
  {
    id: 8,
    name: "WhiteSauce Pasta",
    description: "creamy delisious pasta",
    image:
      "https://www.veggieinspired.com/wp-content/uploads/2018/04/vegan-white-sauce-pasta-hero.jpg",
  },
];

function Home() {
  const [search, setSearch] = useState("");

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home">
      <h1>Recipe Book</h1>
      <input
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="recipe-list">
        {filteredRecipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            <img src={recipe.image} alt={recipe.name} />
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>View Recipe</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
