import mapboxgl from 'mapbox-gl'
import { propertyStateEnum } from '../../../enums/propertyStateEnum';

export const addMarkers = ({ map, markers = [], markerIdSelected }) =>{
    map.on('load', () => {
        
        const geojson = {
            'type': 'FeatureCollection',
            'features': markers
        };


        // Add markers to the map.
        for (const marker of geojson.features) {
            // Create a DOM element for each marker.

            const wrapper = document.createElement('div');
            wrapper.className = 'space-y-0.5'

            const badge = document.createElement('div');
            badge.className = `bg-gray-50 text-gray-400 hover:bg-primary-orange hover:text-white rounded-full px-2.5 py-0.5 uppercase font-semibold shadow duration-300 transition-all`
            badge.textContent = `${Number(marker?.price) >= 1000000 ? Number(marker?.price/1000000).toFixed(0) : Number(marker?.price/1000).toFixed(0) }${Number(marker?.price) >= 1000000 ? 'M€' : 'K€' }`

            const el = document.createElement('div');
            const width = 20;
            const height = 20;
            el.style.backgroundColor = propertyStateEnum?.filter(c => c.value === marker.state)?.[0].color;
            el.style.width = `${width}px`;
            el.style.height = `${height}px`;
            el.style.border = '3px solid white';
            el.className = 'shadow';
            el.style.borderRadius = '9999px';
            el.className = 'm-auto';

            // APPEND CHILDS TO PARENT DIV
            wrapper.append(badge, el)

            
            wrapper.addEventListener('mousemove', (e) => {
                wrapper.style.cursor = 'pointer';
                marker?.handlers?.onMouseOver({ e, property: marker })
            });
            wrapper.addEventListener('mouseleave', (e) => {
                marker?.handlers?.onMouseLeave({ e, property: marker })
            });
            wrapper.addEventListener('click', () => {
                // marker?.handlers?.onClick()
            });
            
            // Add markers to the map.
            try{
                new mapboxgl.Marker(wrapper).setLngLat(marker.coordinates).addTo(map)
            } catch (e){}
        }
    });
}