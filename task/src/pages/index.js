import React, { useState, useEffect } from "react"
export default function Home() {

  const [data, setData] = useState({});

  useEffect(async () => {
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

    const response = await fetch('https://api.protonmail.ch/payments/plans?Currency=EUR', myInit).then(res => res.json());
    setData(response);
  }, []);
 /* const requestPlans = async (currency='EUR') => {
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

    const response = await fetch(`https://api.protonmail.ch/payments/plans?${currency}`, myInit).then(res=>res.json());
 
};*/

console.log(data)
  return (
    <div>
      <h5>Plans&Prices</h5>
      <div>
            <select>
                <option value="Monthly" >Monthly</option>
                <option value="Annualy">Annualy</option>
                <option value="2years">2 years</option>
            </select>
        </div>
        <div>
            <select>
                <option value="EUR" onClick >EUR</option>
                <option value="CHF" onClick >CHF</option>
                <option value="USD" onClick >USD</option>
            </select>
        </div>


      <div className="container">
        <div class="column">
          <ul class="price">
            <li class="header">FREE</li>
            <li class="grey">$ 0/mo</li>
            <li><div className="arrow">&#8594;</div>   1 user</li>
            <li><div className="arrow">&#8594;</div>   50 MB storage</li>
            <li><div className="arrow">&#8594;</div>   1 address</li>
            <li><div className="arrow">&#8594;</div>   No domain support</li>
            <li class="free"><div className="arrow">&#8594;</div>   ProtonVPN (Optional)*</li>
            <li class="grey"><a href="#" class="button">Sign Up</a></li>
          </ul>
        </div>

        <div class="column plus">
          <ul class="price">
          <li class="grey">{data.Plans[0].Currency}</li>
            <li class="grey">$ 0/mo</li>
            <li><div className="arrow">&#8594;</div>   1 user</li>
            <li><div className="arrow">&#8594;</div>   5 GB storage*</li>
            <li><div className="arrow">&#8594;</div>   5 address*</li>
            <li><div className="arrow">&#8594;</div>   Supports 1 domain*</li>
            <li><div className="arrow">&#8594;</div>   Supports folders,labels,filters,auto-reply,IMTP/SMPT and more</li>
            <li><div className="arrow">&#8594;</div>   ProtonVPN (Optional)*</li>
            <li class="grey"><a href="#" class="button">Sign Up</a></li>
          </ul>
        </div>

        <div class="column professional">
          <ul class="price">
            <li class="header">PROFESSIONAL</li>
            <li class="grey">$ 6.25/mo</li>
            <li><div className="arrow">&#8594;</div>   1 - 5000 user*</li>
            <li><div className="arrow">&#8594;</div>   5 GB storage per user*</li>
            <li><div className="arrow">&#8594;</div>   5 addresses per user*</li>
            <li><div className="arrow">&#8594;</div>   Supports 2 domains*</li>
            <li><div className="arrow">&#8594;</div>   Catch all email,multi user menagement,priority support and more</li>
            <li><div className="arrow">&#8594;</div>   ProtonVPN (Optional)*</li>
            <li class="grey"><a href="#" class="button">Sign Up</a></li>
          </ul>
        </div>
        <div class="column visionary">
          <ul class="price">
            <li class="header">VISIONARY</li>
            <li class="grey">$ 24/mo</li>
            <li><div className="arrow">&#8594;</div>   6 user</li>
            <li><div className="arrow">&#8594;</div>   20 GB storage</li>
            <li><div className="arrow">&#8594;</div>   50 addresses</li>
            <li><div className="arrow">&#8594;</div>   Supports 10 domains</li>
            <li><div className="arrow">&#8594;</div>   Includes all features</li>
            <li><div className="arrow">&#8594;</div>   Priority support</li>
            <li class="visionary"><div className="arrow">&#8594;</div>   Includes ProtonVPN</li>
            <li class="grey"><a href="#" className="button">Sign Up</a></li>
          </ul>
        </div>
      </div>
    </div>

  )
}
