import { useRouter } from "next/router";

const ErrorPage = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 5000);

  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXkgfy3j3RfXbJkJfHQWz3kjKbNvhJ4gh8BQ&usqp=CAU"
        alt=""
        width="100%"
      />
    </div>
  );
};

export default ErrorPage;
