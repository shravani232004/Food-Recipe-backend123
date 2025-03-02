const express=require("express")
const { getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe } = require("../controller/recipe")
const router=express.Router()

router.get("/",getRecipes)
router.get("/:id",getRecipe) //Get recipe by id
router.post("/",addRecipe) //add recipe
router.put("/:id",editRecipe) //Edit recipe
router.delete("/:id",deleteRecipe)

module.exports=router