import React, { useEffect, useState } from 'react';



const NSFW = () => {
  const [classificationResult, setClassificationResult] = useState(null);
  var answer ;
  const classifyImage = async (imageUrl) => {
    try {
      const data = JSON.stringify({
        url: imageUrl,
      });
  
  
      const xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
  
      xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
          answer = this.responseText;
          console.log(this.responseText);
          // Handle the NSFW classification result here
          // You can update the component state or take any other action based on the result
        }
      });
  
      xhr.open('POST', 'https://discord.com/channels/1177492390949441607/1184864201215316109/1185522595903311902');
      xhr.setRequestHeader('content-type', 'application/json');
      xhr.setRequestHeader('X-RapidAPI-Key', '5e00906437msh0bfd27ae14a8d01p1ab669jsnfb05e107a87d');
      xhr.setRequestHeader('X-RapidAPI-Host', 'nsfw-images-detection-and-classification.p.rapidapi.com');
  
      xhr.send(data);
    } catch (error) {
      console.error('Error classifying image:', error);
      return null; // Return null in case of an error
    }
  };

  useEffect(() => {
    // Test image classification from URL
    const imageUrl = 'https://media.istockphoto.com/id/185305538/photo/killing-scene.jpg?s=1024x1024&w=is&k=20&c=FBqywOpGHibrTNZ6NbRgd_6RRn5dQfY4MXjamCfCEg4=';

    const fetchData = async () => {
      await classifyImage(imageUrl);
      // Set the classification result if needed
    //   setClassificationResult(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>NSFW Image Classifier</h1>
      {/* Display the classification result */}
      <pre>{JSON.stringify(classificationResult, answer, 2)}</pre>
      {answer}
      {/* Uncomment the following input if you want to test image classification from a file */}
      {/* <input type="file" id="fileInput" /> */}
    </div>
  );
};

export default NSFW;
