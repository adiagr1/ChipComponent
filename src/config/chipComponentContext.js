import { createContext, useReducer, useContext, useMemo } from "react";
import { reducer, initialState } from "../components/reducers/reducer";
import chipComponentAction from "../components/actions/chipComponentAction";

const ChipComponentContext = createContext();

const ChipComponentContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = useMemo(()=>[{
        ...state,
    }, dispatch], [state]);
    return (
        <ChipComponentContext.Provider value={value}>
            {children}
        </ChipComponentContext.Provider>
    )
};

const useChipComponentContext = () => {
    const context = useContext(ChipComponentContext);
    const [state, dispatch] = context;
    const action = chipComponentAction(dispatch);
    return {
        ...state,
        action,
    }
}

export {
    ChipComponentContextProvider,
    useChipComponentContext,
};

