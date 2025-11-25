import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <section className="error-page">
      <h1>Oops!</h1>
      <p>Đã xảy ra lỗi khi load trang.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">Quay về Home</Link>
    </section>
  );
};

export default ErrorPage;