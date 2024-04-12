import submitPOST from '../api/submit';
import useAuth from './useAuth'

const useRefreshToken= () => {
    const {setAuth} = useAuth();

    const username = localStorage.getItem('user');
    const uniqueid = localStorage.getItem('uniqueid');

    const refresh = async() => {
        const response = await submitPOST(null, '/usuario/login', { username: username, clave: uniqueid } );        
    
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.accessToken);
            return {...prev, accessToken: response.data.accessToken};
        });

        return response.data.accessToken;
    };
    
};

export default useRefreshToken;