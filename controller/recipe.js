const Recipes=require("../models/recipe")

const getRecipes=async(req,res)=>{
    const recipes=await Recipes.find()
    return res.json(recipes)
}

const getRecipe=async(req,res)=>{
    const recipe=await Recipes.findById(req.params.id)
    res.json(recipe)
}
const addRecipe=async(req,res)=>{
    const {title,ingrdients,instrunctions,time}=req.body

    if(!title || !ingredients || !instructions)
        {
            res.json({message:"Required fields can't be empty"})
        }

        const newRecipe=await Recipes.create({
            title,ingrdients,instrunctions,time
        })
        return res.json(newRecipe)
}
const editRecipe=async(req,res)=>{
    const {title,ingredients,instructions,time}=req.body 
    let recipe=await Recipes.findById(req.params.id)

    try{
        await Recipes.deleteOne({_id:req.params.id})
        res.json({status:"ok"})
    }
    catch(err){
        return res.status(400).json({message:"error"})
    }
}
const deleteRecipe=(req,res)=>{
    res.json({message:"hello"})
}

module.exports={getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe}