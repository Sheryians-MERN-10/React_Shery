import Content from "./Content"

const Navbar = () => {

    const navObj = {
        num: 2,
        name: "Nav Bar",
        content: "To be loaded soon"
    }

    return (
        <>
            <div>Navbar</div>
            <Content navObj={navObj} num={585} />
        </>
    )
}

export default Navbar