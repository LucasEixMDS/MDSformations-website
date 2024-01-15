import './homeCadreTestformation.scss';

const HomeCadreTestformation = () => {
    return (
        <div className="homecadre" >
            <div className="homecadreTop">
            <div className="homecadre_modal">
                <div className="icon">
                    <p><img src="https://mdsformations-website-u5520.vm.elestio.app/reflechir.svg" alt="icon apple d'une personne qui réflechis" /></p>
                </div>
            </div>
            <h3>Quelle formation est faites pour moi ?</h3>
            </div>
            <div className="homecadre_button">
            <button className='button-homecadreMobile'>Faire le test</button>
            <button className='button-homecadreDesktop'>Participer aux webinaires</button>
            <p>c'est < br /> gratuit</p>
            </div>
        </div>
    );
};

export default HomeCadreTestformation;