export const handleHideProperty = ({e, property }) =>{
    if(document.getElementById(`id_property_${property?.id}`)){
        document.getElementById(`id_property_${property?.id}`).remove()
    }
}