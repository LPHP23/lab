import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);      // dữ liệu
  const [loading, setLoading] = useState(true); // trạng thái loading
  const [error, setError] = useState(null);     // lỗi nếu có

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
        setError(null);
      } catch (e) {
        if (e.name !== 'AbortError') {
          setError(e);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // cleanup: hủy request nếu component unmount hoặc URL đổi
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
};