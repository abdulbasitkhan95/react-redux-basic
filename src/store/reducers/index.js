function reducer(state = {}, action) {
    switch (action.type) {
        case 'ADD_USER' : {
            return {...state, user: action.data}
        }
        case 'REMOVE_USER' : {
            return {...state, user: ''}
        }
        default: {
            return state
        }
    }
}

export default reducer