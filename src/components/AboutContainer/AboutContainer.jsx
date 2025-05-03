import { useNavigate } from "react-router-dom";
import css from './AboutContainer.module.css';

const AboutContainer = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/gallery');
    };

    const handleBack = () => {
        navigate(-1); // ← Возвращает на предыдущую страницу
    };

    return (
        <div className={css.container}>
            <div className={css.left}>
                <img
                    src='/photo.natWork.jpg'
                    alt="Майстриня за роботою"
                    className={css.photo}
                />
            </div>

            <div className={css.right}>
                <div className={css.text}>
                    <p><strong>Мотанка</strong> — це традиційна українська лялька-оберіг...</p>
                    <p>Ці ляльки не мали обличчя — замість нього робили хрест...</p>
                    <p>Сьогодні мотанка — це і культурна спадщина, і творчість.</p>
                </div>

                <div className={css.gallery}>
                    <img src="/doll_1.jpg" alt="Работа 1" />
                    <img src="/doll_2.jpg" alt="Работа 2" />
                    <img src="/doll_3.jpg" alt="Работа 3" />
                </div>

                <div className={css.buttons}>
                    <button onClick={handleBack} className={css.btn_back}>Back</button>
                    <button onClick={handleNext} className={css.btn_home}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default AboutContainer;
