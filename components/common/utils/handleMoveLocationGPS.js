/*
    1% = 0.0005    ( LONGITUDE )
*/

const calculatePercent = (percent) =>{
    return 0.0005 * percent
}

export const handleMoveLocationGPS = (center, percent) =>{
    return [center?.[0] - calculatePercent(percent || 10), center?.[1]]
}