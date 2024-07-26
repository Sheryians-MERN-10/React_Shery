import React, { useContext } from 'react'
import { themeContext } from '../context/ThemeProvider' // themeContext को ThemeContext फाइल से इम्पोर्ट कर रहा है

const MyComp = () => { // MyComp नाम का एक फंक्शनल कॉम्पोनेंट बना रहा है
    const { isDark, toggleTheme } = useContext(themeContext); // themeContext का उपयोग कर isDark और toggleTheme को context से एक्सट्रैक्ट कर रहा है
    console.log(isDark, toggleTheme); // isDark और toggleTheme की वैल्यू को कंसोल में लॉग कर रहा है
    return ( // JSX को रिटर्न कर रहा है
        <>
            <div style={{ background: isDark ? '#fff' : '#333', color: isDark ? '#000' : '#fff' }}>
                {/* // डिव को स्टाइल कर रहा है, बैकग्राउंड और कलर isDark की वैल्यू के अनुसार बदल रहा है */}
                <h1>Current Theme: {isDark}</h1>
                <button onClick={toggleTheme}>Toggle Theme</button>
            </div>
        </>
    )
}

export default MyComp // MyComp कॉम्पोनेंट को एक्सपोर्ट कर रहा है ताकि इसे अन्य फाइलों में उपयोग किया जा सके
