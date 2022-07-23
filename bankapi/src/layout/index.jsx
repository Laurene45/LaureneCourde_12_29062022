import React from 'react';
import { Outlet } from 'react-router';
import Footer  from '../components/Footer/index';
import Header  from '../components/Header/index';

export default function MainLayout() {
 
  /*Un <Outlet> doit être utilisé dans les éléments de route parents pour restituer leurs éléments de route enfants.
   Cela permet à l'interface utilisateur imbriquée de s'afficher lorsque les itinéraires enfants sont rendus.
  Si l'itinéraire parent correspond exactement, il affichera un itinéraire d'index enfant ou rien s'il n'y a pas d'itinéraire d'index.*/

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
