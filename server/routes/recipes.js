import express from 'express';
import mongoose from 'mongoose';
import { RecipeModel } from '../models/Recipes.js';

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const response = await RecipeModel.find({});
        res.json(response);
    } catch (err) {
        res.json(err);
    }
});

router.post("/", async (req, res) => {
    const recipe = new RecipeModel(req.body);
    try {
        const response = await recipe.save();
        res.json(response);
    } catch (err) {
        res.json(err);
    }
});

router.put("/", async (req, res) => {
    try {
        const recipe = await RecipeModel.findById(req.body.recipeId);
        const user = await UserModel.findById(req.body.userId);
        user.savedRecipe.push(recipe);
        await user.save();
        res.json({savedRecipe : user.savedRecipe});
    } catch (err) {
        res.json(err);
    }
});

router.get("/savedRecipes/ids", async (req, res) => {
    try {
        const user = await UserModel.findById(req.body.userId);
        res.json({savedRecipe: user?.savedRecipe})
    } catch (err) {
        res.json(err);
    }
})

router.get("/savedRecipes", async (req, res) => {
    try {
        const user = await UserModel.findById(req.body.userId);
        const savedRecipes = await RecipeModel.find({
            _id : {$in : user.savedRecipe},
        });
        res.json({savedRecipes : user?.savedRecipe});
    } catch(err) {
        res.json(err);
    }
});

export {router as recipeRouter};
