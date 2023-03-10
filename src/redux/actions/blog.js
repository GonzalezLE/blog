import axios from 'axios';
import {
    GET_BLOG_LIST_SUCCESS,
    GET_BLOG_LIST_FAIL,
    GET_BLOG_SUCCESS,
    GET_BLOG_FAIL,
    // eslint-disable-next-line
    GET_BLOG_PAGINATION_RESULTS_SUCCESS,
    // eslint-disable-next-line
    GET_BLOG_PAGINATION_RESULTS_FAIL
} from './types.js'


export const get_blog_list = () => async dispatch => {
    const config = {
        headers: {
            'Aceept': 'aplication/json'
        }
    }

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/`, config);

        

        
        console.log(res)
        if (res.status === 200) {
            dispatch({
                type: GET_BLOG_LIST_SUCCESS,
                payload: res.data
            })
        } else {
            dispatch({
                type: GET_BLOG_LIST_FAIL
            })
        }
    } catch (error) {

        console.log('help me');
        console.error(error)
        dispatch({
            type: GET_BLOG_LIST_FAIL
        })
    }
}



export const get_blog_list_page = (p) => async dispatch => {
    const config = {
        headers: {
            'Aceept': 'aplication/json'
        }
    }

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/?p=${p}`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_BLOG_LIST_SUCCESS,
                payload: res.data
            })
        } else {
            dispatch({
                type: GET_BLOG_LIST_FAIL
            })
        }
    } catch (error) {
        dispatch({
            type: GET_BLOG_LIST_FAIL
        })
    }
}


export const get_blog = (slug) => async dispatch => {
    const config = {
        headers: {
            'Aceept': 'aplication/json'
        }
    }

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/${slug}`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_BLOG_LIST_SUCCESS,
                payload: res.data
            })
        } else {
            dispatch({
                type: GET_BLOG_SUCCESS
            })
        }
    } catch (error) {
        dispatch({
            type: GET_BLOG_FAIL
        })
    }
}

// redux actions list 