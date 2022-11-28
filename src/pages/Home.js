import {useEffect, useState} from "react";
import {getAllMealCategories} from "../api";
import {Preloader} from "../components/Preloader";
import {CategoryList} from "../components/CategoryList";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {Search} from "../components/Search";
import {useLocation, useNavigate} from "react-router-dom";

export function Home() {
    const [catalog, setCatalog] = useState([])
    const [filtered,setFiltered] = useState([])

    const {search} = useLocation()
    const push = useNavigate()
// console.log(push)
// console.log(search)
    const  handleSearch = (str) => {
        setFiltered(
            catalog.filter((item) =>
                item.strCategory.toLowerCase().includes(str.toLowerCase())
            )
        )
        push(`?search=${str}`,{replace:true})
    }

    useEffect(() => {
        getAllMealCategories().then(data => {
            setCatalog(data.categories)
            setFiltered(search?
                data.categories.filter((item) =>
                item.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase())): data.categories)
        })
    }, [search])

    return <>
        <Header/>
        <main className='main-content container'>
            <Search cb={handleSearch}/>
            {!catalog.length ? <Preloader/> : (
                <CategoryList catalog={filtered}/>
            )}
        </main>
        <Footer/>
    </>
}