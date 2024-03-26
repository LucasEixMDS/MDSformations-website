import formationData from "../../json/formation.json";
import { Link } from "react-router-dom";
import "./formation.scss";
import "../Error404/Error404.scss";
import FormationHeader from './formation_components/formation_header/formation_header';
import Carrousel_inscription from "./formation_components/formation_caroussel/Caroussel_inscription";
import FormationDescription from "./formation_components/formation_description_metier/FormationDescription";
import Formation_metier from "./formation_components/formation_description_metier/Formation_metier";
import HomeCadreQuestion from "../../components/inscription/HomeCadreQuestion";
import Caroussel_pointfort from "./formation_components/formation_caroussel/CarousselPointFort";
import pouceHaut from "../../assets/pouceHaut.svg";
import Formation_financement from "./formation_components/formation_financement/Formation_financement";
import Formation_cadre from "./formation_components/formation_cadreFinancement/formation_cadreFinancement";
import Formation_plannings from "./formation_components/formation_plannings/Formation_plannings";
import Components_plateforme from "./formation_components/formation_caroussel/Components_plateforme";
import HomeCadreTestformation from "components/inscription/HomeCadreTestformation";
import Formation_metierVise from "./formation_components/formation_metierVise/formation_metierVise";
import AccordionWrapper from "./formation_components/formation_accordion/AccordionWrapper";
import Formation_certification from "./formation_components/formation_certification/Formation_certification"
import Formation_modalite from "./formation_components/formation_modalite/Formation_modalite";
import CarousselFormationDesktop from "../../components/carrousels/CarrouselFormation/CarousselFormationDesktop"
import Caroussel_formateur from "./formation_components/formation_caroussel/Caroussel_formateur";
import Formation_solutionDistance from "./formation_components/formation_solutionDistance/Formation_solutionDistance";
import Formation_temoin from "./formation_components/formation_temoin/Formation_temoin";
import Fichette from "./formation_components/formation_fichette/BouttonFichetteMobile";
import Formation_financementDesktop from "./formation_components/formation_financement/Formation_financementDesktop";
import FichetteDesktop from "./formation_components/formation_fichette/FichetteDesktop";
import FormationPlateforme from "./formation_components/formation_plateformeDesktop/FormationPlateforme";
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SeoBreadcrumb from "SEOBreadcrumb";

function FormationPage() {
  const { formationLink } = useParams();
  const navigate = useNavigate();
  const formation = formationData.find(f => f.formationLink.endsWith(formationLink));



  useEffect(() => {
    if (!formation) {
      navigate('/404'); // Assurez-vous que cette route existe dans votre système de routage
    }
  }, [formationLink, navigate, formation]);

  if (!formation) {
    // Ou retournez null, un spinner, ou tout autre élément en attendant la redirection
    return null; 
  }
  const colorStyle = formation ? { color: formation.colorFormation } : {};
  const backgroundStyle = formation ? { background: formation.colorFormation } : {};
  const showPlannings = formation ? formation.hasPlannings : false;

  // Utilisez "formation" pour accéder aux détails de la formation
  return (
    <div className="page_formation">  
      <SeoBreadcrumb 
  pageType="formation" 
  pageDetails={{ name: formation.title, formationLink: formation.formationLink }}
/>
      <FormationHeader formation={formation} />
      <Fichette formation={formation}/>
      <FichetteDesktop formation={formation} />
      <div className="formation_container">
      <FormationDescription formation={formation}/>
      <Carrousel_inscription formation={formation}/>
      </div>
      <div className="formation_metier">
      <Formation_metier formation={formation} svgColor={formation.colorFormation} /> 
      </div>
      <HomeCadreQuestion />
      <div className="formation_container">
        <div className="formation_pointfort">
        <h3 style={colorStyle}>Nos points forts</h3>
        <div className="modal_emoji">
        <img src={pouceHaut} alt="emoji d'un pouce vers le haut avec le point fermé" />
        </div>
        </div>
        <Caroussel_pointfort formation={formation}/>
      </div>
      <Formation_financement formation={formation} />
      <Formation_financementDesktop formation={formation}/>
      <Formation_cadre />
      <AccordionWrapper formation={formation} />
      {showPlannings && <Formation_plannings formation={formation} />}
      <Components_plateforme formation={formation}/>
      <FormationPlateforme formation={formation}/>
      <HomeCadreTestformation />
      <Formation_metierVise formation={formation} />
      <Formation_modalite formation={formation} /> 
      <Formation_certification formation={formation}/>
      
      <div className="home2">
            <h3>Obtenez des <span style={colorStyle}>diplômes reconnus</span> : Des formations de qualités à votre portée !</h3>
            <CarousselFormationDesktop filterValues={['certification']} />
            <Link to={"/toutes-nos-formations"}><button className="button_webinaire"style={backgroundStyle} >Toutes nos formations certifiantes</button> </Link> 
            </div>
      <div className="carousselFormateur">
      <h4>Rencontrez nos <span style={colorStyle}>formateur(ice)s expérimenté(e)s</span> qui vous guideront dans votre apprentissage</h4>
      <Caroussel_formateur formation={formation} filterValues={['reflexologie']}/>
      </div>
      <Formation_solutionDistance formation={formation} />
      <Formation_temoin formation={formation} /> 
    </div>
  );
          }

export default FormationPage;

