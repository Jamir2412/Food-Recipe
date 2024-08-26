import { useEffect, useState } from "react"
const URL= "https://api.spoonacular.com/recipes/complexSearch";
const  API_KEY= "0f803ca5e26e4203bbf0f86ca20c8810";

export default function Search({recipe, setRecipe}){
        //setQuery will set the state of query;
        //Query will store the input from search;
    const [query, SetQuery]= useState("Pizza");
    //useEffect is used to sync the component with external system(API in this case)
    // syntax:- useEffect(call back function, array list).
    // useEffect can only be created inside the component.
    
    useEffect(()=>{
        async function getRecipe(){
            /*fetch function takes time to fetch the data and response.json() tries to convert the into json which
            is actually not present that's why we have to use async await so that response.json() can wait until the
            fetch function fetches the data.*/
            const response= await fetch(`${URL}?apiKey=${API_KEY}&query=&{query}`) 
            const result= await response.json();
            console.log(result.results);
            setRecipe(result.results);
        } getRecipe();
    }, [query]) //This useEffect will execute whenever the query changes in search bar.
    
    return <div>
        {/*whatever entered in search will be stored in query*/}
        <input type="search" value={query} 
        onChange={(e)=>SetQuery(e.target.value)} />
    </div>
}