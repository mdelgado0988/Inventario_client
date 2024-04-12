import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import useRefreshToken from './useRefreshToken'
import useAuth from "./useAuth";

const useAxiosPrivate = () => {
    const refresh = useRefreshToken();
    const {auth} = useAuth();
    const user = JSON.parse( localStorage.getItem('user'));

    const interceptRequest = axiosPrivate.interceptors.request.use(
        config => {
            if (!config.headers['Authorization']) {
                config.headers['Authorization'] = `token ${user?.accessToken}`;
            }
            return config;
        }, (error) => Promise.reject(error)
    );

    useEffect(() => {
        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response, 
            async (error) => {
                const prevrequest = error?.config;
                if (error?.response?.status === 401 && !prevrequest?.sent){
                    try{
                        prevrequest.sent = true;
                        const newToken = await refresh();
                        prevrequest.headers['Authorization'] = `token ${newToken}`;
                        return axiosPrivate(prevrequest);
                    }catch(err){
                        return axiosPrivate(prevrequest);
                    }
                }
                return Promise.reject(error)
            }
        );

        return () => {
            axiosPrivate.interceptors.request.eject(interceptRequest);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        };

    }, [auth, refresh]);

    return axiosPrivate;

};

export default useAxiosPrivate;