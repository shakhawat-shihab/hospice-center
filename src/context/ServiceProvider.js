import React, { createContext } from 'react';
import useService from '../Hooks/useService';
export const ServiceContext = createContext();
const ServiceProvider = ({ children }) => {
    const allData = useService();
    return (
        <ServiceContext.Provider value={allData}>
            {children}
        </ServiceContext.Provider>
    );
};

export default ServiceProvider;