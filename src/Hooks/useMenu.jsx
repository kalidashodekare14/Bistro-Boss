import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import UseAxiosPublic from "./UseAxiosPublic";


const useMenu = () => {

    const axiosPublic = UseAxiosPublic()

    const { data: menu = [], isPending: loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiosPublic.get('/menu');
            return res.data
        }
    })




    return [menu, loading, refetch]
};

export default useMenu;