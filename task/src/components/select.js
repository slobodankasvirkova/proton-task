import React from "react"
export default function Select({ handleCurrency, handlePricing }) {
    return (
        <div className="select-div">
            <select onChange={handlePricing}>
                <option value="/mo" >Monthly</option>
                <option value="/yr">Annualy</option>
                <option value="/2yr">2 years</option>
            </select>

            <select onChange={handleCurrency}>
                <option value="EUR"  >EUR</option>
                <option value="USD" >USD</option>
                <option value="CHF">CHF</option>
            </select>
        </div>
    )
}