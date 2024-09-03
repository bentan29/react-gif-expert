// import { useEffect, useState } from "react";
// import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    // const getImages = async() => {
    //     const newImages = await getGifs(category);
    //     //console.log(newImages);
    //     setImages(newImages);
    // }

    // useEffect(() => {
    //     getImages();
    // }, []);

    const {images, isLoading} = useFetchGifs(category);


    return (
        <>
            <h3>{category}</h3>

            <div className="card-grid">
                { 
                    isLoading ? <h2>Cargando..</h2> :
                    images.map((image) => (
                        <GifItem 
                            key={image.id} 
                            {...image}
                        />
                    ))
                }
            </div>
        </> 
    )
}