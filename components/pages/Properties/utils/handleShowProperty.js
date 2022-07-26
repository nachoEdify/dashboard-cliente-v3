import { numberWithCommas } from "../../../common/utils/numberWithCommas";

export const handleShowProperty = ({e, property }) =>{
    if(document.getElementById(`id_property_${property?.id}`)){
        document.getElementById(`id_property_${property?.id}`).remove()
    }
    let x = e.clientX
    let y = e.clientY

    const propertyCard = document.createElement('div');
    propertyCard.className = `w-44 h-64 bg-white rounded-lg shadow absolute z-10 ${property?.state === 'DISCARDED' && 'opacity-90'}`
    propertyCard.style.transform = 'translate(-50%, -50%)'
    propertyCard.id = `id_property_${property?.id}`
    propertyCard.style.left = (x - 40) + 'px'
    propertyCard.style.top = (y - 140) + 'px'

    const imageCard = document.createElement('div');
    imageCard.className = 'w-full h-32 bg-gray-100 rounded-t-lg relative'
    const imageComponent = document.createElement('img');
    imageComponent.src = property?.photos?.[0]
    imageComponent.className = `w-full h-full rounded-t-lg object-cover ${property?.state === 'DISCARDED' && 'grayscale'}`

    imageCard.append(imageComponent) // Append the image to the half of the propertyCard


    const infoWrapper = document.createElement('div');
    imageCard.className = 'w-full h-32'
    const infoPrice = document.createElement('div'); // SET PRICE INFO
    infoPrice.className = 'text-lg text-gray-800 font-semibold px-2 mt-2'
    infoPrice.textContent = `${numberWithCommas(property?.price)} €`
    const infoAddress = document.createElement('div')
    infoAddress.className = 'text-gray-700 line-clamp-1 text-sm px-2 py-0.5'
    infoAddress.textContent = property?.address
    const infoLocation = document.createElement('div')
    infoLocation.className = 'text-gray-500 line-clamp-1 text-sm px-2 py-0.5'
    infoLocation.textContent = property?.city + ', ' + property?.country
    const infoExtras = document.createElement('div')
    infoExtras.className = 'flex py-2 px-2 items-center space-x-4'
    const extrasArea = document.createElement('div')
    extrasArea.className = 'text-gray-500 text-sm'
    extrasArea.textContent = `📦 ${property?.area} m²`
    const extrasRooms = document.createElement('div')
    extrasRooms.className = 'text-gray-500 text-sm'
    extrasRooms.textContent = `🛏️ ${property?.rooms}`
    const extrasBathrooms = document.createElement('div')
    extrasBathrooms.className = 'text-gray-500 text-sm'
    extrasBathrooms.textContent = `🛀 ${property?.bathrooms}`

    infoExtras.append(extrasArea, extrasRooms, extrasBathrooms)
    infoWrapper.append(infoPrice, infoAddress, infoLocation, infoExtras)

    propertyCard.append(imageCard, infoWrapper)

    document.body.append(propertyCard) // Append the card to the body to show it on the webBrowser

}