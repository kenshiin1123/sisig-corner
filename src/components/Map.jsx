import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default icon issue with webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

export default function Map() {
  const defaultCenter = [8.1945863, 123.8591501];
  const googleMapsUrl =
    "https://www.google.com/maps/dir//5VV5%2BRMH+7-Eleven+Clarin+(4516),+Ozamiz+-+Oroquieta+National+Hwy,+Clarin,+Misamis+Occidental/@8.1944169,123.8587861,19z/data=!4m17!1m7!3m6!1s0x3255ab0036347f27:0x72d8f9ef3f23a25b!2s7-Eleven+Clarin+(4516)!8m2!3d8.1945863!4d123.8591501!16s%2Fg%2F11ltr_nlhc!4m8!1m0!1m5!1m1!1s0x3255ab0036347f27:0x72d8f9ef3f23a25b!2m2!1d123.8591558!2d8.1945862!3e2?entry=ttu&g_ep=EgoyMDI1MDcyMC4wIKXMDSoASAFQAw%3D%3D";

  return (
    <div className="w-full h-[24rem]">
      <MapContainer
        center={defaultCenter}
        zoom={16}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={defaultCenter}>
          <Popup>
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
              Sisig Corner
            </a>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
