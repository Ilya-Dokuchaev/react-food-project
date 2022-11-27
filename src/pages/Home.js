import {useEffect, useState} from "react";
import {getAllMealCategories} from "../api";
import {Preloader} from "../components/Preloader";
import {CategoryList} from "../components/CategoryList";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

export function Home() {
    const [catalog, setCatalog] = useState([])

    useEffect(() => {
        getAllMealCategories().then(data => {
            setCatalog(data.categories)
        })
    }, [])

    return <>
        <Header/>
        <main className='main-content container'>
            {!catalog.length ? <Preloader/> : (
                <CategoryList catalog={catalog}/>
            )}
        </main>
        <Footer/>
    </>
}