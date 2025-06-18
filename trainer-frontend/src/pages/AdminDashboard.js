import { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

function AdminDashboard() {
  const [trainers, setTrainers] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({
    name: '', email: '', phone: '', platform: '', motivation: ''
  });

  useEffect(() => {
    fetchTrainers();
  }, []);

  const fetchTrainers = async () => {
    const res = await axios.get('https://web-design-training.onrender.com/api/trainers');
    setTrainers(res.data);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this trainer?')) {
      await axios.delete(`https://web-design-training.onrender.com/api/trainers/${id}`);
      fetchTrainers();
    }
  };

  const handleEdit = (trainer) => {
    setEditingId(trainer._id);
    setEditData(trainer);
  };

  const handleUpdate = async () => {
    await axios.put(`https://web-design-training.onrender.com/api/trainers/${editingId}`, editData);
    setEditingId(null);
    fetchTrainers();
  };

  return (
    <div className="admin-dashboard-container">
      <h2 className="dashboard-title">📊 Admin Dashboard</h2>

      <div className="stats-card">
        <h3>Total Registered Trainers</h3>
        <span className="count">{trainers.length}</span>
      </div>

      <div className="trainer-list">
        <h3>👥 Manage Trainers</h3>
        <ul>
          {trainers.map((trainer, index) => (
            <li key={trainer._id} className="trainer-item">
              {editingId === trainer._id ? (
                <div className="edit-form">
                  <input
                    value={editData.name}
                    onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                  />
                  <input
                    value={editData.email}
                    onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                  />
                  <input
                    value={editData.phone}
                    onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                  />
                  <select
                    value={editData.platform}
                    onChange={(e) => setEditData({ ...editData, platform: e.target.value })}
                  >
                    <option value="Zoom">Zoom</option>
                    <option value="Telegram">Telegram</option>
                  </select>
                  <textarea
                    value={editData.motivation}
                    onChange={(e) => setEditData({ ...editData, motivation: e.target.value })}
                  />
                  <button onClick={handleUpdate}>Save</button>
                  <button onClick={() => setEditingId(null)}>Cancel</button>
                </div>
              ) : (
                <>
                  <span className="trainer-name">{index + 1}. {trainer.name}</span>
                  <span className="trainer-detail">
                    {trainer.email} | {trainer.platform}
                  </span>
                  <div className="actions">
                    <button onClick={() => handleEdit(trainer)}>Edit</button>
                    <button onClick={() => handleDelete(trainer._id)}>Delete</button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminDashboard;
