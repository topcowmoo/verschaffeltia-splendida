import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="bg-red-100 text-red-900 p-8 rounded-lg shadow-md"
    >
      <h1 className="text-3xl font-bold mb-4">Oops!</h1>
      <p className="mb-2">Sorry, an unexpected error has occurred.</p>
      <p className="italic">{error.statusText || error.message}</p>
    </div>
  );
}