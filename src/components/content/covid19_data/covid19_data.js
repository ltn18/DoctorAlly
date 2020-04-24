import React, { useState, useEffect, useContext } from 'react';
import localeContext, { getLongLineText } from '../../context/localeCtx';


import CovidMap from './map';
import CovidList from './list';

import axios from 'axios';

const Covid19_data = () => {
  const [loading, setLoading] = useState(false);
  const [covidData, setCovidData] = useState(null);
  const locale = useContext(localeContext);

  useEffect(() => {
    const fetchData = async function () {
      setLoading(true)
      const result = await axios.get('https://corona.lmao.ninja/v2/countries');
      setCovidData(result.data)
      setLoading(false)
    }
    fetchData();
  }, [])
  // <strong>...{getLongLineText(locale.lang, "covid19_data", "loading", null)}</strong>
  return (
    <div>
      {
        loading
          ? <div><img style={{ width: '100%', height: '85vh', marginTop: "15px", marginBottom: "20px" }} src="loading.gif" alt="Loading" /></div>
          : <div>
            <CovidMap data={covidData} />
            <CovidList data={covidData} />
          </div>
      }
    </div>
  )
}

export default Covid19_data
