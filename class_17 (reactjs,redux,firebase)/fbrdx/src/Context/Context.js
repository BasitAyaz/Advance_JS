import { createContext,useState} from "react";

const UserContext = createContext()// creation of context 



const UserProvider =props =>{
    const [Users,setUser] = useState([
        {
            name : 'Zunair',
            id   : 222
        }
    ])


    return(

        <UserContext.Provider value={[Users,setUser]}>

        {props.children}

        </UserContext.Provider>

    )

};


export {
    UserContext,UserProvider
}

