import { useNavigate } from "react-router-dom";
import css from './HomeContainer.module.css';

const HomeContainer = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/about');
    }

    return (
        <div className={css.home}>
            <div className={css.gallery}>
                <img src="/doll_5.jpg" alt="Работа 1" />
                <img src="/doll_2.jpg" alt="Работа 2" />
                <img src="/doll_3.jpg" alt="Работа 3" />
            </div>

            <div className={css.home_content}>
                <h1 className={css.home_name}>Volcova Nataly</h1>
                <p className={css.home_tagline}>Лялькова майстриня</p>
            </div>

            <img
                className={css.home_photo}
                src="/nat.sit.jpg"
                alt="Volcova Nataly"
            />

            <button onClick={handleNavigate} className={css.btn_home}>Next</button>
        </div>
    );
}

export default HomeContainer;
