import firebase from '@firebase/app';
import 'firebase/auth';
import "@firebase/database";

export const SET_WHOLE_SERIE = 'SET_WHOLE_SERIE';
export const setWholeSerie = (serie) => ({
    type: SET_WHOLE_SERIE,
    serie
});

export const SET_FIELD = 'SET_FIELD';
export const setField = (field, value) => {
    return {
        type: SET_FIELD,
        field,
        value,
    }
};

export const SERIE_SAVED_SUCCESS = 'SERIE_SAVED_SUCCESS';
const serieSavedSuccess = (field, value) => ({
    type: SERIE_SAVED_SUCCESS
});

export const RESET_FORM = 'RESET_FORM';
export const resetForm = () => ({
    type: RESET_FORM
});

export const saveSerie = (serie) => {
    const { currentUser } = firebase.auth();
    return async (dispatch) => {
        if (serie.id) {
            //update
        } else {
            await firebase
                .database()
                .ref(`/users/${currentUser.uid}/series`)
                .push(serie);
            dispatch(serieSavedSuccess())
        }
    }
}
