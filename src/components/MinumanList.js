import { useState } from 'react';
import { useMinuman } from '../context/MinumanContext';
import { Link } from 'react-router-dom';

const MinumanList = () => {
  const { minumanSehat, hapusMinuman, loading } = useMinuman();
  const [searchTerm, setSearchTerm] = useState('');

  if (loading) return <p>Loading data...</p>;

  // Filter minuman berdasarkan pencarian
  const filteredMinuman = minumanSehat.filter(minum =>
    minum.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h4 className="mb-3">Daftar Minuman Sehat</h4>

      <Link to="/tambah" className="btn btn-success mb-3 hover-effect">Tambah Minuman</Link>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Cari Minuman"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredMinuman.length === 0 ? (
        <p>Tidak ada data yang ditemukan.</p>
      ) : (
        <ul className="list-group">
          {filteredMinuman.map((minum) => (
            <li key={minum.id} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{minum.nama} - Rp {minum.harga}</span>
              <button
                className="btn btn-sm btn-danger hover-effect"
                onClick={() => hapusMinuman(minum.id)}
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MinumanList;
