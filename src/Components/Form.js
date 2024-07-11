
// import React, { useState } from 'react';
// import './Form.css';

// const Form = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     hobbies: [],
//     bio: ''
//   });

//   const [hobby, setHobby] = useState('');
//   const [profilePicture, setProfilePicture] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleHobbyChange = (e) => {
//     setHobby(e.target.value);
//   };

//   const addHobby = () => {
//     if (hobby) {
//       setFormData((prevState) => ({
//         ...prevState,
//         hobbies: [...prevState.hobbies, hobby]
//       }));
//       setHobby('');
//     }
//   };

//   const handlePictureChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfilePicture(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="form-container">
//         <h2>Fill in your details</h2>
//         <form>
//           <div>
//             <label>First Name:</label>
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <label>Last Name:</label>
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <label>Profile Picture:</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handlePictureChange}
//             />
//           </div>
//           <div>
//             <label>Hobbies:</label>
//             <input
//               type="text"
//               value={hobby}
//               onChange={handleHobbyChange}
//             />
//             <button type="button" onClick={addHobby}>+</button>
//           </div>
//           <div className="hobby-list">
//             {formData.hobbies.map((hobby, index) => (
//               <div key={index} className="hobby-item">{hobby}</div>
//             ))}
//           </div>
//         </form>
//       </div>
//       <div className="biodata-container">
//         <h2>Biodata</h2>
//         {profilePicture && <img src={profilePicture} alt="Profile" className="profile-picture" />}
//         <p><strong>First Name:</strong> {formData.firstName}</p>
//         <p><strong>Last Name:</strong> {formData.lastName}</p>
//         <p><strong>Hobbies:</strong></p>
//         <ul className="hobby-list">
//           {formData.hobbies.map((hobby, index) => (
//             <li key={index}>{hobby}</li>
//           ))}
//         </ul>
//         <div>
//           <label>Bio:</label>
//           <textarea
//             name="bio"
//             value={formData.bio}
//             onChange={handleChange}
//             rows="4"
//           ></textarea>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Form;



//.....................................................................................
import React, { useState } from 'react';
import './Form.css';


function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    profileLink: '',
    hobbies: ['Drawing'],
    newHobby: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addHobby = (hobby) => {
    if (formData.hobbies.includes(hobby)) return;
    setFormData({
      ...formData,
      hobbies: [...formData.hobbies, hobby]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submit logic if needed
  };

  return (
    <div className="container">
      <form className="form-container" onSubmit={handleSubmit}>
        <div>
          <label>First Name :</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter First Name"
          />
        </div>
        <div>
          <label>Last Name :</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter Last Name"
          />
        </div>
        <div>
          <label>Profile Link :</label>
          <input
            type="text"
            name="profileLink"
            value={formData.profileLink}
            onChange={handleChange}
            placeholder="Enter Profile Picture Link"
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
        <div>
          <label>Add More Hobbies</label>
          <button type="button" onClick={() => addHobby('Singing')}>Singing +</button>
          <button type="button" onClick={() => addHobby('Reading')}>Reading +</button>
          <button type="button" onClick={() => addHobby('Playing')}>Playing +</button>
          <button type="button" onClick={() => addHobby('Gardening')}>Gardening +</button>
        </div>
      </form>
      <div className="profile-container">
        <h3>First Name: {formData.firstName}</h3>
        <h3>Last Name: {formData.lastName}</h3>
        <div>
          {formData.profileLink && <img src={formData.profileLink} alt="Profile" className="profile-pic" />}
        </div>
        <p>Passionate about coding with expertise in C programming, HTML, CSS, and JavaScript. Goal-driven individual aspiring to excel as a frontend developer.</p>
        <h4>My Hobbies</h4>
        <ul>
          {formData.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Form;
