import CategoryItem from "../../components/category-item/category-item.component";
import "./directory.style.scss"

const Directory= ({categories})=>{
    return (
        <div className='categories-container'>
        {categories.map((category)=>(
            <CategoryItem key={category.id} category={category}/>
        ))}
        </div>
    )
}

export default Directory;