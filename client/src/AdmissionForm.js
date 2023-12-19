// import React, { useState } from 'react';
// import Modal from 'react-modal';
// import Navbar from '/Users/yuvrajaggarwal/Desktop/Task/yoga-admission-form/client/src/navbar.js';

// const AdmissionForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     age: 0,
//     email: '',
//     phone: '',
//     selectedBatch: '',
//   });

//   const [eligibilityMessage, setEligibilityMessage] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     resetForm();
//   };

//   const resetForm = () => {
//     setFormData({
//       name: '',
//       age: 0,
//       email: '',
//       phone: '',
//       selectedBatch: '',
//     });
//     setEligibilityMessage('');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (formData.age < 18 || formData.age > 65) {
//       setEligibilityMessage('You are not eligible. Age must be between 18 and 65.');

//       setTimeout(() => {
//         setIsModalOpen(false);
//       }, 3000);

//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:3001/submitForm', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const result = await response.json();

//       console.log('Response:', result);

//       if (result.success) {
//         setEligibilityMessage('Payment successful!');

//         setTimeout(() => {
//           setIsModalOpen(false);
//           resetForm();
//         }, 3000);
//       } else {
//         setEligibilityMessage('Payment failed. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.name === 'age' ? parseInt(e.target.value, 10) : e.target.value,
//     });
//   };

//   const styles = {
//      styles : {
//       container: {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         minHeight: '100vh',
//         fontFamily: 'Arial, sans-serif',
//         backgroundColor: 'powderblue',
//         padding: '20px',
//     },
//     header: {
//       textAlign: 'center',
//       marginBottom: '20px',
//       color: '#333', // Make the text color darker
//       color: '#FF0000',
//     },
//     title: {
//       fontSize: '2rem',
//       marginBottom: '0.5rem',
//     },
//     description: {
//       fontSize: '1rem',
//       color: '#666',
//     },
//     content: {
//       marginTop: '2rem',
//       width: '100%',
//       maxWidth: '800px',
//       margin: 'auto',
//     },
//     modalButton: {
//       padding: '1rem',
//       fontSize: '1rem',
//       cursor: 'pointer',
//       backgroundColor: '#4CAF50',
//       color: 'white',
//       border: 'none',
//       borderRadius: '4px',
//       display: 'block',
//       margin: 'auto', // Center the button
//     },
//     modalContainer: {
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       padding: '2rem',
//       backgroundColor: 'white',
//       borderRadius: '8px',
//       boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//     },
//     modalHeading: {
//       fontSize: '1.5rem',
//       marginBottom: '1rem',
//       color: '#333',
//     },
//     yogaImage: {
//       width: '100%',
//       maxWidth: '400px',
//       borderRadius: '8px',
//       marginBottom: '1rem',
//       boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//     },
//     modalForm: {
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       width: '100%',
//     },
//     modalLabel: {
//       marginBottom: '0.5rem',
//       fontSize: '1rem',
//       textAlign: 'left',
//       width: '100%',
//       color: '#333',
//       fontWeight: 'bold',
//     },
//     modalInput: {
//       padding: '0.8rem',
//       marginBottom: '1rem',
//       fontSize: '1rem',
//       width: '100%',
//       border: '1px solid #ccc',
//       borderRadius: '4px',
//       outline: 'none',
//       transition: 'border-color 0.3s',
//     },
//     modalInputFocus: {
//       borderColor: '#4CAF50',
//     },
//     modalSubmitButton: {
//       padding: '1rem',
//       fontSize: '1rem',
//       cursor: 'pointer',
//       backgroundColor: '#4CAF50',
//       color: 'white',
//       border: 'none',
//       borderRadius: '4px',
//       outline: 'none',
//       transition: 'background-color 0.3s',
//     },
//     modalSubmitButtonHover: {
//       backgroundColor: '#45a049',
//     },
//     modalErrorMessage: {
//       color: '#FF0000',
//       marginBottom: '1rem',
//     },
//     modalSuccessMessage: {
//       color: '#008000',
//       marginBottom: '1rem',
//     },
//     footer: {
//       marginTop: '20px',
//       textAlign: 'center',
//       color: '#333', // Make the text color darker
//       borderTop: '1px solid #ddd', // Add a border at the top
//       paddingTop: '20px', // Add some padding at the top
//       color: '#FF0000',
//     },
//     benefitSection: {
//       marginTop: '20px',
//       textAlign: 'center',
//     },
//     benefitTitle: {
//       fontSize: '1.5rem',
//       marginBottom: '1rem',
//       color: '#333',
//     },
//     benefitText: {
//       fontSize: '1rem',
//       color: '#666',
//     },
//     headerImage: {
//       width: '100%', // Adjust the width as needed
//       borderRadius: '8px',
//       marginBottom: '1rem',
//       boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//     },

//     footerImage: {
//       width: '100%', // Adjust the width as needed
//       borderRadius: '8px',
//       marginTop: '1rem',
//       boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//     },
//   };

//    customStyles : {
//     content: {
//       width: '80%',
//       maxWidth: '400px',
//       margin: 'auto',
//       borderRadius: '8px',
//       boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
//     },
//   };


//   return (
//     <div style={styles.container}>
//       <Navbar />
//       {/* Main content */}
//       <div style={styles.content}>
//         {/* Button to open the modal */}
//         <button onClick={openModal} style={styles.modalButton}>
//           Application Form
//         </button>

//         {/* Modal */}
//         <Modal
//           isOpen={isModalOpen}
//           onRequestClose={closeModal}
//           style={customStyles}
//           contentLabel="Admission Form Modal"
//         >
//           <div style={styles.modalContainer}>
//             {/* Modal heading */}
//             <h2 style={styles.modalHeading}>Admission Form</h2>

//             {/* Yoga Picture */}
//             <img
//               src="https://i.imgur.com/xyz123.jpg" // Replace this URL with your actual yoga image URL
//               alt="Yoga"
//               style={styles.yogaImage}
//               onLoad={() => console.log('Image loaded successfully')}
//               onError={() => console.error('Error loading image')}
//             />

//             {/* Form inside the modal */}
//             <form onSubmit={handleSubmit} style={styles.modalForm}>
//               <label style={styles.modalLabel}>
//                 Name:
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   style={styles.modalInput}
//                 />
//               </label>
//               <label style={styles.modalLabel}>
//                 Age:
//                 <input
//                   type="number"
//                   name="age"
//                   value={formData.age}
//                   onChange={handleChange}
//                   style={styles.modalInput}
//                 />
//               </label>
//               <label style={styles.modalLabel}>
//                 Email:
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   style={styles.modalInput}
//                 />
//               </label>
//               <label style={styles.modalLabel}>
//                 Phone:
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   style={styles.modalInput}
//                 />
//               </label>
//               <label style={styles.modalLabel}>
//                 Select Batch:
//                 <select
//                   name="selectedBatch"
//                   value={formData.selectedBatch}
//                   onChange={handleChange}
//                   style={styles.modalInput}
//                 >
//                   <option value="">Select Batch</option>
//                   <option value="6-7AM">6-7AM</option>
//                   <option value="7-8AM">7-8AM</option>
//                   <option value="8-9AM">8-9AM</option>
//                   <option value="5-6PM">5-6PM</option>
//                 </select>

//                 {/* Display eligibility and success messages */}
//                 {eligibilityMessage && <p style={styles.modalErrorMessage}>{eligibilityMessage}</p>}
//                 {eligibilityMessage && !eligibilityMessage.includes('failed') && (
//                   <p style={styles.modalSuccessMessage}>{eligibilityMessage}</p>
//                 )}

//                 {/* Submit button */}
//                 <button type="submit" style={styles.modalSubmitButton}>
//                   Submit
//                 </button>
//               </label>
//             </form>
//           </div>
//         </Modal>

//         {/* Yoga benefits section */}
//         <div style={styles.benefitSection}>
//           <h2 style={styles.benefitTitle}>Yoga Benefits</h2>
//           <p style={styles.benefitText}>
//             Experience improved flexibility, balance, and mental well-being through our yoga classes.
//           </p>
//         </div>
//       </div>

      
//   );
// };

//export default AdmissionForm;


// AdmissionForm.js
import yogaimage2 from '/Users/yuvrajaggarwal/Desktop/Task/yoga-admission-form/client/src/image2.avif';
import yogaImage from '/Users/yuvrajaggarwal/Desktop/Task/yoga-admission-form/client/src/jared-rice-NTyBbu66_SI-unsplash.jpg';
import React, { useState } from 'react';
import Modal from 'react-modal';

const AdmissionForm = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    age: 0,
    email: '',
    phone: '',
    selectedBatch: '',
  });

  // State for eligibility message
  const [eligibilityMessage, setEligibilityMessage] = useState('');

  // State for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal and reset the form
  const closeModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  // Function to reset the form data and eligibility message
  const resetForm = () => {
    setFormData({
      name: '',
      age: 0,
      email: '',
      phone: '',
      selectedBatch: '',
    });
    setEligibilityMessage('');
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check age eligibility
    if (formData.age < 18 || formData.age > 65) {
      setEligibilityMessage('You are not eligible. Age must be between 18 and 65.');

      // Close modal after 3 seconds
      setTimeout(() => {
        setIsModalOpen(false);
      }, 3000);

      return;
    }

    try {
      // Send form data to the server
      const response = await fetch('http://localhost:3001/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check if the network response is okay
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Parse the JSON response
      const result = await response.json();

      console.log('Response:', result);

      // Check if payment was successful
      if (result.success) {
        setEligibilityMessage('Payment successful!');

        // Close modal and reset form after 3 seconds
        setTimeout(() => {
          setIsModalOpen(false);
          resetForm();
        }, 3000);
      } else {
        setEligibilityMessage('Payment failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Function to handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.name === 'age' ? parseInt(e.target.value, 10) : e.target.value,
    });
  };

  // Styles for the component
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: 'powderblue',
      padding: '20px',
     
    },
    // Add your styles here
    header: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#333', // Make the text color darker
      color: '#FF0000',
    },
    title: {
      fontSize: '2rem',
      marginBottom: '0.5rem',
    },
    description: {
      fontSize: '1rem',
      color: '#666',
    },
    content: {
      marginTop: '2rem',
      width: '100%',
      maxWidth: '800px',
      margin: 'auto',
    },
    yogaImagesContainer: {
      display: 'flex',
      justifyContent: 'space-between', // Align images with space between
      flexWrap: 'wrap', // Allow images to wrap to the next line if space is not enough
      marginBottom: '20px',
    },
    modalButton: {
      padding: '1rem',
      fontSize: '1rem',
      cursor: 'pointer',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      display: 'block',
      margin: 'auto', // Center the button
      marginBottom: '20px',
      marginleft:1000,
      marginBottom: '20px',
      marginLeft: 'auto', // Align button to the right
      marginRight: 'auto', 
    },
    modalContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    modalHeading: {
      fontSize: '1.5rem',
      marginBottom: '1rem',
      color: '#333',
    },
    
    yogaImage: {
      width: '100%',
      maxWidth: '400px',
      borderRadius: '8px',
      marginBottom: '1rem',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      height:'500px',
      
      
    },
    modalForm: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
    modalLabel: {
      marginBottom: '0.5rem',
      fontSize: '1rem',
      textAlign: 'left',
      width: '100%',
      color: '#333',
      fontWeight: 'bold',
    },
    modalInput: {
      padding: '0.8rem',
      marginBottom: '1rem',
      fontSize: '1rem',
      width: '100%',
      border: '1px solid #ccc',
      borderRadius: '4px',
      outline: 'none',
      transition: 'border-color 0.3s',
    },
    modalInputFocus: {
      borderColor: '#4CAF50',
    },
    modalSubmitButton: {
      padding: '1rem',
      fontSize: '1rem',
      cursor: 'pointer',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      outline: 'none',
      transition: 'background-color 0.3s',
    },
    modalSubmitButtonHover: {
      backgroundColor: '#45a049',
    },
    modalErrorMessage: {
      color: '#FF0000',
      marginBottom: '1rem',
    },
    modalSuccessMessage: {
      color: '#008000',
      marginBottom: '1rem',
    },
    
    benefitSection: {
      marginTop: '20px',
      textAlign: 'center',
    },
    benefitTitle: {
      fontSize: '1.5rem',
      marginBottom: '1rem',
      color: '#333',
    },
    benefitText: {
      fontSize: '1rem',
      color: '#666',
    },
    headerImage: {
      width: '100%', // Adjust the width as needed
      borderRadius: '8px',
      marginBottom: '1rem',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },

    footerImage: {
      width: '100%', // Adjust the width as needed
      borderRadius: '8px',
      marginTop: '1rem',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    // ...

  };

  // Custom styles for the modal
  const customStyles = {
    content: {
      width: '80%',
      maxWidth: '400px',
      margin: 'auto',
      borderRadius: '8px',
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
    },
  };

  // JSX for the component
  return (
    <div style={styles.container}>
       {/* Render Navbar component */}
      {/* Main content */}
      <div style={styles.content}>
        {/* Button to open the modal */}
        <button onClick={openModal} style={styles.modalButton}>
          Application Form
        </button>
        <div>
        <img
          src={yogaImage}
          alt="Yoga"
          style={styles.yogaImage}
          onLoad={() => console.log('Image loaded successfully')}
          onError={() => console.error('Error loading image')}
        />
        <img
          src={yogaimage2}
          alt="Yoga"
          style={styles.yogaImage}
          onLoad={() => console.log('Image loaded successfully')}
          onError={() => console.error('Error loading image')}
        />
    </div>
        {/* Modal */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Admission Form Modal"
        >
          <div style={styles.modalContainer}>
            {/* Modal heading */}
            <h2 style={styles.modalHeading}>Admission Form</h2>

            
            

            {/* Form inside the modal */}
            <form onSubmit={handleSubmit} style={styles.modalForm}>
              <label style={styles.modalLabel}>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={styles.modalInput}
                />
              </label>
              <label style={styles.modalLabel}>
                Age:
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  style={styles.modalInput}
                />
              </label>
              <label style={styles.modalLabel}>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={styles.modalInput}
                />
              </label>
              
              <label style={styles.modalLabel}>
                Phone:
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={styles.modalInput}
                />
              </label>
            
              <label style={styles.modalLabel}>
                Fee:
                <input
                  type="500"
                  name="name"
                  value={500}
                  onChange={handleChange}
                  style={styles.modalInput}
                />
              </label>
              <label style={styles.modalLabel}>
                Select Batch:
                <select
                  name="selectedBatch"
                  value={formData.selectedBatch}
                  onChange={handleChange}
                  style={styles.modalInput}
                >
                  <option value="">Select Batch</option>
                  <option value="6-7AM">6-7AM</option>
                  <option value="7-8AM">7-8AM</option>
                  <option value="8-9AM">8-9AM</option>
                  <option value="5-6PM">5-6PM</option>
                </select>
                 
                {/* Display eligibility and success messages */}
                {eligibilityMessage && <p style={styles.modalErrorMessage}>{eligibilityMessage}</p>}
                
                
                {/* Submit button */}
                <button type="submit" style={styles.modalSubmitButton}>
                  Submit
                </button>
              </label>
            </form>
          </div>
        </Modal>

        {/* Yoga benefits section */}
        <div style={styles.benefitSection}>
          <h2 style={styles.benefitTitle}>Yoga Benefits</h2>
          <p style={styles.benefitText}>
            Experience improved flexibility, balance, and mental well-being through our yoga classes.
          </p>
        </div>
        <footer />
      </div>

      {/* Footer */}
      
    </div>
  );
};

export default AdmissionForm;
