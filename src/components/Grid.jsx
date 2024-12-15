import { useState, useEffect } from "react";
import Card from "./Card";
import "../styles/grid.css";

const Grid = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
  };

  useEffect(() => {
    const fetchRandomUser = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=12");
        const data = await response.json();
        setUsers(data.results);
      } catch (error) {
        console.error("Error al obtener los datos de usuario :(", error);
      } finally {
        setLoading(false);
      }
    };

    if (loading) {
      fetchRandomUser();
    }
  }, [loading]);

  return (
    <div>
      <h1>Usuarios</h1>
      <button onClick={handleClick} disabled={loading}>
        {loading ? "Cargando..." : "Cargar Usuarios"}
      </button>
      <div className="grid">
        {users.map((user) => (
          <Card
            key={user.login.uuid}
            user={{
              nombre: user.name.first,
              apellido: user.name.last,
              pais: user.location.country,
              ciudad: user.location.city,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Grid;