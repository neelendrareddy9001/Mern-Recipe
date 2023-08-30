import { useState } from "react";

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

  const addIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  return (
    <>
      <div className="create-recipe">
        <h2>Create Recipe</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
          ></input>
          <lable htmlFor="ingredients">Ingredients</lable>
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
            type="submit"
            id="cookingTime"
            name="cookingTime"
            onChange={handleChange}
          ></input>
        </form>
      </div>
    </>
  );
};
