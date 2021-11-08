export const petsReducer = (state, action) => {
    switch (action.type) {
        case "ADD_PET": {
            return [...state, action.payload];
        }
        case "REMOVE_PET":{
            return state.filter((item) => item.id !== action.payload);
        }
        default: {
            return state;
        }
    }
};