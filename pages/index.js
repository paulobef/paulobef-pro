import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import Hero from '../components/hero'
import '../css/styles.scss'
import JobItem from '../components/jobItem';


const jobs = [
  {
    title: 'Project Manager',
    startDate: 'July 2019',
    endDate: 'Present',
    description: 'Coordination of design, front-end and back-end teams. Planning and staffing. Writing specs.',
    company: 'Gaya'
  }

].map(job => {
  job.key = `job-item-${job.title}`
  return job
})

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    </Head>

    <Nav />

    <Hero />
    <div className="container">
      {jobs.map(({ key, title, startDate, endDate, description, company}) => (
        <JobItem key={key} title={title} startDate={startDate} endDate={endDate} description={description} company={company} />
      ))

      }
    </div>



  </div>

)

export default Home
