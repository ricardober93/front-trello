// constantes
const dataInicial = {
    lists: [],
}

// types
const GET_LIST_SUCCESS = 'GET_LIST_SUCCESS'
const ADD_LIST_SUCCESS = 'ADD_LIST_SUCCESS'
const ADD_CARD_SUCCESS = 'ADD_CARD_SUCCESS'

// reducer
export default function cardReducer(state = dataInicial, {type, payload}){
    switch (type) {
        case GET_LIST_SUCCESS:
            return state
        case ADD_LIST_SUCCESS:
            return { ...state,  lists: [ ...state.lists, payload]}
        case ADD_CARD_SUCCESS:
            return state
        default:
            return state;
    }

}

// actions
export const getListAction = () => async (dispatch) => {
    dispatch({
        type: GET_LIST_SUCCESS,
    })
}

export const addListAction = (title) => async (dispatch) => {
    dispatch({
        type: ADD_LIST_SUCCESS,
        payload: {title:title}
    })
}


export const addCardAction = (List) => async (dispatch) => {
        dispatch({
            type: ADD_CARD_SUCCESS,
            payload: {title:List}
        })
}

export const getCardAction = () => async (dispatch) => {
    dispatch({
        type: ADD_CARD_SUCCESS
    })
}