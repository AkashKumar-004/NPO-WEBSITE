import { useEffect, useState } from "react";
import { getservices, deleteservice } from "../API/api";
import { useNavigate } from "react-router-dom";

const ShelterDetails = () => {
  const [shelter, setshelter] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const response = await getservices();
    const data = Array.isArray(response.data) ? response.data : [];
    const filtered = data.filter((item) => item.category === "Shelter");
    setshelter(filtered);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this entry?")) {
      await deleteservice(id);
      fetchData();
    }
  };

  return (
    <div className="bg-gray-100 h-screen w-screen dark:bg-gray-900 p-8 max-w-full mx-auto shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold text-blue-700 dark:text-white">
        🏠Shelter Services Dashboard
        </h2>
        <button
          onClick={() => navigate("/shelter/add")}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg shadow-md"
        >
          + Add New Service
        </button>
      </div>

      {shelter.length === 0 ? (
        <div className="text-center text-gray-500">No Shelter services found.</div>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shelter.map((item) => (
            <div
              key={item._id}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out border border-gray-200 dark:border-gray-700"
            >
              <div className="font-semibold text-xl text-gray-800 dark:text-white">{item.name}</div>
              <p className="text-sm text-gray-600 dark:text-gray-300">{item.location}</p>
              <p className="mt-2 text-gray-700 dark:text-gray-400">{item.description}</p>

              <div className="mt-4 flex gap-4">
                <button
                  onClick={() => navigate(`/shelter/edit/${item._id}`)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md shadow-md"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md shadow-md"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShelterDetails;
