import {useEffect, useState} from "react";
import {getAllMealCategories} from "../api";
import {Preloader} from "../components/Preloader";
import {CategoryList} from "../components/CategoryList";

export function Home(){
    const [catalog,setCatalog] = useState([])

    useEffect(()=>{
        getAllMealCategories().then(data => {
            setCatalog(data.categories)
        })
    },[])

    return <>
        {!catalog.length?<Preloader/>:(
            <CategoryList catalog={catalog}/>
        )}
    </>
}