import './homeCadreTestformation.scss';

const HomeCadreTestformation = () => {
    return (
        <div className="homecadre" >
            <div className="homecadre_modal">
                <div className="icon">
                    <p>🤔</p>
                </div>
            </div>
            <h3>Quelle formation est faites pour moi ?</h3>
            <div className="homecadre_button">
            <button>Faire le test</button>
            <p>c'est < br /> gratuit</p>
            </div>
        </div>
    );
};

export default HomeCadreTestformation;