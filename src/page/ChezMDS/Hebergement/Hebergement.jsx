import "./Hebergement.scss";
import Accompa from "../../../components/accompagnement/Accompa";
import HomeCadreQuestion from '../../../components/inscription/HomeCadreQuestion';
import CarousselFormationDesktop from "../../../components/carrousels/CarrouselFormation/CarousselFormationDesktop";

const Hebergement = () => {
    return (
        <div className="hebergement">
            
            <div className="headerHebergement">
                <h1>Hébergement</h1>
                <h2>Être confortable pour une formation sereine</h2>
            </div>
                
                <div className="hebergementContainer">
                    <p>Chez MDS Formations, nous comprenons que la réussite de nos élèves dépend non seulement de la qualité de l'enseignement, mais aussi de leur environnement pendant la formation. C'est pourquoi nous avons mis en place un système d'hébergement pratique et confortable pour vous assurer une expérience de formation sereine.</p>
                    <p>Notre centre de formation est situé dans la charmante ville d'Oudon, un endroit paisible et propice à l'apprentissage. Bien que légèrement excentré des grandes villes comme Nantes et Angers, cette localisation offre l'avantage d'un environnement calme et préservé, idéal pour se concentrer sur l'apprentissage.</p>
                    <button>Réserver une chambre</button>

                    <ul>
                        <li>
                             <div className="listHebergement">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M9.96094 19.9219C15.4102 19.9219 19.9219 15.4004 19.9219 9.96094C19.9219 4.51172 15.4004 0 9.95117 0C4.51172 0 0 4.51172 0 9.96094C0 15.4004 4.52148 19.9219 9.96094 19.9219Z" fill="#7BC8CB"/>
                                    <path d="M8.86523 14.7363C8.5332 14.7363 8.25976 14.5996 8.00585 14.2578L5.55468 11.25C5.4082 11.0547 5.32031 10.8398 5.32031 10.6152C5.32031 10.1758 5.6621 9.81445 6.10156 9.81445C6.38476 9.81445 6.5996 9.90234 6.84374 10.2246L8.82616 12.7832L12.996 6.08398C13.1816 5.79102 13.4355 5.63477 13.6894 5.63477C14.1191 5.63477 14.5195 5.92773 14.5195 6.38672C14.5195 6.60156 14.3925 6.82617 14.2753 7.03125L9.68554 14.2578C9.48046 14.5801 9.19726 14.7363 8.86523 14.7363Z" fill="white"/>
                                </svg>
                                <p><strong>Des chambres confortables :</strong> nous avons aménagé des chambres spacieuses, lumineuses et confortables pour nos élèves. Chaque chambre est équipée d'une salle de bain privée avec des toilettes, garantissant votre intimité et votre confort.</p>
                             </div>
                        </li>
                        <li>
                             <div className="listHebergement">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M9.96094 19.9219C15.4102 19.9219 19.9219 15.4004 19.9219 9.96094C19.9219 4.51172 15.4004 0 9.95117 0C4.51172 0 0 4.51172 0 9.96094C0 15.4004 4.52148 19.9219 9.96094 19.9219Z" fill="#7BC8CB"/>
                                    <path d="M8.86523 14.7363C8.5332 14.7363 8.25976 14.5996 8.00585 14.2578L5.55468 11.25C5.4082 11.0547 5.32031 10.8398 5.32031 10.6152C5.32031 10.1758 5.6621 9.81445 6.10156 9.81445C6.38476 9.81445 6.5996 9.90234 6.84374 10.2246L8.82616 12.7832L12.996 6.08398C13.1816 5.79102 13.4355 5.63477 13.6894 5.63477C14.1191 5.63477 14.5195 5.92773 14.5195 6.38672C14.5195 6.60156 14.3925 6.82617 14.2753 7.03125L9.68554 14.2578C9.48046 14.5801 9.19726 14.7363 8.86523 14.7363Z" fill="white"/>
                                </svg>
                                <p><strong>Accès au réfectoire :</strong>  pour vos repas, notre centre de formation met à votre disposition un réfectoire entièrement équipé. Vous avez la possibilité de préparer vos repas et de partager des moments de convivialité avec vos camarades de formation. La cuisine est un espace ouvert à tous, favorisant les échanges et le partage.</p>
                             </div>
                        </li>
                        <li>
                             <div className="listHebergement">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M9.96094 19.9219C15.4102 19.9219 19.9219 15.4004 19.9219 9.96094C19.9219 4.51172 15.4004 0 9.95117 0C4.51172 0 0 4.51172 0 9.96094C0 15.4004 4.52148 19.9219 9.96094 19.9219Z" fill="#7BC8CB"/>
                                    <path d="M8.86523 14.7363C8.5332 14.7363 8.25976 14.5996 8.00585 14.2578L5.55468 11.25C5.4082 11.0547 5.32031 10.8398 5.32031 10.6152C5.32031 10.1758 5.6621 9.81445 6.10156 9.81445C6.38476 9.81445 6.5996 9.90234 6.84374 10.2246L8.82616 12.7832L12.996 6.08398C13.1816 5.79102 13.4355 5.63477 13.6894 5.63477C14.1191 5.63477 14.5195 5.92773 14.5195 6.38672C14.5195 6.60156 14.3925 6.82617 14.2753 7.03125L9.68554 14.2578C9.48046 14.5801 9.19726 14.7363 8.86523 14.7363Z" fill="white"/>
                                </svg>
                                
                                <p><strong>Espace extérieur : </strong> nous avons également aménagé un patio extérieur, un endroit idéal pour vous détendre après une journée de formation. <br />
                                Vous pouvez profiter de l'air frais, discuter avec vos collègues, ou simplement vous ressourcer en plein air.</p>
                                
                             </div>
                        </li>
                    </ul>

                     <div className="hebergementContainerPicture">
                        <div className="containerPicture">
                            <img src="https://mdsformations-website-u5520.vm.elestio.app/hebergement1.webp" alt="" />
                            <img src="https://mdsformations-website-u5520.vm.elestio.app/hebergement2.webp" alt="" />
                            <img src="https://mdsformations-website-u5520.vm.elestio.app/hebergement3.webp" alt="" />
                            <img src="https://mdsformations-website-u5520.vm.elestio.app/hebergement4.webp" alt="" />
                        </div>
                        <p>En offrant un hébergement sur place, nous visons à simplifier votre expérience de formation. 
                        Vous n'avez pas à vous soucier des trajets quotidiens depuis les grandes villes voisines. 
                        Au contraire, vous avez la possibilité de vous immerger pleinement dans votre formation et de profiter de l'ambiance paisible d'Oudon.</p>
                     </div>
                </div>
                <div className="hebergementEquipement">
                    <h3>Critère et équipement</h3>
                    <div className="equipementContainer">

                        <div className="equipementLigne">
                            <div className="equipement">
                                <img src="https://mdsformations-website-u5520.vm.elestio.app/douche.svg" alt="Logo d'une douche" />
                                <p>Salle d'eau et toilettes privées</p>
                            </div>
                            <div className="equipement">
                                <img src="https://mdsformations-website-u5520.vm.elestio.app/voiture.svg" alt="Logo d'une voiture" />
                                <p>Parking gratuit sur place</p>
                            </div>
                            <div className="equipement">
                                <img src="https://mdsformations-website-u5520.vm.elestio.app/poele.svg" alt="Logo d'une poele" />
                                <p>Espace cuisine équipée</p>
                            </div>
                            <div className="equipement">
                                <img src="https://mdsformations-website-u5520.vm.elestio.app/television.svg" alt="Logo d'une television" />
                                <p>Salle détente avec télévision</p>
                            </div>
                            <div className="equipement">
                                <img src="https://mdsformations-website-u5520.vm.elestio.app/toilette.svg" alt="Logo d'un toilette" />
                                <p>Toilette à mobilité réduite</p>
                            </div>
                        </div>

                        <div className="equipementLigne">
                            <div className="equipement">
                                <img src="https://mdsformations-website-u5520.vm.elestio.app/wifi.svg" alt="Logo d'une wifi" />
                                <p>Wifi accessible et gratuite</p>
                            </div>
                            <div className="equipement">
                                <img src="https://mdsformations-website-u5520.vm.elestio.app/lit.svg" alt="Logo d'un lit" />
                                <p>Literie deux place</p>
                            </div>
                            <div className="equipement">
                                <img src="https://mdsformations-website-u5520.vm.elestio.app/cle.svg" alt="Logo d'une clé" />
                                <p>Boite à clés extérieure</p>
                            </div>
                            <div className="equipement">
                                <img src="https://mdsformations-website-u5520.vm.elestio.app/arbre.svg" alt="Logo d'un arbre" />
                                <p>Accès extérieur avec patio </p>
                            </div>
                            <div className="equipement">
                                <img src="https://mdsformations-website-u5520.vm.elestio.app/essence.svg" alt="Logo d'une pompe à essence" />
                                <p>Espace voiture électrique</p>
                            </div> 
                        </div>

                    </div>

                    <p className="textEquipement">Draps et serviettes de toilette non fournis. Prévoir 2 taies d’oreiller 50x60, 1 draps<br/>
                         housse 140x190, 1 housse de couette 200x200, serviettes de toilettes.</p>
                        
                         <div className="interditContainer">
                            <div className="equipement">
                                <img src="https://mdsformations-website-u5520.vm.elestio.app/nonFumeur.svg" alt="Logo d'une interdiction de fumer" />
                                <p>Chambre non fumeur</p>
                            </div>
                            <div className="equipement">
                                <img src="https://mdsformations-website-u5520.vm.elestio.app/nonFete.svg" alt="Logo d'une interdiction de faire la fête" />
                                <p>Pas de fête ni de soirée</p>
                            </div>
                            <div className="equipement">
                                <img src="https://mdsformations-website-u5520.vm.elestio.app/nonFete.svg" alt="Logo d'une interdiction d'animaux en forme de patte de chien" />
                                <p>Les animaux de compagnies ne sont pas acceptés</p>
                            </div>
                         </div>
                    <h3>Tarif et paiement</h3>

                    <p className="textEquipement">Paiements acceptés : chèque ou virement bancaire.<br/> 
                    Réservation de la chambre à la réception du paiement.</p>
                        
                        <div className="hebergementPrix">
                            <div className="prix">
                                <div className="prixChiffre">
                                    <p>35</p>
                                </div>
                                <div className="prixSymbole">
                                    <p className="euro">€</p>
                                    <p className="slash">/</p>
                                </div>
                                <div className="prixText">
                                    <p>par</p>
                                    <p>nuit</p>
                                </div>
                            </div>
                            <p className="textEleve">pour tous nos élèves</p>
                        </div>

                </div>
                <Accompa />

                <div className="possib">
                    <h3>D'autres possibilités d'hébergement</h3>
                    <p>La promotion des entreprises locales revêt une grande importance pour nous. C'est pourquoi nous mettons à votre disposition ci-dessous une liste d'adresses et de contacts d'hébergements à Oudon, ainsi que dans les villes avoisinantes. Notre engagement envers les entreprises de notre région se reflète dans cette initiative visant à soutenir notre communauté locale.</p>

                    <div className="giteContainer">
                        <div className="gitePhoto">
                        <img src="https://mdsformations-website-u5520.vm.elestio.app/gite.png" alt="image d'une chambre d'un gîte" />
                        </div>
                        <div className="giteText">
                            <h3>Gîte "OhLaVache"</h3>
                                <p><strong>Champtoceaux, Pays de la Loire, France</strong></p>
                                <p>2 chambre et 1 couchage</p>
                                <p><strong>80 € / nuit</strong></p>
                                <p>Contact < br/>
                                Marie FILIPPI 06 62 12 90 13</p>
                            <button>Site web</button>
                        </div>
                    </div>
                </div>
                <div className="cadreQuestion">
                <HomeCadreQuestion />
                </div>
                <div className="home2">
            <h3>Obtenez des <span>diplômes reconnus</span> : Des formations de qualités à votre portée !</h3>
            <CarousselFormationDesktop filterValues={['certification']} />
            <button className="button_webinaire">Toutes nos formations certifiantes</button>
            </div>
               
        </div>
    );
};

export default Hebergement;