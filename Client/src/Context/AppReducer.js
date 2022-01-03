export default (state, action) => {

    switch (action.type) {
        case 'GET_WEBSITES':
            return {
                ...state,
                websites: action.payload
            }
        case 'DELETE_WEBSITE':
            return {
                ...state,
                websites: state.websites.filter(website => website._id !== action.payload)
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