import "./searchBar.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

const SearchBar = ({
  showTitle = false,
  disabled = false,
  showButton = true,
}) => {
  const [searchParams] = useSearchParams();
  const [name, setName] = useState(searchParams.get("name") || "");
  const [category, setCategory] = useState([]);
  const [price, setPrice] = useState([]);
  const [status, setStatus] = useState([]);
  const navigate = useNavigate();

  const handleClick = async () => {
    const queryString = new URLSearchParams({
      name: name,
      category: category,
      price: price,
      status: status,
    }).toString();
    navigate(`/cars?${queryString}`);
  };

  return (
    <div className="search-box container mx-auto ">
      {showTitle && (
        <div className="row">
          <h3 className="search-title">Pencarianmu</h3>
        </div>
      )}

      <div className="row gx-0 gap-2 ">
        <div className="col-sm form-col mb-2">
          <label htmlFor="car-name" className="form-label">
            Nama Mobil
          </label>
          <input
            type="text"
            className="form-control search-form"
            id="car-name"
            placeholder="Ketik nama/tipe mobil"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={disabled}
          />
        </div>
        <div className="col-sm form-col mb-2">
          <label htmlFor="category" className="form-label">
            Kategori
          </label>
          <select
            className="form-select search-form"
            aria-label="Default select example"
            id="category"
            defaultValue={"#"}
            disabled={disabled}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="#" disabled>
              Masukan Kapasitas Mobil
            </option>
            <option value="small">2 - 4 orang</option>
            <option value="medium">4 - 6 orang</option>
            <option value="large">6 - 8 0rang</option>
          </select>
        </div>
        <div className="col-sm form-col mb-2">
          <label htmlFor="price" className="form-label">
            Harga
          </label>
          <select
            className="form-select search-form"
            aria-label="Default select example"
            id="price"
            defaultValue={"#"}
            disabled={disabled}
            onChange={(e) => setPrice(e.target.value)}
          >
            <option value="#" disabled>
              Masukan Harga Sewa perhari
            </option>
            <option value="300000">Rp. 300.000</option>
            <option value="400000">Rp. 400.000</option>
            <option value="500000">Rp. 500.000</option>
          </select>
        </div>
        <div className="col-sm form-col mb-2">
          <label htmlFor="status" className="form-label">
            Status
          </label>
          <select
            className="form-select search-form"
            aria-label="Default select example"
            id="status"
            defaultValue={"#"}
            disabled={disabled}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="#" disabled>
              Status Penyewaan
            </option>
            <option value="true">Disewa</option>
            <option value="false">Tersedia</option>
          </select>
        </div>
        {showButton && (
          <div className="col-sm form-btn">
            <button onClick={handleClick} className="search-btn">
              Cari Mobil
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default SearchBar;
