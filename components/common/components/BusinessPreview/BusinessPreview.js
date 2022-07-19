import React from 'react'
import { BsStarFill } from 'react-icons/bs';

const BusinessPreview = ({
    image,
    name,
    address,
    locality
}) => {
    return (
        <div className="bg-white rounded-lg border grid grid-cols-12 items-start max-h-40">
            <div className="h-full relative col-span-3">
                <img alt="business_image" src={image} className="object-cover max-h-40 h-full rounded-l-lg" />
            </div>
            <div className="col-span-9 pl-5 p-2 space-y-4">
                <div className="font-semibold text-lg">
                    {name}
                </div>
                <div className="text-gray-500 text-sm">
                    {address} <br/>
                    {locality}, España
                </div>
                <div className="text-primary-purple text-sm flex items-center space-x-2">
                    <BsStarFill />
                    <span>
                        4,3 valoración
                    </span>
                </div>
            </div>
        </div>
    );
}

export default BusinessPreview;