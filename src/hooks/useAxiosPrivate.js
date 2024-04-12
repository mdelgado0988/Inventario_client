import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import useRefreshToken from './useRefreshToken'
import useAuth from "./useAuth";

const useAxiosPrivate = () => {
    const refreshToken = useRefreshToken();
    const {auth} = useAuth();

    const interceptRequest = axiosPrivate.interceptors.request.use(
        config => {
            if (!config.headers['Authorization']) {
                config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
            }
            return config;
        }, error => Promise.reject(error)
    );

    useEffect(() => {
        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response, 
            async (error) => {
                const prevrequest = error?.config;
                if (error?.response?.status === 403 && !prevrequest?.sent){
                    prevrequest.sent = true;
                    const newToken = await refreshToken();
                    prevrequest.headers['Authorization'] = `Bearer ${newToken}`;
                    return axiosPrivate(prevrequest);
                }
                return Promise.reject(error)
            }
        );

        return () => {
            axiosPrivate.interceptors.request.eject(interceptRequest);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        };

    }, [auth, refreshToken]);

    return axiosPrivate;

};

export default useAxiosPrivate;