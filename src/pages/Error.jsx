import { useRouteError } from "react-router-dom";

// Define ErrorPage functional component
export default function ErrorPage() {
  // Retrieve error details from the route
  const error = useRouteError();
  // Log error to console for debugging purposes
  console.error(error);

  // Return JSX for error page display
  return (
    <div
      id="error-page"
      className="bg-red-100 text-red-900 p-8 rounded-lg shadow-md"
    >
      {/* Error heading */}
      <h1 className="text-3xl font-bold mb-4">Oops!</h1>
      {/* Error message */}
      <p className="mb-2">Sorry, an unexpected error has occurred.</p>
      {/* Display error status text or message */}
      <p className="italic">{error.statusText || error.message}</p>
    </div>
  );
}
