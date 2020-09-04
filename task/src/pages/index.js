import React, { useState, useEffect } from "react"
import Pricing from '../components/pricing'
import Header from '../components/header'
import Select from '../components/select'
export default function Home() {

  const [data, setData] = useState([]);
  const [currency, setCurrency] = useState("EUR");
  const [pricing, setPricing] = useState("/mo");

  const requestPlans = async (currency) => {
    const myHeaders = new Headers();

    myHeaders.append('Content-Type', 'application/json;charset=utf-8');
    myHeaders.append('x-pm-appversion', 'Other');
    myHeaders.append('x-pm-apiversion', '3');
    myHeaders.append('Accept', 'application/vnd.protonmail.v1+json');

    const myInit = {
      method: 'GET',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default'
    };

    return (await fetch(`https://api.protonmail.ch/payments/plans?${currency}`, myInit)).json();

  };

  useEffect(() => {
    async function fetchData() {
      const plans = await requestPlans(currency);
      setData(plans.Plans);
    }
    fetchData();
  }, [currency]);

  const handleCurrency = function (e) {
    setCurrency(e.target.value);
  }

  const handlePricing = function (e) {
    setPricing(e.target.value);
  }

  console.log(data);
  return (
    <div>
      <Header />
      <Select
        handleCurrency={handleCurrency}
        handlePricing={handlePricing}
      />
      <Pricing
        data={data}
        currency={currency}
        pricing={pricing}
      />
    </div>

  )
}
