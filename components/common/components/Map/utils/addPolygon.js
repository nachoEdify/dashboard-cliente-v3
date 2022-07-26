import mapboxgl from 'mapbox-gl'

export const addPolygon = ({ map, polygons }) =>{
    map.on('load', () => {

        map.addSource('maine', {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'geometry': {
                    'type': 'Polygon',
                    'coordinates': polygons || [
                        [ 
                            [-0.382478, 39.449558],
                            [-0.333983, 39.474596],
                            [-0.377846, 39.487921],
                            [-0.408746, 39.472744],
                            [-0.382478, 39.449558]
                        ]                    
                    ]
                }
            }
        });
         
        // Add a new layer to visualize the polygon.
        map.addLayer({
            'id': 'maine',
            'type': 'fill',
            'source': 'maine', // reference the data source
            'layout': {},
            'paint': {
                'fill-color': '#EC7647', // orange color fill
                'fill-opacity': 0.05
            }
        });

        // Add a orange outline around the polygon.
        map.addLayer({
            'id': 'outline',
            'type': 'line',
            'source': 'maine',
            'layout': {},
            'paint': {
                'line-color': '#EC7647',
                'line-width': 2
            }
        });


        // map.on('click', 'maine', (e) => {
        //     new mapboxgl.Popup()
        //     .setLngLat(e.lngLat)
        //     .setHTML(e.features[0].properties.name)
        //     .addTo(map);
        // });
            
        // map.on('mouseenter', 'maine', (e) => {
        //     map.getCanvas().style.cursor = 'pointer';
        // });
            
        // map.on('mouseleave', 'maine', () => {
        //     map.getCanvas().style.cursor = '';
        // });

    });
}