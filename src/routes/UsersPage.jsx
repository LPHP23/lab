import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const UsersPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';

  const [query, setQuery] = useState(initialQuery);
  const inputRef = useRef(null);

  const { data: users, loading, error } = useFetch(API_URL);

  // autofocus input khi vào trang
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    // update query string
    setSearchParams(value ? { q: value } : {});
  };

  const filteredUsers = (users || []).filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section>
      <h2>Users – Data Fetching (useEffect + custom hook)</h2>
      <p>
        Dữ liệu được lấy từ API public <code>jsonplaceholder.typicode.com</code> bằng custom hook <code>useFetch</code>.
      </p>

      <div className="search-bar">
        <label>
          Search by name:{' '}
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleSearchChange}
            placeholder="Type a name..."
          />
        </label>
      </div>

      {loading && <p>Loading users...</p>}
      {error && <p className="error">Error: {error.message}</p>}

      {!loading && !error && (
        <ul className="user-list">
          {filteredUsers.map((user) => (
            <li key={user.id} className="user-card">
              <h3>{user.name}</h3>
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>City:</strong> {user.address.city}</p>
            </li>
          ))}
          {filteredUsers.length === 0 && <p>Không tìm thấy user phù hợp.</p>}
        </ul>
      )}
    </section>
  );
};

export default UsersPage;