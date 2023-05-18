import { Helmet } from "react-helmet";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as any;
  console.error(error);

  return (
    <>
      <Helmet>
        <title>
          Error 404 (Not Found)!!1
        </title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div id="error-page">
        <h1>Oopsie doopsie!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </>

  );
}