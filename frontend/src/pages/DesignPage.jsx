import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DesignPage.css';

const DesignPage = () => {
  const [designs, setDesigns] = useState([]);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchDesigns = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/tapes'); // Your API endpoint
        setDesigns(response.data);
      } catch (error) {
        console.error('Error fetching designs', error);
      }
    };

    fetchDesigns();
  }, []);

  return (
    <>
      <h1>All Designs</h1>
      <div className="designs-container">
        {designs.map((design) => (
          <div key={design._id} className="design-card">
            <h2>{design.numTapes} Tapes</h2>
            <p>Total Sections: {design.totalSections}</p>
            <p>Color: {design.color}</p>
            <p>Tape Size: {design.tapeSize}</p>
            <p>Shawl Width: {design.shawlWidth}</p>
            <p>Created Date: {new Date(design.createdDate).toLocaleDateString()}</p>
            <p>{design.isTopClosed ? 'Top is closed' : 'Top is open'}</p>
            <p>{design.isEqualSection ? 'Sections are equal' : 'Sections are not equal'}</p>
            {design.image && <img src={`http://localhost:5000/${design.image}`} alt="Design" className="design-image" />}
          </div>
        ))}
      </div>
    </>
  );
};

export default DesignPage;
