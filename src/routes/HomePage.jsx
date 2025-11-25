import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <section>
      <h1>React Intermediate Lab – Demo Website</h1>
      <p>
        Trang web này minh họa các khái niệm React mức trung bình:
      </p>
      <ul>
        <li><strong>useEffect</strong> &amp; cleanup để fetch dữ liệu và đồng bộ với hệ thống bên ngoài.</li>
        <li><strong>useRef</strong> để truy cập DOM và lưu giá trị mutable không gây re-render.</li>
        <li><strong>Custom Hooks</strong>: <code>useFetch</code>, <code>useLocalStorage</code>.</li>
        <li><strong>React Router v6</strong>: routing, nested UI với <code>&lt;Outlet /&gt;</code>.</li>
        <li><strong>Context API</strong> cho theme toàn cục.</li>
        <li><strong>Forms</strong>: controlled inputs, validation và submit bằng <code>onSubmit</code>.</li>
      </ul>

      <p>Bạn có thể thử các chức năng chính:</p>
      <ol>
        <li><Link to="/users">Danh sách Users – data fetching + useEffect</Link></li>
        <li><Link to="/contact">Form liên hệ – controlled form + validation</Link></li>
        <li><Link to="/tools">Stopwatch &amp; Focus Input – useRef &amp; useState</Link></li>
      </ol>
    </section>
  );
};

export default HomePage;