import React from "react"
export default function Pricing({ currency, pricing, data }) {
  return (
    <div className="pricing">
      <div class="column">
        <ul class="price">
          <li class="header">FREE</li>
          <li class="grey"><span className="li-span">{currency === 'USD' ? '$' : currency === 'EUR' ? '€' : currency}</span> 0
          <span className="li-span">{pricing}</span></li>
          <p className="p-free">The basic for private and secure communications</p>
          <li><div className="arrow">&#8594;</div>   1 user</li>
          <li><div className="arrow">&#8594;</div>   50 MB storage</li>
          <li><div className="arrow">&#8594;</div>   1 address</li>
          <li><div className="arrow">&#8594;</div>   No domain support</li>
          <li class="free"><div className="arrow">&#8594;</div>   ProtonVPN (Optional)*</li>
          <li class="grey"><a href="#" class="button">Sign Up</a></li>
        </ul>
      </div>

      <div class="column">
        <ul class="price">
          <p className="p-plus">MOST POPULAR</p>
          <li class="header">{data[0] && data[0].Name.toUpperCase()}</li>
          <li class="grey"><span className="li-span">{currency === 'USD' ? '$' : currency === 'EUR' ? '€' : currency}</span> {

            pricing === "/yr" ? data[0] && data[0].Pricing['12'] / 100
              : pricing === "/2yr" ? data[0] && data[0].Pricing['24'] / 100
                : data[0] && data[0].Pricing['1'] / 100

          }<span className="li-span">{pricing}</span></li>
          <p>Bailed as $48 per year</p>
          <p className="description">Full-featured mailbox with advanced protection</p>
          <li><div className="arrow">&#8594;</div>   {data[0] && data[0].MaxMembers} user</li>
          <li><div className="arrow">&#8594;</div>    5 GB storage*</li>
          <li><div className="arrow">&#8594;</div>   {data[0] && data[0].MaxAddresses} address*</li>
          <li><div className="arrow">&#8594;</div>   Supports 1 domain*</li>
          <li><div className="arrow">&#8594;</div>   Supports folders,labels,filters,auto-reply,IMTP/SMPT and more</li>
          <li><div className="arrow">&#8594;</div>   ProtonVPN (Optional)*</li>
          <li class="grey"><a href="#" class="button">Sign Up</a></li>
        </ul>
      </div>

      <div class="column">
        <ul class="price">
          <li class="header">{data[2] && data[2].Name.toUpperCase()}</li>
          <li class="grey"><span className="li-span">{currency === 'USD' ? '$' : currency === 'EUR' ? '€' : currency} </span> {

            pricing === "/yr" ? data[2] && data[2].Pricing['12'] / 100
              : pricing === "/2yr" ? data[2] && data[2].Pricing['24'] / 100
                : data[2] && data[2].Pricing['1'] / 100

          }<span className="li-span">{pricing}</span></li>
          <p>Bailed as $75 per year</p>
          <p className="description">ProtonMail for professionals and buisnesses</p>
          <li><div className="arrow">&#8594;</div>   1 - 5000 user*</li>
          <li><div className="arrow">&#8594;</div>   5 GB storage per user*</li>
          <li><div className="arrow">&#8594;</div>   5 addresses per user*</li>
          <li><div className="arrow">&#8594;</div>   Supports 2 domains*</li>
          <li><div className="arrow">&#8594;</div>   Catch all email,multi user menagement,priority support and more</li>
          <li className="professional"><div className="arrow">&#8594;</div>   ProtonVPN (Optional)*</li>
          <li class="grey"><a href="#" class="button">Sign Up</a></li>
        </ul>
      </div>
      <div class="column">
        <ul class="price">
          <li class="header">{data[5] && data[5].Name.toUpperCase()}</li>
          <li class="grey"><span className="li-span">{currency === 'USD' ? '$' : currency === 'EUR' ? '€' : currency}</span> {

            pricing === "/yr" ? data[5] && data[5].Pricing['12'] / 100
              : pricing === "/2yr" ? data[5] && data[5].Pricing['24'] / 100
                : data[5] && data[5].Pricing['1'] / 100

          }<span className="li-span">{pricing}</span></li>
          <p>Bailed as $288 per year</p>
          <p className="description">ProtonMail for famillies and small buisnesses</p>
          <li><div className="arrow">&#8594;</div>   {data[5] && data[5].MaxMembers} user</li>
          <li><div className="arrow">&#8594;</div>   20 GB storage</li>
          <li><div className="arrow">&#8594;</div>   {data[5] && data[5].MaxAddresses} addresses</li>
          <li><div className="arrow">&#8594;</div>   Supports 10 domains</li>
          <li><div className="arrow">&#8594;</div>   Includes all features</li>
          <li><div className="arrow">&#8594;</div>   Priority support</li>
          <li class="visionary"><div className="arrow">&#8594;</div>   Includes ProtonVPN</li>
          <li class="grey"><a href="#" className="button">Sign Up</a></li>
        </ul>
      </div>
    </div>
  )
}