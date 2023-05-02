import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Head>
        <title>Elimufy - Empowering Early Education Through Seamless Management</title>
        <meta
          name="description"
          content="Elimufy is a state-of-the-art School Information Management System (SIMS) tailored specifically for preschools and kindergartens. Our innovative SaaS product streamlines and simplifies the daily operations of your institution, enabling educators and administrators to focus on what matters most - nurturing young minds for a brighter future."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
