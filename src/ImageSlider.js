import React, { useState, useEffect  } from 'react';

const ImageSlider = ({ images }) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToNextImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const goToPrevImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };

    useEffect(() => {
      // Automatically move to the next image every 2 seconds
      const intervalId = setInterval(goToNextImage, 2000);
  
      // Clear the interval when the component unmounts
      return () => clearInterval(intervalId);
    }, [currentImageIndex]); // Run the effect whenever currentImageIndex changes
  
  
    return (
        <div>
            <h3><u> 6. Image slider: </u></h3>

            <div className="slider">
                <div>
                    <div className='right-arrow' onClick={goToPrevImage}>❱</div>
                    <div className='left-arrow' onClick={goToNextImage}>❰</div>
                </div> 
                <div>
                    <img
                    src={images[currentImageIndex]}
                    alt={`Slide ${currentImageIndex + 1}`}
                    className='slide'
                    />
                </div>
            </div>

            <hr/>
            
        </div>
        
    );
  };

export default ImageSlider;
