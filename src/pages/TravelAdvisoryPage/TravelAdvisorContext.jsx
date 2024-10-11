import React, { useContext, useEffect, createContext, useState } from 'react';

export const travelAdvContext = createContext();

const { Provider } = travelAdvContext;

const TravelAdvisorProvider = ({ children }) => {
    const [userData, setUserData] = useState([]);
    const [searchAdvInput, setSearchAdvInput] = useState('');
    const [filteredResult, setFilteredResult] = useState([]);

    const updatesetSearchAdvInput = (data) => {
        setSearchAdvInput(data);
    };

    const updateSetFilteredResult = (data) => {
        setFilteredResult(data);
    };

    // const url = "https://randomuser.me/api/?results=15";
    const url = "http://localhost:3000/advisors"


    const userRes = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setUserData(data);
            // console.log(userData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        userRes();
    }, []);

    return (
        <Provider value={{ userData, searchAdvInput, updatesetSearchAdvInput, filteredResult, updateSetFilteredResult, userRes }}>
            {children}
        </Provider>
    );
};

export default TravelAdvisorProvider;