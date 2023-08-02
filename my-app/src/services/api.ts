









// importing type
import { Diary } from '../types/types';


// getting axios
import axios, { AxiosError } from 'axios';



export const getReq = async () => {
    try { 
        const response = await axios.get('http://localhost:3000/api/diaries');
        return response.data;
    } catch (error) {
        console.error('Error in GET request:', error);
        throw error; 
    }
};



export const createDiaries = async (diary: Diary) => {

    try {
        const response = await axios.post('http://localhost:3000/', diary);
        return response.data;
    } catch (e) {
        const error = e as AxiosError;
        // Need to handle this error
        console.log('error is', error)
      }
};


