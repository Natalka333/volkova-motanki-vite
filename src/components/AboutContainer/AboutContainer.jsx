import { useNavigate } from "react-router-dom";
import css from './AboutContainer.module.css'; 


const AboutContainer = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/gallery');
    }

    return (
        <div className={css.container}>
            <img src='/photo.natWork.jpg' alt="Майстриня за роботою" className={css.photo} />
            <div className={css.text}>
                {/* <h2>Про мотанки</h2> */}
                <p>
                    <strong>Мотанка</strong> — це традиційна українська лялька-оберіг, яка має багатовікову історію. Її створювали з натуральних
                    матеріалів: тканини, соломи, ниток. Назва «мотанка» походить від слова «мотати», адже в процесі виготовлення ляльки тканину не шили, а
                    саме мотали, обв’язували, закручували.
                </p>
                <p>
                    Ці ляльки не мали обличчя — замість нього робили хрест як символ захисту. Вважалося, що мотанка вбирає в себе позитивну енергію та
                    слугує оберегом для родини. Кожна деталь мала своє значення, а сам процес створення супроводжувався добрими думками й побажаннями.
                </p>
                <p>
                    Сьогодні мотанки — це не лише частина культурної спадщини, а й спосіб самовираження майстринь. Вони несуть у собі глибокий сенс, тепло
                    рук і душу українського народу.
                </p>
            </div>
            <button onClick={handleNavigate} className={css.btn_home}>Next</button>
        </div>
    );
};

export default AboutContainer;
