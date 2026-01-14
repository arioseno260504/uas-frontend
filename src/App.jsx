import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

// pages
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Users from "./pages/Users";

function App() {
  // theme (localStorage)
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // login dummy (simulasi auth)
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("login") === "true"
  );

  /* ======================
     side effects
  ====================== */
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("login", isLogin);
  }, [isLogin]);

  /* ======================
     handlers
  ====================== */
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleLogin = () => setIsLogin(true);
  const handleLogout = () => setIsLogin(false);

  /* ======================
     protected route
  ====================== */
  const ProtectedRoute = ({ children }) => {
    if (!isLogin) return <Navigate to="/" />;
    return children;
  };

  return (
    <BrowserRouter>
      <div className={`app ${theme}`}>

        {/* ===== NAVBAR ===== */}
        <header className="navbar">
          <h2>Frontend UAS</h2>

          <nav className="nav-menu">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/todo">Todo</NavLink>
            <NavLink to="/users">Users</NavLink>
          </nav>

          <div className="nav-action">
            <button onClick={toggleTheme}>
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            {isLogin ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <button onClick={handleLogin}>Login</button>
            )}
          </div>
        </header>

        {/* ===== CONTENT ===== */}
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<Todo />} />
            <Route
              path="/users"
              element={
                <ProtectedRoute>
                  <Users />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>

        {/* ===== FOOTER ===== */}
        <footer className="footer">
          <p>© 2026 Frontend UAS</p>
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;
