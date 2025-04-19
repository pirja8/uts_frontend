import { useState } from 'react';
import { useMinuman } from '../context/MinumanContext';

const AddMinumanForm = () => {
  const { tambahMinumanSehat } = useMinuman();
  const [nama, setNama] = useState('');
  const [harga, setHarga] = useState('');
  const [namaError, setNamaError] = useState('');
  const [hargaError, setHargaError] = useState('');

  const validateForm = () => {
    let isValid = true;

    // Validasi nama
    if (!nama) {
      setNamaError('Nama minuman harus diisi');
      isValid = false;
    } else {
      setNamaError('');
    }

    // Validasi harga
    if (!harga || parseInt(harga) <= 0) {
      setHargaError('Harga harus lebih besar dari 0');
      isValid = false;
    } else {
      setHargaError('');
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      tambahMinumanSehat(nama, parseInt(harga));
      setNama('');
      setHarga('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label className="form-label">Nama Minuman</label>
        <input
          type="text"
          className={`form-control ${namaError ? 'is-invalid' : ''}`}
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Nama minuman sehat"
        />
        {namaError && <div className="invalid-feedback">{namaError}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Harga</label>
        <input
          type="number"
          className={`form-control ${hargaError ? 'is-invalid' : ''}`}
          value={harga}
          onChange={(e) => setHarga(e.target.value)}
          placeholder="Harga"
        />
        {hargaError && <div className="invalid-feedback">{hargaError}</div>}
      </div>

      <button className="btn btn-primary btn-sm hover-effect">Tambah</button>
    </form>
  );
};

export default AddMinumanForm;
