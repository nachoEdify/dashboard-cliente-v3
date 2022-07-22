import React from 'react'
import Layout from '../components/common/components/Layout/Layout';
import Home from '../components/pages/Home/Home';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


export async function getStaticProps({ locale }){
    return{
        props:{
            ...(await serverSideTranslations(locale, ['common'])),
        }
    }
}

const home = ({ t, i18n }) => {

    return (
        <Layout>
            <Home t={t} i18n={i18n} />
        </Layout>
    );
}

export default home;