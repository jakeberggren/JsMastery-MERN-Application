import * as api from '../api';

// action Creators
export const getPosts = () => async (dispatch) => {

    try {
        const { data } = await api.fetchPosts();
        
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message)
    }

}