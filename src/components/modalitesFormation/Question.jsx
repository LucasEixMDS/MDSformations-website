import "./question.scss";

const Question = () => {
    return (
        <div className="question_webinaire">
            <div className="question_webinaire_div">
            <div className="modal_icon">
                <p>👩‍💻</p>
                </div>
                <h3>Vous avez des questions ? </h3>
                <h3>Vous souhaitez découvrir une formation en détails ? </h3>
                <button className="button_webinaire">Participer au Webinaire</button>
                <button className="button_savoir">En savoir +</button>
            
            </div>
        </div>
    );
};

export default Question;