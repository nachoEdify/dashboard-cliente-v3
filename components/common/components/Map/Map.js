import React, { useLayoutEffect, useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import { Map } from 'mapbox-gl'
import { mapStyleEnum } from '../../enums/mapStyleEnum'
import { addMarkers } from './utils/addMarkers'
import { addPolygon } from './utils/addPolygon'

const VALENCIA_LOCATION = [-0.3832253, 39.4738597]

const MapComponent = ({ 
    polygons, 
    template='default',
    markers,
    height,
    markerIdSelected = '',
    containerId="mapView",
    center=[-0.3832253, 39.4738597], 
    cooperativeGestures = false,
    zoom = 12.3 
}) => {

    
    const mapView = useRef(null)

    const handleSetHeight = (height) =>{
        if(height){
            document.getElementById(containerId).style.height = height
        }
    }

    const handleCenterIsNull = (center) =>{
        return (String(center?.[0]) === 'NaN' || center?.[0] === undefined)
    }

    const handleSetMap = () =>{
        return new Map({
            container: mapView.current, // container ID
            style: mapStyleEnum?.[template], // style URL
            center: handleCenterIsNull(center) ? VALENCIA_LOCATION : center, // starting position [lng, lat]
            zoom,
            cooperativeGestures
        });
    }

    const handleAddExtras = ({ polygons, markers, markerIdSelected, map }) =>{
        if(map){
            console.log("entra")
            if(polygons){
                addPolygon({ map, polygons })
            }
            if(markers){
                addMarkers({ map, markers, markerIdSelected })
            }
        }
    }

    useLayoutEffect(() => {

        handleSetHeight(height)

        const map = handleSetMap() // Initialize map
        
        map.addControl(new mapboxgl.NavigationControl()); // Add zoom and rotation controls to the map.
        handleAddExtras({ polygons, markers, markerIdSelected, map }) // Add polygons and markers to the map
    }, [polygons, markers, markerIdSelected])
    

    return (
        <div id={containerId} ref={mapView} className="w-full h-full"></div>
    );
}

export default MapComponent;