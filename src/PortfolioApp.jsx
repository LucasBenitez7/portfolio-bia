import './index.css';

export function PortfolioApp() {
	// Lista de rutas de imágenes
	const images = [
		"/src/assets/images/image(1).jpg",
		"/src/assets/images/image(2).jpg",
		"/src/assets/images/image(3).jpg",
		"/src/assets/images/image(4).jpg",
		"/src/assets/images/image(5).jpg",
		"/src/assets/images/image(6).jpg",
		"/src/assets/images/image(7).jpg",
    "/src/assets/images/image(8).jpg",
    "/src/assets/images/image(9).jpg",
    "/src/assets/images/image(10).jpg",

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
