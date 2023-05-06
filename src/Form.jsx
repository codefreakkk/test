import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', image);

    try {
      await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Image uploaded successfully!');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <center>
    <form onSubmit={handleSubmit} style={{marginTop: "5vh"}}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <br />
      <label>
        Image:
        <input type="file" onChange={(event) => setImage(event.target.files[0])} />
      </label>
      <br />
      <button type="submit">Upload</button>
    </form>
    </center>
  );
};

export default Form;