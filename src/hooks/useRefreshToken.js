import submitPOST from '../api/submit';
import useAuth from './useAuth'

const useRefreshToken= () => {
    const {setAuth} = useAuth();

    const user = JSON.parse(localStorage.getItem('user'));

    const refresh = async () => {
        const response = await submitPOST(null, '/usuario/refresh', { username: user?.username} );        
    
        // setAuth(prev => {
        //     console.log(JSON.stringify(prev));
        //     console.log(response.data.accessToken);
        //     return { ...prev, accessToken: response.data.accessToken};
        // });
        user.accessToken = response.data.accessToken;
        localStorage.setItem('user', JSON.stringify(user));

        return response.data.accessToken;
    };

    return refresh();
    
};

export default useRefreshToken;