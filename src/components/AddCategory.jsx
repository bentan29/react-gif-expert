import { useState } from "react"

export const AddCategory = ({ 
    // setCategories 
    onNewCategory
}) => {

    const[inputValue, setInputValue] = useState('One Punch')

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <= 1) return;
        // setCategories((prev) => [...prev, inputValue])
        onNewCategory(inputValue.trim())
        setInputValue('')
    }

    return (
        <form onSubmit={onSubmitForm}>    
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>

    )
}
