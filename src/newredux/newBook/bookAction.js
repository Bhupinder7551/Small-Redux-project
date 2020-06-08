import { INCLINE, DECLINE } from './bookType';



export const incline = () => ({
    type: INCLINE,

});
export const decline = () => {
    return {
        type: DECLINE,

    }
}
