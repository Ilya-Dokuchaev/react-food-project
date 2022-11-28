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
                    <div className="recipe-title">
                        <h2 className={'white-text bold flow-text'}>{recipe.strMeal}</h2>
                        <img src={recipe.strMealThumb} alt={recipe.strMeal}/>
                    </div>
                    <span className="btn-small go-back green accent-4 "
                          onClick={() => goBack(-1)}>go back</span>
                    <div className="recipe-content">
                        {recipe.strYoutube ? (
                            <div className={'video-recipe'}>
                                <h5>Video Recipe:</h5>
                                <iframe src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
                                        title={id}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                        ) : null}
                        <table className="centered">
                            <thead>
                            <tr className={'green lighten-2'}>
                                <th>Ingridient</th>
                                <th>Measere</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                Object.keys(recipe).map((key) => {
                                    if (key.includes('Ingredient') && recipe[key]) {
                                        return (
                                            <tr key={key}>
                                                <td>{recipe[key]}</td>
                                                <td>{
                                                    recipe[`strMeasure${key.slice(13)}`]
                                                }</td>
                                            </tr>
                                        )
                                    }
                                    return null
                                })
                            }
                            </tbody>
                        </table>
                        <p className={'flow-text'}>{recipe.strInstructions}</p>
                        <span className="btn-small go-back green accent-4 "
                              onClick={() => goBack(-1)}>go back</span>
                    </div>
                </div>
            )}
        </main>
        <Footer/>
    </>
}