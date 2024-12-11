import './index.css';

export function PortfolioApp() {
	// Lista de rutas de imágenes
	const images = [
		"/src/assets/images/image1.jpg",
		"/src/assets/images/image2.jpg",
		"/src/assets/images/image3.jpg",
		"/src/assets/images/image4.jpg",
		"/src/assets/images/image5.jpg",
		"/src/assets/images/image6.jpg",
		"/src/assets/images/image7.jpg",
	];

	return (
    <div className="gallery">
    {images.map((src, index) => (
      <div className="image-container" key={index}>
        <img src={src} alt={`Image ${index + 1}`} />
      </div>
    ))}
  </div>
	);
}
