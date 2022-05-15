const GifDisplay = ({gif})=>{
    
    const loaded = ()=>{
        // const { url, title } = gif commented out due to CORB errors when trying to use url
        return (
            <div>
                <h1>{gif.title}</h1>
                <img src={gif.images.original.url} alt={gif.title} />
            </div>
        )
    }

    const loading = ()=><h1>Grabbing Gif...</h1>

    return gif ? loaded() : loading()
}

export default GifDisplay