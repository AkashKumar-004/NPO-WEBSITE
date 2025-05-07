import { useEffect, useState } from 'react';
import { getUser, deleteuser } from '../API/api';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await getUser();
        setUsers(res.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }
    fetchUsers();
  }, []);

  const handleDelete = async (id,name) => {
    if(name==='admin')
    {
      alert('Admin user cannot be deleted');
      return;
    }
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await deleteuser(id);
        setUsers(users.filter((user) => user._id !== id));
      } catch (error) {
        console.error('Error deleting user:', error);
        alert('Failed to delete user');
      }
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-10">
      <h2 className="text-4xl font-bold text-white mb-10 text-center tracking-wide">User Management</h2>
        {users.length===0 ?(
            <div className="text-white flex justify-center items-center text-xl">No User Data Found</div>
        ):(
            <div className="space-y-6 max-w-4xl mx-auto">
        {users.map((user) => (
          <div
            key={user._id}
            className="flex justify-between items-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg border border-gray-700 hover:scale-[1.01] transition-transform"
          >
            <div className="flex flex-col gap-1">
              <span className="text-white text-lg font-semibold tracking-wide">
                @{user.username}
              </span>
              <span className="text-gray-400 text-sm">{user.email}</span>
            </div>
            <button
              onClick={() => handleDelete(user._id,user.username)}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wide transition-all"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    )}
    </div>
  );
}
