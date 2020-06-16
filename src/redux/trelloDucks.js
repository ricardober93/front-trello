// constantes
const dataInicial = {
    array: []
}

// types
const ADD_CARD_SUCCESS = 'ADD_CARD_SUCCESS'

// reducer
export default function cardReducer(state = dataInicial, action){
    switch (action.type) {
        case ADD_CARD_SUCCESS:

            break;

        default:
            return state;
    }

}

// actions
export const addCardAction = () => async (dispatch) => {
    dispatch({
        type: ADD_CARD_SUCCESS,
    })
}