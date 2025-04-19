import { createContext, useContext, useState, useEffect } from 'react';
import * as api from '../api/api';
import { toast } from 'react-toastify';

const MinumanContext = createContext();
export const useMinuman = () => useContext(MinumanContext);

export const MinumanProvider = ({ children }) => {
  const [minumanSehat, setMinumanSehat] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMinumanSehat = async () => {
    setLoading(true);
    try {
      const res = await api.getMinumanSehat();
      setMinumanSehat(res.data);
    } catch (err) {
      toast.error('Gagal mengambil data!');
    }
    setLoading(false);
  };

  const tambahMinumanSehat = async (nama, harga) => {
    try {
      await api.addMinumanSehat(nama, harga);
      fetchMinumanSehat();
      toast.success('Minuman Sehat berhasil ditambahkan!');
    } catch (error) {
      toast.error(error.response?.data?.error || 'Gagal menambahkan!');
    }
  };

  const hapusMinuman = async (id) => {
    try {
      await api.deleteMinumanSehat(id);
      fetchMinumanSehat();
      toast.success('Minuman Sehat berhasil dihapus!');
    } catch (error) {
      toast.error('Gagal menghapus!');
    }
  };

  useEffect(() => {
    fetchMinumanSehat();
  }, []);

  return (
    <MinumanContext.Provider value={{ minumanSehat, tambahMinumanSehat, hapusMinuman, loading }}>
      {children}
    </MinumanContext.Provider>
  );
};
