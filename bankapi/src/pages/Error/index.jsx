import React from 'react';
import { Link } from 'react-router-dom';
import './Error.scss';

/**@function showing error page
 *
 * @returns (<ErrorPage/>)
 */

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error-code">404</div>
      <div className="error-text">
        Oups! La page que vous demandez n&lsquo;existe pas.
      </div>
      <Link to="/">Retourner sur la page d&lsquo;accueil</Link>
    </div>
  );
};
export default ErrorPage;
