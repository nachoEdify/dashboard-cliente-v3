import React, { useState } from 'react'
import PropertiesFilter from './PropertiesFilter';
import PropertyCard from './PropertyCard/PropertyCard';
import PropertySkeleton from './PropertyCard/PropertySkeleton';

const PropertiesWrapper = ({ PROPERTIES = [], setIdMarkerSelected }) => {

    const [isSwipe, setIsSwipe] = useState(true)

    return (
        <div className="w-0 h-full justify-start items-center flex absolute z-10">
            <div className="rounded-lg bg-white h-[95%] translate-x-12 border border-gray-200 shadow-xl shadow-gray-500/10">
                <div className="xl:w-[650px] lg:w-[600px] h-full relative">
                    <div className="px-8 py-3 border-b h-[10%] flex items-center justify-center z-10">
                        <PropertiesFilter />
                    </div>
                    <div className="px-8 py-3 grid grid-cols-2 gap-8 h-[90%] overflow-auto scroll-transparent pb-8">
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