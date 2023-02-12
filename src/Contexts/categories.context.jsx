import { createContext, useEffect, useState } from "react";

import { getCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    categoriesMap:{}, 
   // setProducts:()=> null
});

export const CategoriesProvider = ({children})=>{
    const [categoriesMap, setCategoriesMap] = useState({});
    const value = { categoriesMap };

    useEffect(()=>{
        const getCategoryMap = async ()=>{
            const categoryMap = await getCollectionAndDocuments("categories");
            
            setCategoriesMap(categoryMap);
        };

        getCategoryMap();
    },[]);

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}