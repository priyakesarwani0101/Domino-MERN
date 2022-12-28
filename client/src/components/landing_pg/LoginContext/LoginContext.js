import React,{useState} from 'react'

let AuthContext = React.createContext();



export default AuthContext;

function ContextProvider({children}){
//   const [state,setState] = useState({});
  const [isAuth,toggleAuth] = useState({login:false,toggleAuth:""})

  return <AuthContext.Provider value={{isAuth,toggleAuth}}>
    {children}
  </AuthContext.Provider>
}


export {ContextProvider};
