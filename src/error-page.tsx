import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error("error:", error);

  let statusText = "";
  if (isRouteErrorResponse(error)) {
    statusText = error.statusText;
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{statusText}</i>
      </p>
    </div>
  );
}
