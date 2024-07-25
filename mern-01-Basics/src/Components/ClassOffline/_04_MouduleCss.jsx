import React from 'react'

// import css from '../../stylesheets/04_Style.module.css'
import { myheadingM, myBtnM } from '../../stylesheets/Style.module.css'

const _04_MouduleCss = () => {
    return (
        <>
            <p className='my-heading1' >Lernning Moudule CSS</p>
            
            {/* <p className={`${css.myheadingM}`} >Sub Heading from MouduleCSS</p>
            <button className={`${css.myBtnM}`} >Click Here</button> */}
            
            <p className={`${myheadingM}`} >Sub Heading from MouduleCSS</p>
            <button className={`${myBtnM}`} >Click Here</button>
        </>
    )
}

export default _04_MouduleCss