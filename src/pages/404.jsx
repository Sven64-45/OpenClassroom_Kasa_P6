import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/404.scss';

function Error() {
  return (
    <div>
      <main>
        <section className="error">
          <h2>404</h2>
          <p>{"Oups! La page que vous demandez n'existe pas."}</p>
          <Link className="link" to="/">
            Retourner sur la page d&apos;accueil
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Error;
