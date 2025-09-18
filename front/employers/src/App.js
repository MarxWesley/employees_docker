import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [employers, setEmployers] = useState([]);
  const [form, setForm] = useState({ full_name: '', document: '', role: '', salary: '' });
  const [editId, setEditId] = useState(null);

  const API_URL = 'http://localhost:3001/employers';

  const fetchEmployers = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setEmployers(data);
  };

  useEffect(() => {
    fetchEmployers();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = editId ? 'PUT' : 'POST';
    const url = editId ? `${API_URL}/${editId}` : API_URL;

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, salary: Number(form.salary) }),
    });

    setForm({ full_name: '', document: '', role: '', salary: '' });
    setEditId(null);
    fetchEmployers();
  };

  const handleDelete = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    fetchEmployers();
  };

  const handleEdit = (emp) => {
    setForm(emp);
    setEditId(emp.id);
  };

  return (
    <div className="App">
      <h1>Employer Manager</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="full_name"
          placeholder="Nome completo"
          value={form.full_name}
          onChange={handleChange}
          required
        />
        <input
          name="document"
          placeholder="Documento"
          value={form.document}
          onChange={handleChange}
          required
        />
        <input
          name="role"
          placeholder="Cargo"
          value={form.role}
          onChange={handleChange}
          required
        />
        <input
          name="salary"
          placeholder="Salário"
          type="number"
          value={form.salary}
          onChange={handleChange}
          required
        />
        <button type="submit">{editId ? 'Atualizar' : 'Criar'}</button>
        {editId && <button onClick={() => { setEditId(null); setForm({ full_name: '', document: '', role: '', salary: '' }); }}>Cancelar</button>}
      </form>

      <ul>
        {employers.map((emp) => (
          <li key={emp.id}>
            <strong>{emp.full_name}</strong> – {emp.role} – R${emp.salary}
            <button onClick={() => handleEdit(emp)}>Editar</button>
            <button onClick={() => handleDelete(emp.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;