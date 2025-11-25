import React from 'react';
import Stopwatch from '../components/Stopwatch';
import FocusInput from '../components/FocusInput';

const ToolsPage = () => {
  return (
    <section>
      <h2>Tools – useRef &amp; Mutable Values</h2>
      <p>
        Trang này minh họa hai use case chính của <code>useRef</code>:
      </p>
      <ul>
        <li>Truy cập trực tiếp DOM để gọi API như <code>.focus()</code>.</li>
        <li>Lưu giá trị mutable (ID interval) mà không gây re-render lại component.</li>
      </ul>

      <div className="tools-grid">
        <Stopwatch />
        <FocusInput />
      </div>
    </section>
  );
};

export default ToolsPage;
