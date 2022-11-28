import {Link} from "react-router-dom";

export function MealItem(props) {
    const {
        strMeal,
        idMeal,
        strMealThumb,
    } = props

    return <Link className={'link-to-cat'} to={`/recipe/${idMeal}`}>
        <div id={idMeal} className="card card-meal hoverable">
            <div className="card-image">
                <button className="
                        posa-left-top
                        accent-4
                        waves-effect
                        waves-light
                        btn-large">see the recipe
                </button>
                <img src={strMealThumb} alt={strMeal}/>
            </div>
            <div className="card-content center-align  ">
                <span className="card-title card-title-meal bold">{strMeal}</span>
            </div>
        </div>
    </Link>
}