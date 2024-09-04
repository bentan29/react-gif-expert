export const getGifs = async(category) => {

    try{
        const url = `https://api.giphy.com/v1/gifs/search?api_key=WWKpXS7O9mWEWhgK9GbZiNmDz3d3Y6M6&q=${category}&limit=50`;
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map(gif => ({
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }))

        return gifs;

    }catch(error){
        console.log(error);
        
    }
    
}