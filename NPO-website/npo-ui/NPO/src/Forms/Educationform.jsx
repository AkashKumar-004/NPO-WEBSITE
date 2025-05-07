import { useState, useEffect } from "react";
import { addservices, updateservice, getServiceById } from "../API/api";
import { useNavigate, useParams } from "react-router-dom";

const EducationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    description: "",
    donationLink: "",
    contact: "",
    history: "",
    impact: "",
    category: "Education",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  useEffect(() => {
    if (isEdit) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const res = await getServiceById(id);
          setFormData(res.data);
        } catch (error) {
          setError("Error fetching service data");
          console.error("Error fetching service data", error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [id, isEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.location) {
      setError("Name and location are required");
      return;
    }

    setLoading(true);
    try {
      if (isEdit) {
        await updateservice(id, formData);
      } else {
        await addservices(formData);
      }
      navigate("/educationdetail");
    } catch (error) {
      setError("Error saving service data");
      console.error("Error saving service data", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate("/educationdetail");
  };

  if (loading) return <div className="text-center">Loading...</div>;

  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-10 w-full min-h-screen">
      <div className="absolute inset-0 bg-black opacity-40 backdrop-blur-lg"></div>

      <div className="relative z-10 bg-white dark:bg-gray-900 text-black dark:text-white p-8 rounded-2xl shadow-2xl max-w-2xl mx-auto border border-gray-300 dark:border-gray-700 mt-10">
        <h2 className="text-3xl font-extrabold mb-6">{isEdit ? "Edit" : "Add"} Education Service</h2>
        {error && (
          <div className="bg-red-500 text-white p-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {[ 
            { label: "Name", name: "name" },
            { label: "Location", name: "location" },
            { label: "Description", name: "description", isTextarea: true },
            { label: "History", name: "history", isTextarea: true },
            { label: "Impact", name: "impact", isTextarea: true },
            { label: "Contact", name: "contact" },
            { label: "Donation Link", name: "donationLink" },
          ].map(({ label, name, isTextarea }) => (
            <div key={name}>
              <label htmlFor={name} className="block text-lg font-semibold mb-2">
                {label}
              </label>
              {isTextarea ? (
                <textarea
                  name={name}
                  id={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-lg"
                  rows={4}
                />
              ) : (
                <input
                  type="text"
                  name={name}
                  id={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-lg"
                />
              )}
            </div>
          ))}

          <div>
            <label htmlFor="category" className="block text-lg font-semibold mb-2">
              Category
            </label>
            <input
              type="text"
              name="category"
              id="category"
              value={formData.category}
              disabled
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-700 cursor-not-allowed text-lg"
            />
          </div>

          <div className="flex justify-between gap-6 mt-6">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg shadow-lg transition duration-300"
            >
              {isEdit ? "Update" : "Submit"}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="w-full bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-lg shadow-lg transition duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EducationForm;
