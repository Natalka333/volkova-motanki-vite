import css from './GalleryContainer.module.css';

const GalleryContainer = () => {
    return (
        <div className={css.container}>
            <h3 className={css.h3}>Мои работы</h3>
            <div className={css.container_photo}>
                <img className={css.img} src='/doll_1.jpg' alt='Описание' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aliquam at cupiditate amet quos, veritatis consequatur quibusdam, error cum et dolores repellendus illo delectus similique mollitia laboriosam! Hic, sequi quos.</p>
                <img className={css.img} src='/doll_2.jpg' alt='Описание' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aliquam at cupiditate amet quos, veritatis consequatur quibusdam, error cum et dolores repellendus illo delectus similique mollitia laboriosam! Hic, sequi quos.</p>
                <img className={css.img} src='/doll_3.jpg' alt='Описание' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aliquam at cupiditate amet quos, veritatis consequatur quibusdam, error cum et dolores repellendus illo delectus similique mollitia laboriosam! Hic, sequi quos.</p>
                <img className={css.img} src='/doll_4.jpg' alt='Описание' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aliquam at cupiditate amet quos, veritatis consequatur quibusdam, error cum et dolores repellendus illo delectus similique mollitia laboriosam! Hic, sequi quos.</p>
                <img className={css.img} src='/doll_5.jpg' alt='Описание' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aliquam at cupiditate amet quos, veritatis consequatur quibusdam, error cum et dolores repellendus illo delectus similique mollitia laboriosam! Hic, sequi quos.</p>
                {/* <img className={css.img} src='/doll_6.jpg' alt='Описание' /> */}
            </div>
        </div>
    )
};

export default GalleryContainer;