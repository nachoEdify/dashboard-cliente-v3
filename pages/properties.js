import React from 'react'
import Layout from '../components/common/components/Layout/Layout';
import Properties from '../components/pages/Properties/Properties';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


export async function getStaticProps({ locale }){
    return{
        props:{
            ...(await serverSideTranslations(locale, ['common'])),
        }
    }
}

const properties = () => {
    return (
        <Layout>
            <Properties />
        </Layout>
    );
}

export default properties;