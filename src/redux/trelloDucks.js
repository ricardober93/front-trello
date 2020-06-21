// constantes
const dataInicial = {
    tasks: []
}

// types
const GET_CARD_SUCCESS = 'GET_CARD_SUCCESS'
const ADD_CARD_SUCCESS = 'ADD_CARD_SUCCESS'

// reducer
export default function cardReducer(state = dataInicial, {type, payload}){
    switch (type) {
        case GET_CARD_SUCCESS:
            return state
        case ADD_CARD_SUCCESS:
            return { ...state, tasks:payload}

        default:
            return state;
    }

}

// actions
export const addCardAction = (List) => async (dispatch, getState) => {
        dispatch({
            type: ADD_CARD_SUCCESS,
            payload: List
        })
}

export const getCardAction = () => async (dispatch, state) => {
    dispatch({
        type: ADD_CARD_SUCCESS
    })
}