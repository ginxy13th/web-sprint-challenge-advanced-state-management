import axios from 'axios';

export const FINDING_SMURFS_START = 'FINDING_SMURFS_START';
export const FOUND_SMURFS = 'FOUND_SMURFS';
export const ADD_A_SMURF = 'ADD_A_SMURF';

export const findingSmurfs = () => {
    return dispatch => {
    dispatch({ type: FINDING_SMURFS_START })

    axios.get('http://localhost:3333/smurfs')
        .then(response => {
            console.log(response)
            dispatch({ type: FOUND_SMURFS, payload: response.data})
        })
        .catch(error => {
            console.log(error)
        })
}
}
export const addingSmurf = (input) => {
    return dispatch => {
        axios.post('http://localhost:3333/smurfs', input)
            .then(res => {
            console.log(res)
            dispatch({ type: ADD_A_SMURF, payload: res.data})})
            .catch(err => {
                console.log(err)
            })
    }
}