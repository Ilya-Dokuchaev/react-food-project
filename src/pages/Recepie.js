import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {getMealById} from "../api";
import {Preloader} from "../components/Preloader";

export function Recipe() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const {id} = useParams()
    const [recipe, setRecipe] = useState({})
    const goBack = useNavigate()

    useEffect(() => {
        getMealById(id).then((data) => setRecipe(data.meals[0]))
    }, [id])

    return <>
        <Header/>
        <main className='main-content container'>
            {!recipe.idMeal ? <Preloader/> : (
                <div className="recipe">
                    <h2 className="bold">{recipe.strMeal} <span className="btn-small green accent-4 "
                                                                onClick={() => goBack(-1)}>go back</span>
                    </h2>
                    <img src={recipe.strMealThumb} alt={recipe.strMeal}/>
                </div>
            )}
        </main>
        <Footer/>
    </>
}