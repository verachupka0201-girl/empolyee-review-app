import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Заполните все поля");
      return;
    }

    console.log("Форма отправлена");
  };
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-4"
      >
        <h1 className="text-3xl font-bold text-blue-900">Вход в систему</h1>
        <p>Employee Review Tracker</p>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Электронная почта
        </label>
        <input
          type="email"
          placeholder="Введите email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border-slate-300 px-4 py-3 outline-none focus:border-blue-700"
        />

        <label className="block text-sm font-medium text-slate-700 mb-2">
          Пароль
        </label>
        <input
          type="password"
          placeholder="Введите пароль"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border-slate-300 px-4 py-3 outline-none focus:border-blue-700"
        />

        <button
          type="submit"
          className="w-full bg-blue-900 text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
        >
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
