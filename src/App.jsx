import { useEffect, useState } from "react";
import CardUser from "./components/CardUser";

const App = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch("https://devsapihub.com/api-users");
        const data = await response.json();
        setUsuarios(data);
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
  }, []);

  return (
    <div className="">
      <h1 className="text-3xl">Tailwindcss intro</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 m-3">
        {usuarios.map((user) => (
          <CardUser key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default App;
