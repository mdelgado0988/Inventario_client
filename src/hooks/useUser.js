import { useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useLocalStorage } from './useLocalStorage';

export const useUser = () => {
    const [user, setUser] = useState(AuthContext);
    const { setItem } = useLocalStorage();

    const addUser = (user) => {
        setUser(user);
        setItem('user', JSON.stringify(user));
    };

    const removeUser = () => {
        setUser(null);
        setItem('user', null);
    }

    return { user, addUser, removeUser };

}

//export default useUser;