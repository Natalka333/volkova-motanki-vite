import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ⬅️ добавляем
import css from './GalleryContainer.module.css';

const images = [
    { src: '/doll_1.jpg', alt: 'Описание 1' },
    { src: '/doll_2.jpg', alt: 'Описание 2' },
    { src: '/doll_3.jpg', alt: 'Описание 3' },
    { src: '/doll_4.jpg', alt: 'Описание 4' },
    { src: '/doll_5.jpg', alt: 'Описание 5' },
];

const GalleryContainer = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const navigate = useNavigate(); // ⬅️ используем хук

    const handleBack = () => {
        navigate(-1); // ⬅️ назад
    };

    const openModal = (index) => setSelectedIndex(index);
    const closeModal = () => setSelectedIndex(null);
    const prevImage = () => setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    const nextImage = () => setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));

    return (
        <div className={css.container}>
            <h3 className={css.h3}>Мои работы</h3>
            <div className={css.container_photo}>
                {images.map((img, index) => (
                    <div key={index} className={css.card}>
                        <img
                            className={css.img}
                            src={img.src}
                            alt={img.alt}
                            onClick={() => openModal(index)}
                        />
                        <p>Описание: {img.alt}</p>
                    </div>
                ))}
            </div>

            {/* Кнопка назад */}
            <button className={css.btn_back} onClick={handleBack}>Back</button>

            {selectedIndex !== null && (
                <div className={css.modal} onClick={closeModal}>
                    <div className={css.modal_content} onClick={(e) => e.stopPropagation()}>
                        <span className={css.close} onClick={closeModal}>&times;</span>
                        <button className={css.nav_btn} onClick={prevImage}>←</button>
                        <img
                            src={images[selectedIndex].src}
                            alt={images[selectedIndex].alt}
                        />
                        <button className={css.nav_btn} onClick={nextImage}>→</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleryContainer;
