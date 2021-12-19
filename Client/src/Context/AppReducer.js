export default (state, action) => {
    console.log(state);
    switch (action.type) {
        case 'GET_WEBSITES':
            return {
                ...state,
                websites: action.payload
            }
        case 'DELETE_WEBSITE':
            return {
                ...state,
                websites: state.websites.filter(transaction => transaction._id !== action.payload)
            }
        case 'ADD_WEBSITE':
            return {
                ...state,
                websites: [...state.websites, action.payload]
            }
        case 'WEBSITES_ERROR':
            return {
                ...state,
                error: action.payload
            }
        
        default:
            return state;
    }
}