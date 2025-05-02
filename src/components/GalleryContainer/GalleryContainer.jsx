import css from './GalleryContainer.module.css';

const GalleryContainer = () => {
    return (
        <div className={css.container}>
            <h3 className={css.h3}>Мои работы</h3>
            <div className={css.container_photo}>
                <img className={css.img} srs='/doll_1.jpg' alt='Опис' />
                <img className={css.img} srs='/doll_2.jpg' alt='Опис' />
                <img className={css.img} srs='/doll_3.jpg' alt='Опис' />
                <img className={css.img} srs='/doll_4.jpg' alt='Опис' />
                <img className={css.img} srs='/doll_5.jpg' alt='Опис' />
                <img className={css.img} srs='/doll_6.jpg' alt='Опис' />
            </div>
        </div>
    )
};

export default GalleryContainer;