import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory))return //si ya tenemos el valor salimos
        setCategories([...categories, newCategory]);
        // setCategories((prev) => [...prev, 'nuevoss'])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory 
                // setCategories={setCategories}
                onNewCategory={onAddCategory}
            />
            
            {
                categories.map((category) => (
                    <GifGrid key={category} category={category}/>
                ))
            }
              
        </>
    )
}
