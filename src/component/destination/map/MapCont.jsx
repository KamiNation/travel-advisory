import React, { useContext, useEffect, useRef, useState } from 'react'
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import './Map.css';
import { MapperContext } from './MapContext';
const KEY = import.meta.env.VITE_KEY

const map = () => {

    const { testMap } = useContext(MapperContext)


    const coord = testMap.map((items) => {
        return items.coordinates
    })

    const lat = coord.map((lat) => {
        return lat.latitude
    })

    const lon = coord.map((lon) => {
        return lon.longitude
    })

    const ourCoord = [...lat, ...lon]
    console.log(ourCoord);

    console.log(lat);
    console.log(lon);

    const mapContainer = useRef(null);
    const map = useRef(null);
    const nigeria = { lng: 8.6753, lat: 9.0820 };
    const [zoom] = useState(14);
    maptilersdk.config.apiKey = KEY;

    useEffect(() => {
        if (map.current) return; // stops map from intializing more than once

        map.current = new maptilersdk.Map({
            container: mapContainer.current,
            style: maptilersdk.MapStyle.STREETS,
            center: [nigeria.lng, nigeria.lat],
            zoom: zoom
        });

        new maptilersdk.Marker({ color: "#FF0000" })
            .setLngLat([3.4176, 6.9136])
            .addTo(map.current);

    }, [nigeria.lng, nigeria.lat, zoom]);


    return (
        // <div className="map-wrap">
        // </div>
        <>
            <div ref={mapContainer} className="map" />
        </>
    )
}

export default map

