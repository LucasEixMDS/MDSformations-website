import reflect from "../../assets/reflect.svg"
import fete from "../../assets/fete.png"

const topPage = () => {
    return (
        <div >
            <div className="container">
                <div className="container_titre">
                    <h1>Formez-vous</h1> 
                    <h2>au métier du bien-être, de la beauté et de l'ethétique</h2>
                    </div>
                <div className="container_modal">
                    <div className="container_modal_left">
                        <div className="reflect">
                            <img src={reflect} alt="" />
                        </div>
                            <h2>Quelles formations est faites pour moi ? </h2>
                        <div className="button">
                            <button>Faire le test</button>
                        </div>
                    </div>
                    <div className="container_modal_right">
                        <div className="fete">
                            <img src={fete} alt="" />
                        </div>
                            <h2>Je prend mon avenir en mains !</h2>
                        <div className="button">
                            <button>S'inscrire</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default topPage;