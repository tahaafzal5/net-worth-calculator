import circleQuestionMark from '../Assets/Images/circle-question-mark.png';
import '../Styles/CircleQuestionMark.css';

function CircleQuestionMark({ hoverText }) {
    return (
        <div className="circle-question-mark">
            <img src={circleQuestionMark} width={15} alt='question mark' />
            <div className="hover-popup">
                {hoverText}
            </div>
        </div>
    );
}

export default CircleQuestionMark;
