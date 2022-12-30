import axios from 'axios';

import {
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAIL
} from './types';


export const get_caregories = () => async disparch => {
    const config = {
        headers: {
            'Aceept': 'aplication/json'
        }
    }

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/category/categories`, config);

        if (res.status == 200) {
            disparch({
                type: GET_CATEGORIES_SUCCESS,
                payload: res.data
            })
        } else {
            disparch({
                type: GET_CATEGORIES_FAIL
            })
        }
    } catch (err) {
        disparch({
            type: GET_CATEGORIES_FAIL
        })
    }
}





