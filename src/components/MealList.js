import {MealItem} from "./MealItem";

export function MealList(props) {
    const {meals,strCategory,strCategoryDescription
    } = props
    const filtered = () => strCategoryDescription.replace(/\[[^]]*\]/g, '')

    return<>
            <h2 className={'card-title '}>{strCategory}</h2>
            <p className={'category-desc flow-text'}>{strCategoryDescription?filtered():null}</p>
            <div className="list">
        {meals.map((meal) => (
            <MealItem key={meal.idMeal} {...meal} />
            ))}
            </div>

    </>
}