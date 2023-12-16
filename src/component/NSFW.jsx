import React, { useEffect, useState } from 'react';
import axios from 'axios';

const classifyImage = async (imageUrl) => {
  try {
    const response = await axios.post('https://nsfw-detect3.p.rapidapi.com/nsfw-detect', {
      url: imageUrl,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': '5e00906437msh0bfd27ae14a8d01p1ab669jsnfb05e107a87d',
        'X-RapidAPI-Host': 'nsfw-detect3.p.rapidapi.com',
      },
    });

    console.log(response.data);
    // Handle the NSFW classification result here
    // You can update the component state or take any other action based on the result
    return response.data; // Return the response data
  } catch (error) {
    console.error('Error classifying image:', error);
    return null; // Return null in case of an error
  }
};

const NSFW = () => {
  const [classificationResult, setClassificationResult] = useState(null);

  useEffect(() => {
    // Test image classification from URL
    const imageUrl = 'https://cdn.discordapp.com/attachments/858938620425404426/1076560199218892902/waifu-animemoeus.jpg';

    const fetchData = async () => {
      const result = await classifyImage(imageUrl);
      setClassificationResult(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>NSFW Image Classifier</h1>
      {/* Display the classification result */}
      <pre>{JSON.stringify(classificationResult, null, 2)}</pre>
      {/* Uncomment the following input if you want to test image classification from a file */}
      {/* <input type="file" id="fileInput" /> */}
    </div>
  );
};

export default NSFW;
