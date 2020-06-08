import { INCLINE, DECLINE } from './bookType';


const initialState = {
    numberOfBooks: 15,

    users: [],


}



const bookReducer = (state = initialState, action) => {

    switch (action.type) {

        case DECLINE: return {
            ...state,
            numberOfBooks: state.numberOfBooks - 1
        }
        case INCLINE: return {
            ...state,
            numberOfBooks: state.numberOfBooks + 1
        }




        default:

            return state;
    }
}

export default bookReducer;