import {CategoryItem} from "./CategoryItem";

export function CategoryList(props) {
    const {catalog = []} = props

    return <>
    {catalog.length?(
        <div className="list">
            {catalog.map(el => (
                    <CategoryItem key={el.idCategory} {...el}/>
                ))}
        </div>)
        :<h4 className={'center-align'}>Nothing Found</h4>}
    </>

}