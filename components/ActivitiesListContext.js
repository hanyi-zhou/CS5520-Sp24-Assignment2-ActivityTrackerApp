import { createContext, useState, useContext } from "react";

// The ActivitiesListContext is a context that will be used to
// share the list of activities between the ActivitiesList and
// the AllActivities and SpecialActivities components.

// Create the context
const ActivitiesListContext = createContext();

// Custom hook to use the activities list
export const useActivitiesList = () => {
  return useContext(ActivitiesListContext);
};

// Provider component that will wrap the entire application
export const ActivitiesListProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);

  const addActivity = (activity) => {
    setActivities((prevActivities) => [activity, ...prevActivities]);
  };

  return (
    <ActivitiesListContext.Provider value={{ activities, addActivity }}>
      {children}
    </ActivitiesListContext.Provider>
  );
};
