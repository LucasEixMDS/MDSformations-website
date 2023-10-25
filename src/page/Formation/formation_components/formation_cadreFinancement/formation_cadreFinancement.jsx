import './formation_cadreFinancement.scss';

const formation_cadreFinancement = () => {
    return (
        <div className="financement_cadre" >
            <div className="financement_cadre_modal">
                <div className="icon">
                    <p>🤔</p>
                </div>
            </div>
            <h3>Besoin d’aide pour comprendre les financements ?</h3>
            <div className="financement_cadre_button">
            <button>nous contacter</button>
            <button className='buttonSavoir'>En savoir +</button>
            </div>
        </div>
    );
};

export default formation_cadreFinancement;