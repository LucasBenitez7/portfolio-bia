import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa"; //
// Importamos los íconos de FontAwesome
import "./index.css";
import { useState } from "react";

export function PortfolioApp() {
	const [loaded, setLoaded] = useState(false);

	const handleImageLoad = () => {
		setLoaded(true); // Se activa cuando la imagen se ha cargado
	};
	// Lista de rutas de imágenes
	const images = [
		"/assets/images/image(1).jpg",
		"/assets/images/image(2).jpg",
		"/assets/images/image(3).jpg",
		"/assets/images/image(4).jpg",
		"/assets/images/image(5).jpg",
		"/assets/images/image(6).jpg",
		"/assets/images/image(7).jpg",
		"/assets/images/image(8).jpg",
		"/assets/images/image(9).jpg",
		"/assets/images/image(10).jpg",
	];

	return (
		<main className="cont">
			<section className="gallery">
				{images.map((src, index) => (
					<div className={`image-container imgs-port${index}`} key={index}>
						<img
							src={src}
							alt={`Imagen destacada ${index + 1}`}
							loading="lazy"
							onLoad={handleImageLoad} // Activar la animación al cargar
							className={loaded ? "loaded" : ""}
						/>

						{index === 9 && (
							<div className="image-description">
								{/* WhatsApp icon with link */}
								<a
									href="https://wa.me/+34641048149"
									className="contact-link"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaWhatsapp /> +34 641 048 149
								</a>
								{/* Mail icon with link */}
								<a
									href="mailto:pacheco_bianca@icloud.com"
									className="contact-link"
									target="_blank"
									rel="noopener noreferrer"
								>
									<CiMail strokeWidth={1} /> pacheco_bianca@icloud.com
								</a>
							</div>
						)}
					</div>
				))}
			</section>
		</main>
	);
}
