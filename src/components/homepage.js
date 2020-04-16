import React from 'react'
import {
  Volunteer, Request_help, Supply_stores, Covid19_data, How_it_works, About
} from "./navbar_content/index";


const HomePage = () => {
  return (
    <div>
      <About />
      <Volunteer />
      <Request_help />
      <Supply_stores />
      <Covid19_data />
      <How_it_works />
    </div>
  )
}

export default HomePage
