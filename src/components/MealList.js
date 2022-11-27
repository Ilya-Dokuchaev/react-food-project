import {MealItem} from "./MealItem";
import {Link} from "react-router-dom";

export function MealList(props) {
    const {meals,strCategory,strCategoryDescription,
    } = props

    return<>
            <h2 className={'card-title '}>{strCategory}</h2>
            <p className={'category-desc flow-text'}>{strCategoryDescription}</p>
            <Link to={'/homepage'}><span className="btn-small green accent-4 ">go back</span></Link>
            <div className="list">
        {meals.map((meal) => (
            <MealItem key={meal.idMeal} {...meal} />
            ))}
            </div>

    </>
}