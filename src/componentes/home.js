import React from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage';

const Home = () => {
    const { getItem } = useLocalStorage();
    return (
        <h3>hola mundo {getItem('username')}</h3>
    )
};

export default Home