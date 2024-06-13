import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import illustration from '/pana.png'; // Update the path accordingly
import { FaArrowLeft } from 'react-icons/fa'; // Ensure you have react-icons installed
import Modal from './Modal'; // Import the modal component

const CategoryPage = ({ categories, setCategories }) => {
  const navigate = useNavigate();
  const [newCategory, setNewCategory] = useState('');
  const [editMode, setEditMode] = useState(null);
  const [editedCategory, setEditedCategory] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);

  const addCategory = () => {
    if (newCategory.trim() !== '') {
      setCategories([...categories, newCategory.trim()]);
      setNewCategory('');
    }
  };

  const editCategory = (index) => {
    const updatedCategories = categories.map((category, i) =>
      i === index ? editedCategory : category
    );
    setCategories(updatedCategories);
    setEditMode(null);
    setEditedCategory('');
  };

  const handleDeleteClick = (index) => {
    setCategoryToDelete(index);
    setIsModalOpen(true);
  };

  const deleteCategory = () => {
    const updatedCategories = categories.filter((_, i) => i !== categoryToDelete);
    setCategories(updatedCategories);
    setIsModalOpen(false);
    setCategoryToDelete(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      
      <div className="p-8 flex">
        <div className="flex-grow">
          <div className="flex items-center mb-4">
            <button
              className="bg-green-500 text-white p-2 rounded mr-2 flex items-center"
              onClick={() => navigate('/dashboard')}
            >
              <FaArrowLeft className="mr-2" /> Kategori
            </button>
          </div>
          <div className="mb-4 flex">
            <input
              type="text"
              className="border p-2 rounded w-full"
              placeholder="Nama kategori baru"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
            <button
              className="bg-green-500 text-white p-2 rounded ml-2"
              onClick={addCategory}
            >
              Tambah Kategori
            </button>
          </div>
          <div className="bg-green-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl mb-4">Daftar Kategori</h3>
            <ul>
              {categories.map((category, index) => (
                <li key={index} className="flex justify-between items-center mb-2">
                  {editMode === index ? (
                    <>
                      <input
                        type="text"
                        className="border p-2 rounded w-full"
                        value={editedCategory}
                        onChange={(e) => setEditedCategory(e.target.value)}
                      />
                      <button
                        className="bg-blue-500 text-white p-2 rounded ml-2"
                        onClick={() => editCategory(index)}
                      >
                        Simpan
                      </button>
                      <button
                        className="bg-red-500 text-white p-2 rounded ml-2"
                        onClick={() => setEditMode(null)}
                      >
                        Batal
                      </button>
                    </>
                  ) : (
                    <>
                      <span>{category}</span>
                      <div>
                        <button
                          className="bg-blue-500 text-white p-2 rounded ml-2"
                          onClick={() => {
                            setEditMode(index);
                            setEditedCategory(category);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 text-white p-2 rounded ml-2"
                          onClick={() => handleDeleteClick(index)}
                        >
                          Hapus
                        </button>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-shrink-0 ml-8">
          <img src={illustration} alt="Illustration" className="w-full h-auto" />
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={deleteCategory}
        title="Hapus Kategori"
      >
        Apakah anda yakin ingin menghapus kategori?
      </Modal>
    </div>
  );
};

export default CategoryPage;
