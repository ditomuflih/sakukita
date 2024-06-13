import React from 'react';

const Modal = ({ isOpen, onClose, onConfirm, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-green-500 p-6 rounded-lg shadow-lg w-80">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-lg">{title}</h2>
          <button className="text-white" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="mb-4">{children}</div>
        <div className="flex justify-end">
          <button
            className="bg-gray-300 text-gray-700 p-2 rounded mr-2"
            onClick={onClose}
          >
            Batalkan
          </button>
          <button
            className="bg-red-500 text-white p-2 rounded"
            onClick={onConfirm}
          >
            Konfirmasi
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
