import React from 'react';
import { useQuery } from 'react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data: isAdmin, isPanding: isAdminLoading} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            console.log(res.data)
            return res.data?.admin;

        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;