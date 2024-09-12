/* eslint-disable react/no-unescaped-entities */
import "./notFound.scss";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="notFound">
      <div className="notFound_infos">
        <h1 className="notFound_infos_title">{error.status}</h1>
        <p className="notFound_infos_content">
          Oups! La page que vous demandez n'existe pas.
        </p>
      </div>
      <Link className="notFound_infos_return" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}
