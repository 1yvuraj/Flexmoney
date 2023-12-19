import React from 'react';
import AdmissionForm from '/Users/yuvrajaggarwal/Desktop/Task/yoga-admission-form/client/src/AdmissionForm.js'; // Assuming both files are in the same directory
import Navbar from '/Users/yuvrajaggarwal/Desktop/Task/yoga-admission-form/client/src/navbar.js'; 
import Footer from '/Users/yuvrajaggarwal/Desktop/Task/yoga-admission-form/client/src/footer.js';
function App() {
  return (
    <div className="App">
      <Navbar /> 
      <AdmissionForm />
      <br/>
      <br/>

      <Footer />
    </div>
  );
}

export default App;
