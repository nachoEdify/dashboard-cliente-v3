import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import MapComponent from '../../common/components/Map/Map';
import PropertiesWrapper from './components/PropertiesWrapper';
import { handleMoveLocationGPS } from '../../common/utils/handleMoveLocationGPS';
import { numberWithCommas } from '../../common/utils/numberWithCommas';
import { handleShowProperty } from './utils/handleShowProperty';
import { handleHideProperty } from './utils/handleHideProperty';
import PropertiesFilter from './components/PropertiesFilter';
import { BiListUl, BiMapAlt } from 'react-icons/bi';

const Properties = ({ isTabletOrMobile }) => {

    const [isList, setIsList] = useState(true)

    const POLYGON = [
        [
            [-0.365133, 39.464964],
            [-0.359472, 39.474038],
            [-0.341383, 39.474776],
            [-0.336636, 39.467590],
            [-0.350358, 39.460408],
            [-0.365133, 39.464964]
        ]
    ]

    const PROPERTIES = [
        {
            id: `p_0`,
            photos: ['https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80', 'https://images.unsplash.com/photo-1560185127-2d06c6d08d3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'],
            address: 'Calle san jacinto benavente 21, A 9',
            city: 'Valencia',
            country: 'España',
            area: 121,
            rooms: 3,
            bathrooms: 2,
            price: 325000,
            handlers: {
                onMouseOver: handleShowProperty,
                onMouseLeave: handleHideProperty
            },
            exclusive: true,
            date: new Date(),
            meet: false,
            meet_other: false,
            state: 'SENT',
            coordinates: [-0.362456, 39.465818]
        },
        {
            id: `p_1`,
            photos: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80', 'https://images.unsplash.com/photo-1560185127-2d06c6d08d3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'],
            address: 'Calle los leones, 45',
            city: 'Valencia',
            country: 'España',
            area: 101,
            rooms: 3,
            bathrooms: 2,
            price: 230000,
            handlers: {
                onMouseOver: handleShowProperty,
                onMouseLeave: handleHideProperty
            },
            exclusive: false,
            date: new Date(),
            meet: false,
            meet_other: false,
            state: 'LIKE',
            coordinates: [-0.347363, 39.468737]
        },
        {
            id: `p_2`,
            photos: ['https://images.unsplash.com/photo-1512916194211-3f2b7f5f7de3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80', 'https://images.unsplash.com/photo-1560185127-2d06c6d08d3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'],
            address: 'Avenida del puerto 162',
            city: 'Valencia',
            country: 'España',
            area: 136,
            rooms: 4,
            bathrooms: 3,
            price: 563700,
            handlers: {
                onMouseOver: handleShowProperty,
                onMouseLeave: handleHideProperty
            },
            exclusive: false,
            date: new Date('12-12-2021'),
            meet: false,
            meet_other: false,
            state: 'SENT',
            coordinates: [-0.348582, 39.464778]
        },
        {
            id: `p_3`,
            photos: ['https://images.unsplash.com/photo-1499916078039-922301b0eb9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80', 'https://images.unsplash.com/photo-1512916194211-3f2b7f5f7de3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80', 'https://images.unsplash.com/photo-1560185127-2d06c6d08d3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'],
            address: 'Calle Santos Justo y Pastor, 20',
            city: 'Valencia',
            country: 'España',
            area: 120,
            rooms: 3,
            bathrooms: 2,
            price: 470000,
            handlers: {
                onMouseOver: handleShowProperty,
                onMouseLeave: handleHideProperty
            },
            exclusive: false,
            date: new Date(),
            meet: true,
            meet_other: false,
            state: 'LIKE',
            coordinates: [-0.351843, 39.470704]
        },
        {
            id: `p_4`,
            photos: ['https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1499916078039-922301b0eb9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80', 'https://images.unsplash.com/photo-1512916194211-3f2b7f5f7de3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80', 'https://images.unsplash.com/photo-1560185127-2d06c6d08d3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'],
            address: 'Avenida de aragón, 23',
            city: 'Valencia',
            country: 'España',
            area: 150,
            rooms: 4,
            bathrooms: 2,
            price: 870000,
            handlers: {
                onMouseOver: handleShowProperty,
                onMouseLeave: handleHideProperty
            },
            exclusive: false,
            date: new Date(),
            meet: false,
            meet_other: true,
            state: 'DISCARDED',
            coordinates: [-0.359409, 39.469160]
        },
    ]

    return (
        <div className="h-full w-full relative">
            <div className="w-full px-8 py-3 border-b lg:hidden">
                <PropertiesFilter />
            </div>
            {isList &&
                <PropertiesWrapper PROPERTIES={PROPERTIES} />
            }
            <div className={isTabletOrMobile ? (isList ? "hidden" : "w-full h-full") : "lg:block w-full h-full"}>
                <MapComponent height={isTabletOrMobile && '50rem'} markers={PROPERTIES} polygons={POLYGON} zoom={13.5} center={isTabletOrMobile ? handleMoveLocationGPS(POLYGON?.[0]?.[0], -25) : handleMoveLocationGPS(POLYGON?.[0]?.[0], 15)} />
            </div>
            <div className="fixed w-full justify-center flex items-center bottom-28 lg:hidden h-0 rounded-full z-10">
                <div className="bg-white rounded-full shadow px-4 py-1.5 ">
                    {isList ? (
                        <span onClick={()=>{
                            window.scrollTo(0, 0);
                            setIsList(false)
                        }} className="space-x-2 flex items-center">
                            <BiMapAlt />
                            <span>
                                Ver Mapa
                            </span>
                        </span>
                    ) : (
                        <span onClick={()=>setIsList(true)} className="space-x-2 flex items-center">
                            <BiListUl />
                            <span>
                                Ver Listado
                            </span>
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Properties;