import React, { Component } from 'react'
import Weather from 'simple-react-weather'
import '../App.css'

const Forecast  = () => {
    return (
      <div>

        <Weather unit="F" city="Anaheim" appid="610a56d031a9bac93135ae93159a3b60" />

        <Weather unit="F" lat="33.8353" lon="-117.9145" appid="610a56d031a9bac93135ae93159a3b60" />
      </div>
    )
}
export default Forecast;
