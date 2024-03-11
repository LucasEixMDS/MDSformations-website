import './homeCadreTestformation.scss';
import { Link } from 'react-router-dom';

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
            <Link to="/Inscription" ><button className='button-homecadreMobile'>On peut vous conseiller !</button></Link>
            <Link to="/Inscription" ><button className='button-homecadreDesktop'>On peut vous conseiller !</button></Link>
            <p>c'est < br /> gratuit</p>
            </div>
        </div>
    );
};

export default HomeCadreTestformation;