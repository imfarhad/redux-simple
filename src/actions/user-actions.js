import $ from 'jquery';

export const UPDATE_USER = 'user:updateUser';
export const SHOW_ERROR = 'user:showError';


export function updateUser(newUser){
    return {
        type: UPDATE_USER,
        payload: {
            user: newUser
        }
    }
}

export function apiRequest(){
    return dispatch => {
        //we can also dispatch function when the api call is made
        // for example
        // dispatch(requestMade())
        
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/todos/1',
            success(response){
                console.log('SUCCESS');
                console.log(response);
                //we can call to another function with this response
                //for example, dispatch(updateUser(response))
            },
            error(){
                console.log('ERROR');
                dispatch(showError());
            }
        });
    }
}

export function showError(){
    return {
        type: SHOW_ERROR,
        payload: {
            user: 'ERROR!!'
        }
    }
}