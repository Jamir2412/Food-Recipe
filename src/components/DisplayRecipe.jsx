import RecipeList from "./RecipeList";

export default function DisplayRecipe({recipe}){

    return (<div>
        {recipe.map((food)=>(
            <RecipeList key= {food.id} food= {food}/>
        ))}
    </div>)
} 