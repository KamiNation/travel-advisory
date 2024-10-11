import React, { createContext, useState } from 'react'
import { Carr } from './PackageCollection'


export const PackageContext = createContext();

const { Provider } = PackageContext





const PackageContextProvider = ({ children }) => {

    const [selectedItem, setSelectedItem] = useState(Carr[0])

    const updateSetSelectedItem = (data) => {
        setSelectedItem(data);
    };



    return (
        <Provider value={{selectedItem, updateSetSelectedItem}}>
            {children}
        </Provider>
    )
}

export default PackageContextProvider