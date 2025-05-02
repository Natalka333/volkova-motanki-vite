import { useNavigate } from "react-router-dom";
import css from './HomeContainer.module.css';

const HomeContainer = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/about');
    }

    return (
        <div className={css.home}>
            <img
                className={css.home_photo}
                src="/photo.Nat.jpg" // Подставь путь к фото (можно в public/)
                alt="Volcova Nataly"
            />
            <h1 className={css.home_name}>Volcova Nataly</h1>
            <p className={css.home_tagline}>Мастер кукол ручной работы</p>
            <button onClick={handleNavigate} className={css.btn_home}>Next</button>
        </div>
    )
}

export default HomeContainer;