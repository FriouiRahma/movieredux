import { SEARCH_MOVIE } from './type';
import { ADD_MOVIE } from './type';
import { DELETE_MOVIE } from './type';
import { SEARCH_STAR } from './type';
import { EDIT_MOVIE } from './type';


export const Movserch = (serchmov) => {

    return {
        type: SEARCH_MOVIE,
        payload: serchmov

    };
};

export const ADDMOV = (newMovie) => {

    return {
        type: ADD_MOVIE,
        payload: newMovie

    };
};
export const DELETEMOVIE = (id) => {

    return {
        type: DELETE_MOVIE,
        payload: id

    };
};
export const SEARCHSTAR = (r) => {

    return {
        type: SEARCH_STAR,
        payload: r

    };
};
export const EDITMOVIE = (obj, name) => {

    return {
        type: EDIT_MOVIE,
        payload:{obj, name}

    };
};
