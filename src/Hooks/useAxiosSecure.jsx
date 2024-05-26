import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";



export const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
    
    const navigate = useNavigate()
    const {signOutSystem} = useAuth()

    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`;
        console.log('request interseptior', token)
        return config
    })

    axiosSecure.interceptors.response.use(function(response){
        return response
    }, async (error) =>{
        const status = error.response.status
        if(status === 401 || status === 403){
            await signOutSystem
            navigate('/login')
        }
        console.log('status error in the interceptor', status)
        return Promise.reject(error);
    })

    return axiosSecure

};

export default useAxiosSecure;