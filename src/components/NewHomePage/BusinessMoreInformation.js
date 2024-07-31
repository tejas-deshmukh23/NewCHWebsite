// import React, { useState, useEffect, useRef } from "react";
// import "./BusinessMoreInformation.css";
// import { BsChevronLeft, BsChevronRight } from "react-icons/bs"; // Import icons from react-icons library
// import delhiimage from "./NewHomePageImages/delhiimage.png";
// import bangloreimage from "./NewHomePageImages/bangloreimage.png";
// import mumbaiimage from "./NewHomePageImages/mumbaiimage.png";
// import puneimage from "./NewHomePageImages/puneimage.jpg";
// import hyderabadimage from "./NewHomePageImages/Hyderabadimage.jpg";
// import kolkataimage from "./NewHomePageImages/kolkataimage.jpg";
// import noidaimage from "./NewHomePageImages/noidaimage.png";
// import chennaiimage from "./NewHomePageImages/chennaiimage.jpg";

// const BusinessMoreInformation = ({cityDetails}) => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isMobileView, setIsMobileView] = useState(false);
//   const intervalRef = useRef(null);
//   const [images, setImages] = useState([]);

// //   const images = [
// //     { id: 1, src: delhiimage, name: "Business loan in Delhi" },
// //     { id: 2, src: bangloreimage, name: "Business loan in Bangalore" },
// //     { id: 3, src: mumbaiimage, name: "Business loan in Mumbai" },
// //     { id: 4, src: puneimage, name: "Business loan in Pune" },
// //     { id: 5, src: hyderabadimage, name: "Business loan in Hyderabad" },
// //     { id: 6, src: kolkataimage, name: "Business loan in Kolkata" },
// //     { id: 7, src: noidaimage, name: "Business loan in Noida" },
// //     { id: 8, src: chennaiimage, name: "Business loan in Chennai" },
// //   ];

//   // Effect to update images when cityDetails changes
// //   useEffect(() => {
// //     if (cityDetails?.data?.top_city_list) {
// //       setImages(cityDetails.data.top_city_list.map(city => ({
// //         id: city.city_name, // Unique id for each city
// //         src: city.image_url, // Image URL from cityDetails
// //         name: `Personal loan in ${city.city_name}`, // City name for display
// //       })));
// //     }
// //   }, []);

//   useEffect(()=>{
//     console.log("City Details inside the moreInformation is :: ",cityDetails.top_city_list);
//     setImages(cityDetails.top_city_list.map(city=>({
//       id: city.city_name,
//       src: city.image_url,
//       name: `Business loan in ${city.city_name}`,
//     })))
//   },[])

//   // const [images, setImages] = useState([]);

//   // useEffect(()=>{
//   //   console.log("Inside the moreInformation : ",cityDetails.top_city_list);
//   //   setImages(cityDetails.top_city_list);
//   // },[])

//   // const [images, setImages] = useState([null]);

//   // setImages(cityDetails.top_city_list);

//   // setImages(cityDetails.city_)

//   // Function to detect if the viewport is in mobile mode
//   const checkMobileView = () => {
//     const isMobile = window.innerWidth <= 768; // Adjust based on your design needs
//     setIsMobileView(isMobile);
//   };

//   // Listen for window resize to update isMobileView state
//   useEffect(() => {
//     checkMobileView(); // Initial check
//     window.addEventListener("resize", checkMobileView); // Listen for resize events
//     return () => {
//       window.removeEventListener("resize", checkMobileView); // Clean up listener
//     };
//   }, []);

//   // Effect to handle auto-sliding in mobile view
//   useEffect(() => {
//     if (isMobileView) {
//       // Clear any existing interval when isMobileView changes
//       clearInterval(intervalRef.current);

//       // Set new interval for auto-sliding
//       intervalRef.current = setInterval(() => {
//         setCurrentSlide((prev) => {
//           const totalSlides = images.length;
//           if (prev + 1 >= totalSlides) {
//             return 0; // Loop back to the first slide
//           } else {
//             return prev + 1;
//           }
//         });
//       }, 3000); // Change slide every 3 seconds (adjust as needed)
//     } else {
//       // Clear interval when switching to desktop view
//       clearInterval(intervalRef.current);
//     }

//     return () => {
//       clearInterval(intervalRef.current); // Clean up interval on component unmount or when isMobileView changes
//     };
//   }, [isMobileView, images.length]);

//   const handleClickNext = () => {
//     setCurrentSlide((prev) => {
//       const totalSlides = images.length;
//       if (prev + (isMobileView ? 1 : 4) >= totalSlides) {
//         return 0; // Loop back to the first slide
//       } else {
//         return prev + (isMobileView ? 1 : 4);
//       }
//     });
//   };

//   const handleClickPrev = () => {
//     setCurrentSlide((prev) => {
//       const totalSlides = images.length;
//       if (prev - (isMobileView ? 1 : 4) < 0) {
//         // Calculate the previous slide index properly for desktop view
//         const slidesToShow = isMobileView ? 1 : 4;
//         return Math.floor(totalSlides / slidesToShow) * slidesToShow - slidesToShow;
//       } else {
//         return prev - (isMobileView ? 1 : 4);
//       }
//     });
//   };

//   // Function to dynamically set image styles based on view mode
//   const getImageStyle = () => {
//     if (isMobileView) {
//       return { width: "100%", height: "auto" }; // Adjust for mobile view
//     } else {
//       return { width: "250px", height: "180px" }; // Default style for desktop
//     }
//   };

//   // Function to set fixed height for images in mobile view
//   const getMobileImageStyle = () => {
//     return { width: "100%", height: "200px", objectFit: "cover" };
//   };

//   // CSS class for dynamic sliding animation
//   const slideContainerClass = isMobileView ? "slide-container-mobile" : "slide-container";

  

//   return (
//     <div className="moreinfocomp">
//       <h1>More information</h1>
//       <div className="image-slider">
//         {/* Arrow left, displayed only in desktop view */}
//         {!isMobileView && (
//           <div className="arrow arrow-left" onClick={handleClickPrev}>
//             <BsChevronLeft />
//           </div>
//         )}

//         {/* Images and arrows based on current view mode */}

//         {
//     (images != null)?(
//       <>
//         <div className={slideContainerClass}>
//           {images.slice(currentSlide, currentSlide + (isMobileView ? 1 : 4)).map((image) => (
//             <div className="image-container-moreinfo" key={image.id}>
//               <div className="image-wrapper">
//                 <img
//                   src={image.src}
//                   // alt={`Image ${image.id}`}
//                   className="slide-image"
//                   style={isMobileView ? getMobileImageStyle() : getImageStyle()} // Apply dynamic style based on view mode
//                 />
//                 <div className="image-name-container">
//                   <p className="image-name">{image.name}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </>
            
//     ):(<div>Loading...</div>)
//   }
        
        

//         {/* Arrow right, displayed only in desktop view */}
//         {!isMobileView && (
//           <div className="arrow arrow-right" onClick={handleClickNext}>
//             <BsChevronRight />
//           </div>
//         )}
//       </div>

//       {/* Pagination dots in a separate div */}
//       {isMobileView && (
//         <div className="pagination-dots">
//           {images.map((img, index) => (
//             <span
//               key={img.id}
//               className={`dot ${currentSlide === index ? "active" : ""}`}
//               onClick={() => setCurrentSlide(index)}
//             ></span>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default BusinessMoreInformation;

import React, { useState, useEffect, useRef } from "react";
import "./BusinessMoreInformation.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const BusinessMoreInformation = ({ cityDetails }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);
  const intervalRef = useRef(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (cityDetails?.top_city_list) {
      setImages(
        cityDetails.top_city_list.map((city) => ({
          id: city.city_name,
          src: city.image_url,
          name: `Business loan in ${city.city_name}`,
          link: `/businessloancity/${city.city_name.toLowerCase()}` // Example link
        }))
      );
    }
  }, [cityDetails]);

  const checkMobileView = () => {
    const isMobile = window.innerWidth <= 768;
    setIsMobileView(isMobile);
  };

  useEffect(() => {
    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => {
      window.removeEventListener("resize", checkMobileView);
    };
  }, []);

  useEffect(() => {
    if (isMobileView) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => {
          const totalSlides = images.length;
          return prev + 1 >= totalSlides ? 0 : prev + 1;
        });
      }, 3000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isMobileView, images.length]);

  const handleClickNext = () => {
    setCurrentSlide((prev) => {
      const totalSlides = images.length;
      return prev + (isMobileView ? 1 : 4) >= totalSlides
        ? 0
        : prev + (isMobileView ? 1 : 4);
    });
  };

  const handleClickPrev = () => {
    setCurrentSlide((prev) => {
      const totalSlides = images.length;
      return prev - (isMobileView ? 1 : 4) < 0
        ? Math.floor(totalSlides / (isMobileView ? 1 : 4)) * (isMobileView ? 1 : 4) - (isMobileView ? 1 : 4)
        : prev - (isMobileView ? 1 : 4);
    });
  };

  const getImageStyle = () => {
    return isMobileView ? { width: "100%", height: "auto" } : { width: "250px", height: "180px" };
  };

  const getMobileImageStyle = () => {
    return { width: "100%", height: "200px", objectFit: "cover" };
  };

  const slideContainerClass = isMobileView ? "slide-container-mobile" : "slide-container";

  return (
    <div className="moreinfocomp">
      <h1>More information</h1>
      <div className="image-slider">
        {!isMobileView && (
          <div className="arrow arrow-left" onClick={handleClickPrev}>
            <BsChevronLeft />
          </div>
        )}

        {images.length > 0 ? (
          <div className={slideContainerClass}>
            {images.slice(currentSlide, currentSlide + (isMobileView ? 1 : 4)).map((image) => (
              <div className="image-container-moreinfo" key={image.id}>
                <div className="image-wrapper">
                  <a href={image.link}> {/* Wrap image with Link */}
                    <img
                      src={image.src}
                      alt={`Image ${image.id}`}
                      className="slide-image"
                      style={isMobileView ? getMobileImageStyle() : getImageStyle()}
                    />
                    <div className="image-name-container">
                      <p className="image-name">{image.name}</p>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}

        {!isMobileView && (
          <div className="arrow arrow-right" onClick={handleClickNext}>
            <BsChevronRight />
          </div>
        )}
      </div>

      {isMobileView && (
        <div className="pagination-dots">
          {images.map((img, index) => (
            <span
              key={img.id}
              className={`dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
};

export default BusinessMoreInformation;

