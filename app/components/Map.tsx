'use client'

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression, LatLngTuple } from 'leaflet';

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useEffect } from "react";

interface MapProps {
    posix: LatLngExpression | LatLngTuple,
    zoom?: number,
}

const defaults = {
    zoom: 12,
}

const Map = (Map: MapProps) => {
    const { zoom = defaults.zoom, posix } = Map

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log(position.coords.latitude, position.coords.longitude);
                },
                (error) => console.error(error)
            );
        }
    }, []);
    

    return (
        <MapContainer
            center={posix}
            zoom={zoom}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={posix} draggable={false}>
                <Popup>Hey ! I study here</Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map