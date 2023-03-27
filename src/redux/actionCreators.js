import { navigate } from '../../App';
import * as actionType from './actionType';

export const addPlace = place => (dispatch, getState) => {
    let token = getState().token;
    fetch(`https://image-picker-3447f-default-rtdb.firebaseio.com/places.json?auth=${token}`, {
        method: 'POST',
        body: JSON.stringify(place)
    })
    .catch(error=>console.log(error))
    .then(response=> response.json())
    .then(data=> console.log(data));
}

export const setPlaces = places => {
    return {
        type: actionType.SET_PLACES,
        payload: places
    }
}

export const loadPlaces = () => (dispatch, getState) =>{
    let token = getState().token;
    fetch(`https://image-picker-3447f-default-rtdb.firebaseio.com/places.json?auth=${token}`)
    .catch(err => {
        alert('sumting is wrong, sorry');
        console.log(err);
    })
    .then(res=> res.json())
    .then(data => {
        const places = [];

        for(let key in deta){
            place.push({
                ...data[key],
                key: key
            })
        }

        dispatch(setPlaces(places));
    });
}

export const deletePlace = key => {
    return {
        type: actionType.DELETE_PLACE,
        payload: key
    }
}

export const authUser = token => {
    return{
        type: actionType.AUTHENTICATE_USER,
        payload: token
    }
}

export const tryAuth = (email, password, mode) => (dispatch) => {
    let url = "";
    const API_KEY = "AIzaSyBnkgXbQ54BehfEarLjVCuilxZb39iosG8";
    if(mode == "signup"){
        url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY;
    }else if (mode == "login"){
        url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + API_KEY;
    }
  fetch(url,
    {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .catch((err) => {
      console.log(err);
      alert("Authentication failed");
    })
    .then((res) => res.json())
    .then((data) => {
        if(data.error){
            alert(data.error.message);
        }else{
            dispatch(authUser(data.idToken));
            navigate("home");   
        }
      console.log(data);
    });
}; 

