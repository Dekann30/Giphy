const Button = (props)=>{

    const handleClick = (event)=>{
        event.preventDefault()
        props.getGif()
    }
        
    return(
    <div>
        <form onClick={handleClick}>
            <input type='submit' value='Get Gif'/>
        </form>
    </div>
    )
}

export default Button