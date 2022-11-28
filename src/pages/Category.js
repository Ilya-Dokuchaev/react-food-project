import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAllMealCategories, getfilterByCategory} from "../api";
import {Preloader} from "../components/Preloader";
import {MealList} from "../components/MealList";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

export function Category() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const {name} = useParams()

    const [meals, setMeals] = useState([])
    const [catalog, setCatalog] = useState([])


    useEffect(() => {
        getfilterByCategory(name).then((data) => setMeals(data.meals)).catch(console.error)
        getAllMealCategories(name).then((data) => setCatalog(data.categories.filter(el => el.strCategory === name))).catch(console.error)
    }, [name])
    return <>
        <Header/>
        <section className='main-content container'>
            {!meals.length ? <Preloader/> : <MealList meals={meals} {...catalog[0]}/>}
        </section>
        <Footer/>
    </>
}