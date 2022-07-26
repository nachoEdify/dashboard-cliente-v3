import React from 'react'

const PropertySkeleton = () => {
    return (
        <div className="w-full h-[22rem] active:scale-98 border rounded-lg duration-200 transition-all">
            <div className="h-3/5 w-full bg-gray-200 rounded-t-lg animate-pulse">
            </div>
            <div className="h-2/5 bg-white rounded-b-lg space-y-3 p-3">
                <div className="bg-gray-200 w-1/2 h-5 rounded-full animate-pulse" />
                <div className="bg-gray-200 w-11/12 h-5 rounded-full animate-pulse" />
                <div className="bg-gray-200 w-1/3 h-5 rounded-full animate-pulse" />
                <div className="flex items-center space-x-3">
                    <div className="bg-gray-200 w-1/4 h-5 rounded-full animate-pulse" />
                    <div className="bg-gray-200 w-1/4 h-5 rounded-full animate-pulse" />
                    <div className="bg-gray-200 w-1/4 h-5 rounded-full animate-pulse" />
                </div>
            </div>
        </div>
    );
}

export default PropertySkeleton;