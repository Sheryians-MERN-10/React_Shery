// const App = () => <div>Hello </div>

import './main.css'

import Content from "./Components/Revision/Content"
import LearnHooks from "./Components/Revision/LearnHooks"
import Navbar from "./Components/Revision/Navbar"
import Counter from "./Components/Reducer/Counter"
import _01_Basics from './Components/ClassOffline/_01_Basics'
import _02_TwoWayBinding from './Components/ClassOffline/_02_TwoWayBinding'
import _02_Revision from './Components/ClassOffline/_02_Revision'
import _03_Props from './Components/ClassOffline/_03_Props'
import _04_MouduleCss from './Components/ClassOffline/_04_MouduleCss'
import _05_ViteEnvironmentVar from './Components/ClassOffline/_05_ViteEnvironmentVar'
import MyComponent from './Components/ClassOffline/_06_HOC/MyComponent'
import withUsers from './Components/ClassOffline/_06_HOC/WithUsers'

const App = () => {

    const EnhancedComp = withUsers(MyComponent);

    return (
        <>
            {/* <Navbar /> */}

            {/* <LearnHooks />             */}


            {/* <Counter /> */}

            {/* <_01_Basics /> */}

            {/* This Forms submit feature handler */}
            {/* <_02_TwoWayBinding /> */}

            {/* <_02_Revision /> */}

            {/* <_03_Props /> */}

            {/* <_04_MouduleCss /> */}
            {/* <p className='my-heading1'>Hello, App.jsx</p> */}

            {/* <_05_ViteEnvironmentVar /> */}

            {/*//todo 3. HOC का उपयोग करें: */}
            {/* <MyComponent name={"Ayush"} /> */}
            
            <EnhancedComp age={13} />

        </>
    )
}

export default App