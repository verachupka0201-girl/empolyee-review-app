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
    <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
      {loading && <p>Загрузка сотрудников...</p>}
      {error && <p>{error}</p>}
      <h1>Список сотрудников</h1>

      <table className="w-full border-collapse text-left">
        <thead>
          <tr>
            <th className="border-b bg-gray-100 px-4 py-3 font-semibold">Имя</th>
            <th className="border-b bg-gray-100 px-4 py-3 font-semibold">Фамилия</th>
            <th className="border-b bg-gray-100 px-4 py-3 font-semibold">Должность</th>
            <th className="border-b bg-gray-100 px-4 py-3 font-semibold">Email</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} className="transition-colors hover:bg-blue-50">
              <td className="border-b border-gray-100 px-4 py-3">{employee.first_name}</td>
              <td className="border-b border-gray-100 px-4 py-3">{employee.last_name}</td>
              <td className="border-b border-gray-100 px-4 py-3">{employee.position}</td>
              <td className="border-b border-gray-100 px-4 py-3">{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
