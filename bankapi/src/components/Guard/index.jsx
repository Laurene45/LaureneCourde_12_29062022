import React from 'react';
import { Outlet, Navigate } from 'react-router';
import { useSelector } from 'react-redux';

//<Navigate> : élément change l'emplacement actuel lorsqu'il est rendu. 
//C'est un wrapper de composant autour de useNavigate, et accepte tous les mêmes arguments que les props.

// composant Guard permet de protéger la page souhaitée par des autorisations.
// protéger certaines routes de l'application contre les utilisateurs qui ne disposent pas de 
// l'authentification appropriée. Les itinéraires protégés nous permettent de choisir les itinéraires que
// les utilisateurs peuvent visiter en fonction de leur connexion.

const Guard = () => {
    const { token } = useSelector((state) => state.user);

    return (

        token !== null ? <Outlet />  : <Navigate to='/login'/>
    );
};

export default Guard;


