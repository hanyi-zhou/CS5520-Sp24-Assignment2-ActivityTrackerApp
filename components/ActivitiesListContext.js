import { createContext } from "react";

// The ActivitiesListContext is a context that will be used to
// share the list of activities between the ActivitiesList and
// the AllActivities and SpecialActivities components.
export const ActivitiesListContext = createContext([]);
