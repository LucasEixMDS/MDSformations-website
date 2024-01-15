import './homegooglemap.scss';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MyMapComponent = () => {
    const mapStyles = {
        height: "300px",
        width: "95%",
        border: "10px solid white",  // Exemple de style ajouté directement
        borderRadius: "21px",
        boxShadow: "0px 4px 9px 0px rgba(0, 0, 0, 0.25)"
    };

    const defaultCenter = {
        lat: 47.354387038951515, // Mettez vos coordonnées ici
        lng:  -1.2528211409017742,
    }

    const handleMapLoad = map => {
        map.addListener("click", e => {
            e.preventDefault();
        });
    }

    return (
        <LoadScript googleMapsApiKey="AIzaSyBXAQzp9nfh7TpVr9fiqRFSxQdw8AEyvtE">
            <div className="map-container">
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={15}
                    center={defaultCenter}
                    onLoad={handleMapLoad}
                >
                    <Marker position={defaultCenter} />
                </GoogleMap>
            </div>
        </LoadScript>
    );
}
        

export default MyMapComponent;
