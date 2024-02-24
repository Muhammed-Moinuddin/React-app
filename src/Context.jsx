import { useState, useContext, createContext } from "react";

const userContext = createContext();
const Context = () => {
    const [name, setName] = useState("Moinuddin");
    return(
        <userContext.Provider value={name}>
            <h2>Hi, {name}</h2>
            <Component1/>
        </userContext.Provider>
    )
};

const Component1 = () => {
    return(
        <>
            <h2>Component 1</h2>
            <Component2/>
        </>
    )
}

const Component2 = () => {
    return(
        <>
            <h2>Component 2</h2>
            <Component3/>
        </>
    )
}

const Component3 = () => {
    return(
        <>
            <h2>Component 3</h2>
            <Component4/>
        </>
    )
}

const Component4 = () => {
    const user = useContext(userContext);
    return(
        <>
            <h2>Component 4</h2>
            <h3>hello again {user}</h3>
        </>
    )
}

export default Context;