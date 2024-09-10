import { useRouteError } from "react-router-dom";
import ErrorSection from "./components/errorSection/ErrorSection";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center lg:min-h-screen">
      <ErrorSection />
    </div>
  );
}