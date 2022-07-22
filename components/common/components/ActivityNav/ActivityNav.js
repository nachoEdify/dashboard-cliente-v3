import React from 'react'
import Block from '../Block/Block';
import LogTimeline from '../LogTimeline/LogTimeline';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export async function getStaticProps({ locale }){
    return{
        props:{
            ...(await serverSideTranslations(locale, ['common'])),
        }
    }
}

const ActivityNav = () => {

    const { t, i18n } = useTranslation()

    return (
        <div className={`hidden lg:block overflow-auto border-l p-8 h-full bg-gray-50 space-y-16`}>
            <Block t={t} />
            <LogTimeline t={t} logs={[
                // {
                //     updatedBy: {
                //         name: 'Adrian',
                //         surname: 'Sanchez',
                //     },
                //     title: "Ha subido un documento",
                //     date: new Date()
                // },
                // {
                //     updatedBy: {
                //         name: 'Adrian',
                //         surname: 'Sanchez'
                //     },
                //     title: "Ha subido un documento",
                //     date: new Date()
                // }
            ]} />
        </div>
    );
}

export default ActivityNav;