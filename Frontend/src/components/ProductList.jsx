import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductList.css';
import { Link } from 'react-router-dom';
import { MdProductionQuantityLimits } from "react-icons/md";

const ProductList = () => {
  const [filters, setFilters] = useState({
    category: '',
    minPrice: '',
    maxPrice: ''
  });
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    image: null
  });
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showFilter, setShowFilter] = useState(false); // 🔥 Filter visibility

  const fetchProducts = async () => {
    const params = {};
    if (filters.category) params.category = filters.category;
    if (filters.minPrice) params.minPrice = filters.minPrice;
    if (filters.maxPrice) params.maxPrice = filters.maxPrice;

    const res = await axios.get('http://localhost:3002/api/products', { params });
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('description', form.description);
    formData.append('price', form.price);
    formData.append('category', form.category);
    if (form.image) formData.append('image', form.image);

    try {
      if (editingId) {
        await axios.put(`http://localhost:3002/api/products/${editingId}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      } else {
        await axios.post('http://localhost:3002/api/products', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      }
      resetForm();
      fetchProducts();
      setShowForm(false);
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };

  const handleEdit = (product) => {
    setForm({
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      image: null
    });
    setEditingId(product._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3002/api/products/${id}`);
    fetchProducts();
  };

  const resetForm = () => {
    setForm({ name: '', description: '', price: '', category: '', image: null });
    setEditingId(null);
    setShowForm(false);
  };

  return (
    <div className='container'>
      <header className="header" style={{ background: 'darkblue' }}>
        <h1 className="logo">
          <MdProductionQuantityLimits style={{ color: 'white', fontSize: '3rem' }} />
          Manage Mate
        </h1>
        <nav>
          <ul className="nav-links">
            <li><Link to='/' className='action-btn'>HOME</Link></li>
           {/* Buttons to toggle Add Form and Filter Section */}
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <button className="action-btn" onClick={() => {
          resetForm();
          setShowForm(true);
        }}>
          Add Product </button>

          {/* Filter product button */}
        <button className="action-btn" style={{ marginLeft: '10px' }} onClick={() => setShowFilter(!showFilter)}>
       Filter Products
        </button>
      </div>
          </ul>
        </nav>
      </header>

      <br />

      

      {/* Add / Edit Product Form */}
      {showForm && (
        <div className="product-form-container">
          <h3 className="form-title">{editingId ? 'Edit Product' : 'Add Product'}</h3>
          <form className="product-form" onSubmit={handleSubmit} encType="multipart/form-data">
            <input className="input-field" name="name" placeholder="Product Name" value={form.name} onChange={handleFormChange} required />
            <textarea className="input-field" name="description" placeholder="Product Description" value={form.description} onChange={handleFormChange} required />
            <input className="input-field" name="price" type="number" placeholder="Price" value={form.price} onChange={handleFormChange} required />
            <input className="input-field" name="category" placeholder="Category" value={form.category} onChange={handleFormChange} required />
            <input className="input-field" type="file" name="image" accept="image/*" onChange={handleFormChange} />
            <button type="submit" className="action-btn">{editingId ? 'Update Product' : 'Add Product'}</button>
            <button type="button" className="action-btn" onClick={resetForm}>Cancel</button>
          </form>
        </div>
      )}

 {/* Toggleable Filter Section */}
 {showFilter && (
        <div className="filter-container">
          <h3>Filter Products</h3>
          <input className="input-field" name="category" placeholder="Category" value={filters.category} onChange={handleFilterChange} />
          <input className="input-field" name="minPrice" type="number" placeholder="Min Price" value={filters.minPrice} onChange={handleFilterChange} />
          <input className="input-field" name="maxPrice" type="number" placeholder="Max Price" value={filters.maxPrice} onChange={handleFilterChange} />
          <button className="action-btn" onClick={fetchProducts}>Apply Filters</button>
        </div>
      )}




      {/* Product Cards */}
      <div className="card-container">
        {products.map((p) => (
          <div key={p._id} className="product-card">
            {p.image && (
              <img src={`http://localhost:3002/uploads/${p.image}`} alt={p.name} className="product-image" />
            )}
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <p><strong>₹{p.price}</strong></p>
            <p><em>{p.category}</em></p>
            <div className="card-buttons">
              <button className="edit-btn" onClick={() => handleEdit(p)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(p._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default ProductList;
