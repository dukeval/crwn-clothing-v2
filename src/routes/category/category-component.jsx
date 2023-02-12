import { Fragment, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoriesContext } from '../../Contexts/categories.context';
import './category-stye.scss';

const Category=()=>{
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProduct] = useState(categoriesMap[category]);

    useEffect(()=>{
        
            setProduct(categoriesMap[category]);
    },[category, categoriesMap]);

    return(
        <Fragment>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className='category-shop-container'>
                {
                    products && products.map((product)=><ProductCard key={product.id} product={product} />
                    )
                }
            </div>
        </Fragment>
    );
}

export default Category;