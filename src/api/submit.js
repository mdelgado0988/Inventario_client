import axios from './axios'

const submitPOST = async (e, method, json) => {
    //console.log(e);

    try{
        const response = await axios.post(method, json,
        {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: false
        });
        console.log(response.data);
        return { success: true, data: response.data };
    }catch (err){
        if(!err?.response){
            console.log('Conexión fallida');
            return { success: false, data: null };
        }
        if(err?.response.status === 409){
            console.log('prohibido');
            return { success: false, data: null };
        }
        console.log(err);
        console.log('credenciales inválidas');
        return { success: false, data: null };
    }

};

export default submitPOST;