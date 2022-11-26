import {Link} from "react-router-dom";

export function CategoryItem(props){
    const {
        idCategory:idCt,
        strCategory:nameCt,
        strCategoryThumb:imgCt,
        strCategoryDescription:descCt,
    } = props

    const filteredDesc = descCt.split('').filter(char => /[^[\[0-9\]/]/.test(char)).slice(0,60)

    return<>
        <Link className={'link-to-cat'} to={`/category/${idCt}`}>
            <div id={idCt} className="card  hoverable">
                <div className="card-image">
                <img src={imgCt} alt={nameCt}/>
                </div>
                <div className="card-content ">
                    <span className="card-title bold">{nameCt}</span>
                    <p>{filteredDesc}...</p>
                </div>
            </div>
        </Link>
        </>
}