const Content = (props) => {
    return (
        <>
            <div>Content</div>
            <h1>{props.navObj.content}</h1>
                        
            <h1>Value of Num is : {props.num} </h1>            
        </>
    )
}

export default Content