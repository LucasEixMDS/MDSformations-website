import "./homeCadreQuestion.scss";
import { Link } from 'react-router-dom';

const Question = () => {
    return (
        <div className="question_webinaire">
            <div className="question_webinaire_div">
                <div className="question_webinaire_modal">
                    <div className="modal_icon">
                        <p><img src="https://mdsformations-website-u5520.vm.elestio.app/femmeTechnologie.svg" alt="icon apple d'une femme sur un pc" /></p>
                    </div>
                    <span className="h3">Vous avez des questions ? </span>
                </div>
                <span className="h3">Vous souhaitez découvrir une formation en détails ? </span>
                <Link to="https://forms.gle/9cC2eGyxh8XY51Sw5" > <button className="button_webinaire">Participer au Webinaire</button></Link>
            </div>
        </div>
    );
};

export default Question;