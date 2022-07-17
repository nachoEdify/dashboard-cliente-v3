import { BiCategory, BiHomeSmile, BiCalendarAlt, BiFileBlank, BiUserCircle } from 'react-icons/bi'

export const routes = [
    {
        path: '/home',
        title: 'Panel',
        pathname: 'home',
        desktop: true,
        icon: BiCategory
    },
    {
        path: '/properties',
        title: 'Propiedades',
        pathname: 'properties',
        desktop: true,
        icon: BiHomeSmile
    },
    {
        path: '/calendar',
        title: 'Calendario',
        pathname: 'calendar',
        desktop: true,
        icon: BiCalendarAlt
    },
    {
        path: '/documents',
        title: 'Documentos',
        pathname: 'documents',
        desktop: true,
        icon: BiFileBlank
    },
    {
        path: '/profile',
        title: 'Perfil',
        pathname: 'profile',
        desktop: false,
        icon: BiUserCircle
    },
]