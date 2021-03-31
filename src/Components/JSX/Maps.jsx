import React, { Component } from 'react';
import '../CSS/Navbar.css'
import {MapContainer, TileLayer, Marker } from 'react-leaflet'
import L from 'leaflet';

const axios = require('axios');

var greenIcon = new L.Icon({
    iconUrl: 'https://cdn1.bbcode0.com/uploads/2021/3/31/06432be53ebd8394fd366e41117a4032-full.png', 
    iconSize: [48, 54],
    iconAnchor: [12, 41],
});
  


class Maps extends Component {
    constructor() {
        super()
        this.state = {
          position: null,
          lat: null,
          lng: null,
          map: null

          
        }

        this.getIP=this.getIP.bind(this)
    }

    componentDidMount(){
        this.getIP();
    }

    async getIP() {
        let data = await axios
          .get("https://geo.ipify.org/api/v1?apiKey=at_nFonRa8SaUXfBbZ6tZkJRb4IeljZ5&ipAddress=8.8.8.8")
          .then(function(data) {
            console.log(data);
            return data ;
            
          })

        this.setState({
              lat:data.data.location.lat,
              lng:data.data.location.lng,
              position:[data.data.location.lat, data.data.location.lng]
              
          })

        const {map} = this.state;
        if (map) map.flyTo(this.state.position);
          
      }


        
    render() {
        return (

            <MapContainer center={{ lat: 51.505, lng: -0.09 }} zoom={5} whenCreated={map => this.setState({ map })}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />

                {

                this.state.position === null ? null : (
                    <Marker icon={greenIcon} position={this.state.position}/>  )             

                   
                }

                
                
            </MapContainer>
            
        );
    }
}

export default Maps;