import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa"; //
// Importamos los íconos de FontAwesome
import "./index.css";

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
		<main className="cont">
			<section className="gallery">
				{images.map((src, index) => (
					<div className={`image-container imgs-port${index}`} key={index}>
						<img
							src={src}
							alt={`Imagen destacada ${index + 1} del portafolio`}
						/>

						{index === 9 && (
							<div className="image-description">
								{/* WhatsApp icon with link */}
								<a href="https://wa.me/34612345678" className="contact-link">
									<FaWhatsapp size={2} /> 641048149
								</a>
								<br />
								{/* Mail icon with link */}
								<a href="mailto:correo@ejemplo.com" className="contact-link">
									<CiMail size={28}  strokeWidth={1} /> pacheco_bianca@icloud.com
								</a>
							</div>
						)}
					</div>
				))}
			</section>
		</main>
	);
}
