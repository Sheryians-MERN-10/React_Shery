import React from 'react'

//todo 2. एक Higher-Order Component बनाएं:

const WithUsers = (WrappedComp) => {
    return (props) => {
        console.log(props)
        const user = { name: "Anurag" };
        return (<WrappedComp {...props} {...user} />)
  }
}

export default WithUsers