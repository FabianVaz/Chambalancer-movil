import React, { createContext, useContext, useState } from 'react';

const ServiceContext = createContext();

export const useServices = () => {
  return useContext(ServiceContext);
};

export const ServiceProvider = ({ children }) => {
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    try {
      const response = await fetch('https://chambalancer-movil-backend.onrender.com/api/services');
      const data = await response.json();
      console.log(data);  // Verificar que los datos se están obteniendo correctamente
      setServices(data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  return (
    <ServiceContext.Provider value={{ services, fetchServices }}>
      {children}
    </ServiceContext.Provider>
  );
};
