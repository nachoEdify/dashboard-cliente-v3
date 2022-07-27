import React, { useState } from 'react'
import PropertiesFilter from './PropertiesFilter';
import PropertyCard from './PropertyCard/PropertyCard';
import PropertySkeleton from './PropertyCard/PropertySkeleton';

const PropertiesWrapper = ({ PROPERTIES = [], setIdMarkerSelected }) => {

    const [isSwipe, setIsSwipe] = useState(true)

    return (
        <div className="w-full lg:w-0 h-full lg:justify-start lg:items-center flex lg:absolute z-10">
            <div className="rounded-lg lg:bg-white h-full lg:h-[95%] lg:translate-x-12 lg:border lg:border-gray-200 lg:shadow-xl lg:shadow-gray-500/10">
                <div className="w-full xl:w-[650px] lg:w-[600px] h-full relative">
                    <div className="hidden px-8 py-3 border-b h-[10%] lg:flex items-center justify-center z-10">
                        <PropertiesFilter />
                    </div>
                    <div className="px-8 py-3 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:h-[90%] lg:overflow-auto scroll-transparent pb-8">
                        {PROPERTIES.map((property, index)=>(
                            <React.Fragment key={index}>
                                <PropertyCard 
                                    showSwipe={isSwipe && index === 0}
                                    setIsSwipe={setIsSwipe}
                                    onMouseOver={setIdMarkerSelected}
                                    {...property}
                                />
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PropertiesWrapper;