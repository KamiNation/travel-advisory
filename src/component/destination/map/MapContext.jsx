import React from 'react'
import { createContext, useState, useEffect} from 'react'

export const MapperContext = createContext()

const { Provider } = MapperContext

const MapContext = ({children}) => {

    const [testMap, setTestMap] = useState([])
    console.log(testMap);

    useEffect(() => {
        const url = "http://localhost:3000/advisors"

        const getResource = async () => {
            try {
                const resp = await fetch(url)
                const data = await resp.json()
                setTestMap(data)
                console.log(data)
                console.log(setTestMap);
            } catch (error) {
                console.log(error.message);
            }
        }
        getResource();

    }, [])


    return (
        <Provider value={{ testMap, setTestMap }}>
            {children}
        </Provider>
    )
}

export default MapContext