import { useContext,Fragment } from "react";
import { CategoriesContext } from "../contexts/categories.context";
import ProductCard from '../Components/productcard/ProductCard'
import './shop.styles.scss'

const Shop =()=>{
    const {categoriesMap} = useContext(CategoriesContext);
    return(
    <>
    {
        Object.keys(categoriesMap).map((title)=>{
        <Fragment key={title}>
            <h2>{title}</h2>
            <div className='products-container'>
            {
                categoriesMap[title].map((product)=>{
                return (    
                    <ProductCard id={product.id} product={product}></ProductCard>
                )})
            }
    </div>
        </Fragment>
        })
    }
    </>
 )
}

export default Shop;