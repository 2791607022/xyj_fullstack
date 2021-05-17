import React from 'react'

import Head from '../components/Header'
import Share from '../components/Share'
import UserInfo from '../components/UserInfo'
import Article from  '../Article/index'
import Login from    '../Login/index'
const Home=()=>{
    return(
        <>
        <Head></Head>
        <Share></Share>
        <UserInfo></UserInfo>
        <Article></Article>
        
        </>
    )

}

export default Home