import { useState } from "react";
import axios from "axios";

export const CreateRecipe = () => {
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [],
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
    userOwner: 0,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleIngredintChange = (event, idx) => {
    const { value } = event.target;
    const ingredients = recipe.ingredients;
    ingredients[idx] = value;
    setRecipe({ ...recipe, ingredients });
  };

  const addIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="create-recipe">
        <h2>Create Recipe</h2>
        <form onSubmit={onsubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
          ></input>

          <label htmlFor="ingredients">Ingredients</label>
          {recipe.ingredients.map((ingredient, idx) => (
            <input
              key={idx}
              type="text"
              name="ingredients"
              value={ingredient}
              onChange={(event) => handleIngredintChange(event, idx)}
            />
          ))}
          <button onClick={addIngredient} type="button">
            AddIngredient
          </button>
          <label htmlFor="instructions">Instructions</label>

          <textarea
            id="instructions"
            name="instructions"
            onChange={handleChange}
          ></textarea>
          <label htmlFor="imageUrl">Image Url</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            onChange={handleChange}
          ></input>
          <label htmlFor="cookingTime">Cookingn Time (minutes)</label>
          <input
            type="text"
            id="cookingTime"
            name="cookingTime"
            onChange={handleChange}
          ></input>
          <button type="submit">Create Recipe</button>
        </form>
      </div>
    </>
  );
};
