import { createContext,useState } from 'react';

const ShoppingCartContext = createContext();

const [count,setCount] = useState(0);

export const ShoppingCartProvider = ({children}) => {

    return (

        <ShoppingCartContext.Provider
            value={{
                count,
                setCount
            }}
        >
            {children}
        </ShoppingCartContext.Provider>

    );

}