import type { NextPage } from 'next'
import Script from 'next/script'
import { OrderCallModal } from 'src/components'
import Layout from 'src/components/layout'
import {
  Hero,
  Advantages,
  About,
  WorkStages,
  OurOffers,
  OurFacilities,
  CallToAction,
  PriceList,
  OrderConcrete,
} from 'src/components/sections'

const Home: NextPage = () => {
  return (
    <Layout>
      <Script
        strategy='lazyOnload'
        src='https://kit.fontawesome.com/85b1b8f8c9.js'
        crossOrigin='anonymous'
      />
      <Hero />
      <Advantages />
      <About anchor='about' />
      <WorkStages />
      <OurOffers anchor='services' />
      <OurFacilities />
      <CallToAction />
      <PriceList anchor='price-list' />
      <OrderConcrete anchor='order-concrete' />
      <OrderCallModal />
    </Layout>
  )
}

export default Home
