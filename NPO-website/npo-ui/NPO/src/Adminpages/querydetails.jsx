import { useEffect, useState } from "react";
import { getquery, deletequery } from "../API/api";
import { FiTrash2 } from "react-icons/fi";

const Querydetails = () => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const res = await getquery();
        setQueries(res.data || []);
      } catch (err) {
        console.error("Failed to fetch queries:", err);
        setError("Unable to load queries.");
      } finally {
        setLoading(false);
      }
    };
    fetchQueries();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this query?")) return;
    try {
      await deletequery(id);
      setQueries((prev) => prev.filter((q) => q._id !== id));
    } catch (err) {
      console.error("Failed to delete query:", err);
      alert("Failed to delete. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">❓ User Queries & Support</h1>

        {loading && <p className="text-center text-gray-300">Loading...</p>}
        {error && <p className="text-center text-red-400">{error}</p>}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {queries.length === 0 && !loading && (
            <div className="text-white text-center col-span-full">No queries available.</div>
          )}

          {queries.map((query) => (
            <div
              key={query._id}
              className="relative bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-lg border border-gray-700 shadow-[0_4px_30px_rgba(0,0,0,0.2)] rounded-xl p-6 overflow-hidden group"
            >
              <div className="flex flex-col space-y-2">
                <h2 className="text-xl font-semibold text-white">{query.name}</h2>
                <p className="text-sm text-gray-300">
                  <span className="font-medium text-white">Email:</span> {query.email}
                </p>
                <p className="text-sm text-gray-300">
                  <span className="font-medium text-white">Phone:</span> {query.phone}
                </p>
                <div className="text-sm text-gray-200 mt-3">
                  <span className="font-medium text-white">Message:</span>
                  <p className="mt-1 whitespace-pre-line">{query.message}</p>
                </div>
              </div>

              <button
                onClick={() => handleDelete(query._id)}
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow-lg transition duration-300"
                title="Delete"
              >
                <FiTrash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Querydetails;
