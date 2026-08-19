import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ResumeModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="resume-section text-center mt-5">
      <h2 className="text-3xl font-bold mb-4">My Resume</h2>
      <button
        onClick={() => setModalIsOpen(true)}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        View Resume
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Resume Modal"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            height: '80%',
          },
        }}
      >
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold">My Resume</h3>
          <button
            onClick={() => setModalIsOpen(false)}
            className="text-red-600 text-lg font-bold"
          >
            X
          </button>
        </div>
        <iframe
          src="/Aniket_Bhudke_Resume.pdf"
          width="100%"
          height="90%"
          title="Resume Preview"
        ></iframe>
        <div className="text-right mt-2">
          <a
            href="/Aniket_Bhudke_Resume.pdf"
            download
            className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
          >
            Download Resume
          </a>
        </div>
      </Modal>
    </div>
  );
};

export default ResumeModal;
