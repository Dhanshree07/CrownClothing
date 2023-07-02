import { createContext,useState,useEffect} from "react";
import SHOP_DATA from "../data/shopdata";
import { getCategoriesandCollections } from "../firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap : {}
});

export const CategoriesProvider = ({children})=>{
    const [categoriesMap,setCategoriesMap]=useState({});

    useEffect (()=>{
        const getCategoriesMap = async ()=>{
            const categoryMap = await getCategoriesandCollections();
            console.log(categoryMap);
            setCategoriesMap(categoriesMap);
        }
        getCategoriesMap();
    },[])
    
    const value={categoriesMap};
    
    return <CategoriesContext.Provider value={value} >{children}</CategoriesContext.Provider>
} 