// import { useState } from 'react';
// import axios from 'axios';
// import "./TapeForm.css"

// const TapeForm = () => {
//   const [numTapes, setNumTapes] = useState('');
//   const [totalSections, setTotalSections] = useState('');
//   const [color, setColor] = useState('');
//   const [createdDate, setCreatedDate] = useState('');
//   const [isTopClosed, setIsTopClosed] = useState(false);
//   const [tapeSize, setTapeSize] = useState('');
//   const [shawlWidth, setShawlWidth] = useState('');
//   const [isEqualSection, setIsEqualSection] = useState(false);
//   const [image, setImage] = useState(null);
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const formData = new FormData();
//     formData.append('numTapes', numTapes);
//     formData.append('totalSections', totalSections);
//     formData.append('color', color);
//     formData.append('createdDate', createdDate);
//     formData.append('isTopClosed', isTopClosed);
//     formData.append('tapeSize', tapeSize);
//     formData.append('shawlWidth', shawlWidth);
//     formData.append('isEqualSection', isEqualSection);
//     if (image) formData.append('image', image);

//     try {
//       const response = await axios.post('http://localhost:5000/api/tapes', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
      
//       setMessage('Tape created successfully');
//       // Reset form fields
//       setNumTapes('');
//       setTotalSections('');
//       setColor('');
//       setCreatedDate('');
//       setIsTopClosed(false);
//       setTapeSize('');
//       setShawlWidth('');
//       setIsEqualSection(false);
//       setImage(null);
//     } catch (error) {
//       setMessage('Failed to create tape');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="tape-form">
//       <div>
//         <label>Number of Tapes:</label>
//         <input type="number" value={numTapes} onChange={(e) => setNumTapes(e.target.value)} />
//       </div>
//       <div>
//         <label>Total Sections:</label>
//         <input type="number" value={totalSections} onChange={(e) => setTotalSections(e.target.value)} />
//       </div>
//       <div>
//         <label>Color (Name/Code):</label>
//         <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
//       </div>
//       <div>
//         <label>Created Date:</label>
//         <input type="date" value={createdDate} onChange={(e) => setCreatedDate(e.target.value)} />
//       </div>
//       <div>
//         <label>Is Top Closed:</label>
//         <input type="checkbox" checked={isTopClosed} onChange={(e) => setIsTopClosed(e.target.checked)} />
//       </div>
//       <div>
//         <label>Size of Tape:</label>
//         <input type="text" value={tapeSize} onChange={(e) => setTapeSize(e.target.value)} />
//       </div>
//       <div>
//         <label>Width of Shawl:</label>
//         <input type="number" value={shawlWidth} onChange={(e) => setShawlWidth(e.target.value)} />
//       </div>
//       <div>
//         <label>Is Equal Section:</label>
//         <input type="checkbox" checked={isEqualSection} onChange={(e) => setIsEqualSection(e.target.checked)} />
//       </div>
//       <div>
//         <label>Image Upload:</label>
//         <input type="file" onChange={(e) => setImage(e.target.files[0])} />
//       </div>
//       <button type="submit">Submit</button>
//       <p>{message}</p>
//     </form>
//   );
// };

// export default TapeForm;






// import { useState } from 'react';
// import axios from 'axios';
// import './TapeForm.css';

// const TapeForm = () => {
//   const [numTapes, setNumTapes] = useState('');
//   const [totalSections, setTotalSections] = useState('');
//   const [color, setColor] = useState('');
//   const [createdDate, setCreatedDate] = useState('');
//   const [isTopClosed, setIsTopClosed] = useState(false);
//   const [tapeSize, setTapeSize] = useState('');
//   const [shawlWidth, setShawlWidth] = useState('');
//   const [isEqualSection, setIsEqualSection] = useState(false);
//   const [image, setImage] = useState(null);
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const formData = new FormData();
//     formData.append('numTapes', numTapes);
//     formData.append('totalSections', totalSections);
//     formData.append('color', color);
//     formData.append('createdDate', createdDate);
//     formData.append('isTopClosed', isTopClosed);
//     formData.append('tapeSize', tapeSize);
//     formData.append('shawlWidth', shawlWidth);
//     formData.append('isEqualSection', isEqualSection);
//     if (image) formData.append('image', image);

//     try {
//       const response = await axios.post('http://localhost:5000/api/tapes', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
      
//       setMessage('Tape created successfully');
//       // Reset form fields
//       setNumTapes('');
//       setTotalSections('');
//       setColor('');
//       setCreatedDate('');
//       setIsTopClosed(false);
//       setTapeSize('');
//       setShawlWidth('');
//       setIsEqualSection(false);
//       setImage(null);
//     } catch (error) {
//       setMessage('Failed to create tape');
//     }
//   };

//   return (
//     <div className="mwb-form-main-wrapper">
//       <div className="mwb-form-main-container">
//         <h1>Create Tape</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="mwb-form-group">
//             <input 
//               type="number" 
//               className="mwb-form-control" 
//               value={numTapes} 
//               onChange={(e) => setNumTapes(e.target.value)} 
//               id="numTapes"
//             />
//             <label htmlFor="numTapes" className="mwb-form-text-label">Number of Tapes*</label>
//           </div>
//           <div className="mwb-form-group">
//             <input 
//               type="number" 
//               className="mwb-form-control" 
//               value={totalSections} 
//               onChange={(e) => setTotalSections(e.target.value)} 
//               id="totalSections"
//             />
//             <label htmlFor="totalSections" className="mwb-form-text-label">Total Sections*</label>
//           </div>
//           <div className="mwb-form-group">
//             <input 
//               type="text" 
//               className="mwb-form-control" 
//               value={color} 
//               onChange={(e) => setColor(e.target.value)} 
//               id="color"
//             />
//             <label htmlFor="color" className="mwb-form-text-label">Color (Name/Code)*</label>
//           </div>
//           <div className="mwb-form-group">
//             <input 
//               type="date" 
//               className="mwb-form-control" 
//               value={createdDate} 
//               onChange={(e) => setCreatedDate(e.target.value)} 
//               id="createdDate"
//             />
//             {/* <label htmlFor="createdDate" className="mwb-form-text-label">Created Date*</label> */}
//           </div>
          
//           <div className="mwb-form-group">
//             <input 
//               type="text" 
//               className="mwb-form-control" 
//               value={tapeSize} 
//               onChange={(e) => setTapeSize(e.target.value)} 
//               id="tapeSize"
//             />
//             <label htmlFor="tapeSize" className="mwb-form-text-label">Size of Tape*</label>
//           </div>
//           <div className="mwb-form-group">
//             <input 
//               type="number" 
//               className="mwb-form-control" 
//               value={shawlWidth} 
//               onChange={(e) => setShawlWidth(e.target.value)} 
//               id="shawlWidth"
//             />
//             <label htmlFor="shawlWidth" className="mwb-form-text-label">Width of Shawl*</label>
//           </div>
          
//           <div className="mwb-form-group">
//             <input 
//               type="file" 
//               className="mwb-form-control" 
//               onChange={(e) => setImage(e.target.files[0])} 
//               id="imageUpload"
//             />
//             {/* <label htmlFor="imageUpload" className="mwb-form-text-label">Image Upload</label> */}
//           </div>
//           <div className="mwb-form-group">
//             <div className="mwb-form-radio">
//               <label htmlFor="isTopClosed">Is Top Closed</label>
//               <input 
//                 type="checkbox" 
//                 checked={isTopClosed} 
//                 onChange={(e) => setIsTopClosed(e.target.checked)} 
//                 id="isTopClosed"
//               />
//             </div>
//           </div>
//           <div className="mwb-form-group">
//             <div className="mwb-form-radio">
//               <label htmlFor="isEqualSection">Is Equal Section</label>
//               <input 
//                 type="checkbox" 
//                 checked={isEqualSection} 
//                 onChange={(e) => setIsEqualSection(e.target.checked)} 
//                 id="isEqualSection"
//               />
//             </div>
//           </div>
//           <div className="mwb-form-group">
//             <input type="submit" className="mwb-form-submit-btn" value="Submit" />
//           </div>
//           {message && <div className="mwb-form-error">{message}</div>}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default TapeForm;
import { useState } from 'react';
import axios from 'axios';
import './TapeForm.css';

const TapeForm = () => {
  const [numTapes, setNumTapes] = useState('');
  const [totalSections, setTotalSections] = useState('');
  const [color, setColor] = useState('');
  const [createdDate, setCreatedDate] = useState('');
  const [isTopClosed, setIsTopClosed] = useState(false);
  const [tapeSize, setTapeSize] = useState('');
  const [shawlWidth, setShawlWidth] = useState('');
  const [isEqualSection, setIsEqualSection] = useState(false);
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('numTapes', numTapes);
    formData.append('totalSections', totalSections);
    formData.append('color', color);
    formData.append('createdDate', createdDate);
    formData.append('isTopClosed', isTopClosed);
    formData.append('tapeSize', tapeSize);
    formData.append('shawlWidth', shawlWidth);
    formData.append('isEqualSection', isEqualSection);
    if (image) formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:5000/api/tapes', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      setMessage('Tape created successfully');
      // Reset form fields
      setNumTapes('');
      setTotalSections('');
      setColor('');
      setCreatedDate('');
      setIsTopClosed(false);
      setTapeSize('');
      setShawlWidth('');
      setIsEqualSection(false);
      setImage(null);
    } catch (error) {
      setMessage('Failed to create tape');
    }
  };

  return (
    <div className="mwb-form-main-wrapper">
      <div className="mwb-form-main-container">
        <h1>Create Tape</h1>
        <form onSubmit={handleSubmit}>
          <div className="mwb-form-group">
            <input 
              type="number" 
              className="mwb-form-control" 
              value={numTapes} 
              onChange={(e) => setNumTapes(e.target.value)} 
              id="numTapes"
            />
            <label htmlFor="numTapes" className="mwb-form-text-label">Number of Tapes*</label>
          </div>
          <div className="mwb-form-group">
            <input 
              type="number" 
              className="mwb-form-control" 
              value={totalSections} 
              onChange={(e) => setTotalSections(e.target.value)} 
              id="totalSections"
            />
            <label htmlFor="totalSections" className="mwb-form-text-label">Total Sections*</label>
          </div>
          <div className="mwb-form-group">
            <input 
              type="text" 
              className="mwb-form-control" 
              value={color} 
              onChange={(e) => setColor(e.target.value)} 
              id="color"
            />
            <label htmlFor="color" className="mwb-form-text-label">Color (Name/Code)*</label>
          </div>
          <div className="mwb-form-group">
            <input 
              type="date" 
              className="mwb-form-control" 
              value={createdDate} 
              onChange={(e) => setCreatedDate(e.target.value)} 
              id="createdDate"
            />
            {/* <label htmlFor="createdDate" className="mwb-form-text-label">Created Date*</label> */}
          </div>
          
          <div className="mwb-form-group">
            <input 
              type="text" 
              className="mwb-form-control" 
              value={tapeSize} 
              onChange={(e) => setTapeSize(e.target.value)} 
              id="tapeSize"
            />
            <label htmlFor="tapeSize" className="mwb-form-text-label">Size of Tape*</label>
          </div>
          <div className="mwb-form-group">
            <input 
              type="number" 
              className="mwb-form-control" 
              value={shawlWidth} 
              onChange={(e) => setShawlWidth(e.target.value)} 
              id="shawlWidth"
            />
            <label htmlFor="shawlWidth" className="mwb-form-text-label">Width of Shawl*</label>
          </div>
          
          <div className="mwb-form-group">
            <input 
              type="file" 
              className="mwb-form-control" 
              onChange={(e) => setImage(e.target.files[0])} 
              id="imageUpload"
            />
            {/* <label htmlFor="imageUpload" className="mwb-form-text-label">Image Upload</label> */}
          </div>

          {/* Checkbox section moved to the end and displayed in a row */}
          <div className="mwb-form-group mwb-form-checkbox-group">
            <div className="mwb-form-radio">
              <input 
                type="checkbox" 
                checked={isTopClosed} 
                onChange={(e) => setIsTopClosed(e.target.checked)} 
                id="isTopClosed"
              />
              <label htmlFor="isTopClosed" className="mwb-checkbox-label">Is Top Closed</label>
            </div>
            <div className="mwb-form-radio">
              <input 
                type="checkbox" 
                checked={isEqualSection} 
                onChange={(e) => setIsEqualSection(e.target.checked)} 
                id="isEqualSection"
              />
              <label htmlFor="isEqualSection" className="mwb-checkbox-label">Is Equal Section</label>
            </div>
          </div>

          <div className="mwb-form-group">
            <input type="submit" className="mwb-form-submit-btn" value="Submit" />
          </div>
          {message && <div className="mwb-form-error">{message}</div>}
        </form>
      </div>
    </div>
  );
};

export default TapeForm;
