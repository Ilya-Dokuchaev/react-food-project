import {Link} from "react-router-dom";

export function CategoryItem(props) {
    const {
        idCategory: idCt,
        strCategory: nameCt,
        strCategoryThumb: imgCt,
        strCategoryDescription: descCt,
    } = props
    const filteredDesc = descCt.replace(/\[[^]]*\]/g, '')
        .slice(0, 120)

    return <>
        <Link className={'link-to-cat'} to={`/category/${nameCt}`}>
            <div id={idCt} className="card hoverable">
                <div className="card-image">
                    <img src={imgCt} alt={nameCt}/>
                </div>
                <div className="content-category">
                    <span className="card-title bold">{nameCt}</span>
                    <p>{filteredDesc}...</p>
                    <button className="
                        btn
                        green
                        accent-4
                        waves-effect
                        about-btn
                        waves-light
                        btn-small">Find more about
                    </button>

                </div>
            </div>
        </Link>
    </>
}