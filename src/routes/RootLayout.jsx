import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const RootLayout = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <header className="app-header">
        <Link to="/" className="logo">
          React Intermediate Lab
        </Link>

        <nav className="nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/users">Users (useFetch)</NavLink>
          <NavLink to="/contact">Contact Form</NavLink>
          <NavLink to="/tools">Tools (useRef)</NavLink>
        </nav>

        <button className="theme-toggle" onClick={toggleTheme}>
          Theme: {theme === 'light' ? '🌞' : '🌙'}
        </button>
      </header>

      <main className="app-main">
        <Outlet />
      </main>

      <footer className="app-footer">
        <small>React Intermediate Lab – useEffect, useRef, Router, Context, Custom Hooks</small>
      </footer>
    </>
  );
};

export default RootLayout;