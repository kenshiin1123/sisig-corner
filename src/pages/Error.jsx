import { useNavigate, useRouteError } from "react-router-dom";
import Button from "../components/Button";

export default function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  let title = "An Error Occurred";
  let message = "Something went wrong";

  console.log(error);

  if (error.status === 404) {
    message = "Could not find resource or page";
  } else if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }

  const buttonClick = () => {
    navigate("/");
  };

  return (
    <div className="w-full h-[100vh] bg-primary flex">
      <div className="flex flex-col mx-auto p-5 mt-30 bg-white w-96 h-fit min-h-50 rounded">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="mb-5">{message}</p>
        <Button className={"w-full mt-auto"} onClick={buttonClick}>
          Homepage
        </Button>
      </div>
    </div>
  );
}
