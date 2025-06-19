import { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

function AdminDashboard() {
  const [trainers, setTrainers] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({
    name: '', email: '', phone: '', platform: '', motivation: ''
  });

  const [projectRequests, setProjectRequests] = useState([]);

  useEffect(() => {
    fetchTrainers();
    fetchProjectRequests();
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
 const fetchProjectRequests = async () => {
  try {
    const res = await axios.get('http://localhost:5000/api/projects');
    setProjectRequests(res.data);
  } catch (err) {
    console.error('Failed to load project requests:', err);
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

      <div className="dashboard-grid">
        {/* Trainers Section */}
        <div className="dashboard-card">
          <h3>👥 Registered Trainers: <span className="count">{trainers.length}</span></h3>
          <ul className="item-list">
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
                    <strong>{index + 1}. {trainer.name}</strong><br />
                    📧 {trainer.email} | 🖥️ {trainer.platform} <br />
                    📞 {trainer.phone} <br />
                    💬 {trainer.motivation} <br />
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

        {/* Project Requests Section */}
        <div className="dashboard-card">
          <h3>📩 Project Requests: <span className="count">{projectRequests.length}</span></h3>
          <ul className="item-list">
            {projectRequests.map((req, i) => (
          <li key={req._id} className="request-item">
  <strong>{i + 1}. {req.name}</strong><br />
  🏢 {req.company || 'N/A'} <br />
  📧 {req.email} | 📦 {req.projectType} <br />
  💬 {req.details.slice(0, 100)}... <br />
  <button onClick={() => handleDeleteRequest(req._id)}>Delete</button>
</li>

            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;

