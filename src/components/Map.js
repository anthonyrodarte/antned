import React, { useEffect, useState } from 'react'

// Start Openlayers imports
import { 
    Map,
    View
 } from 'ol'
import {
    Tile as TileLayer,
} from 'ol/layer'
import {
    XYZ as XYZSource,
    TileWMS as TileWMSSource
} from 'ol/source'
import { 
    ScaleLine,
    ZoomSlider,
    MousePosition,
    OverviewMap,
    defaults as DefaultControls
} from 'ol/control'

// End Openlayers imports

const OLMap = (props) => {
  const [height, setHeight] = useState(400)
  
  const updateDimensions = () => {
    const h = window.innerWidth >= 992 ? window.innerHeight : 400
    setHeight(h)
  }

  useEffect(() => {
    window.addEventListener('resize', updateDimensions)

    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [])

  useEffect(() => {
      // Create an Openlayer Map instance with two tile layers
      new Map({
        //  Display the map in the div with the id of map
        target: 'map',
        layers: [
            new TileLayer({
                source: new XYZSource({
                    url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    projection: 'EPSG:3857'
                })
            }),
            new TileLayer({
                source: new TileWMSSource({
                    url: 'https://ahocevar.com/geoserver/wms',
                    params: {
                        layers: 'topp:states',
                        'TILED': true,
                    },
                    projection: 'EPSG:4326'
                }),
                name: 'USA'
            }),
        ],
        // Add in the following map controls
        controls: DefaultControls().extend([
            new ZoomSlider(),
            new MousePosition(),
            new ScaleLine(),
            new OverviewMap()
        ]),
        // Render the tile layers in a map view with a Mercator projection
        view: new View({
            projection: 'EPSG:3857',
            center: [50, 40],
            zoom: 6,
        })
    })
  }, [])
  
  const style = {
    width: '80%',
    height: height,
    margin: 'auto',
    backgroundColor: '#cccccc',
  }

  return (
      <div id="map" style={style}/>
  );
}

export default OLMap