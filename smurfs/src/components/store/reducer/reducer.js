import { FINDING_SMURFS_START, FOUND_SMURFS, ADD_A_SMURF } from '../actions/actions'

export const initialState = {
    data: [],
    isLoading: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FINDING_SMURFS_START:
            return {...state, isLoading: true};
        
        case FOUND_SMURFS:
            console.log(action.payload)
            return { ... state, data: action.payload, isLoading: false};

        case ADD_A_SMURF:
                return {...state};
        
        default:
            return {state}
    }
}