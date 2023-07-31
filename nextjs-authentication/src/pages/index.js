import { useSession } from "next-auth/react";
const HomePage = () => {
  const { data: session } = useSession();


  console.log("From home", user);

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "10%" }}>
        Welcome To Next Auth Home Page
      </h1>
      <h2 style={{ textAlign: "center" }}>
        Logged in user: {session?.user?.name}
      </h2>
    </div>
  );
};

export default HomePage;