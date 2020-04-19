import React, { useState, useEffect } from 'react';
import CovidMap from './map';
import CovidList from './list';

import axios from 'axios';

const Covid19_data = () => {
  const [loading, setLoading] = useState(false)
  const [covidData, setCovidData] = useState(null)

  useEffect(() => {
    const fetchData = async function () {
      setLoading(true)
      const result = await axios.get('https://corona.lmao.ninja/v2/countries');
      setCovidData(result.data)
      setLoading(false)
    }
    fetchData();
  }, [])

  return (
    <div>
      {
        loading
          ? <div><strong>...Loading</strong></div>
          : <div>
            <CovidMap data={covidData} />
            <CovidList data={covidData} />
          </div>
      }
    </div>
  )
}

export default Covid19_data
