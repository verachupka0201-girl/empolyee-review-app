import { useEffect, useState } from "react";

function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/employees/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Не удалось загрузить сотрудников");
        }

        return response.json();
      })
      .then((data) => {
        setEmployees(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading && <p>Загрузка сотрудников...</p>}
      {error && <p>{error}</p>}
      <h1>Список сотрудников</h1>

      {employees.map((employee) => (
        <p key={employee.id}>
          {employee.first_name} {employee.last_name}
        </p>
      ))}
    </div>
  );
}

export default Dashboard;
