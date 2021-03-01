import React, { useEffect } from "react"
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
import './App.css'
import Config from './config';

function App() {

  const mapNode = React.useRef(null);

  useEffect(() => {

    // instance of websocket connection as a class property
    const ws = new WebSocket(Config.apiUrl) 

    if(!ws || !mapNode){
      return
    }

    // @ts-ignore
    const { geolonia } = window;
    const map = new geolonia.Map({
      container: mapNode.current
    });

    const draw = new MapboxDraw({
        displayControlsDefault: false,
        controls: {
            polygon: true,
            trash: true
        }
    });
    map.addControl(draw);

    const sendFeatures=(freatures)=>{
      const data = {
        action: "sendmessage",
        data: freatures
      }
      try {
          ws.send(JSON.stringify(data))
      } catch (error) {
          console.log(error)
      }
    }

    const updateArea = (e) => {　
      const freatures = draw.getAll();
      sendFeatures(freatures)
    }

    map.on('draw.create', updateArea);
    map.on('draw.delete', updateArea);
    map.on('draw.update', updateArea);


    // Websocket 
    ws.onopen = () => {
      console.log('connected')
    }

    ws.onclose = () => {
      console.log('disconnected')
    }

    ws.onmessage = event => {
      const rereceivedFeatureCollection = JSON.parse(event.data)
      const currentFeatureCollection = draw.getAll();
      if(currentFeatureCollection.features.length !== rereceivedFeatureCollection.features.length){
        draw.deleteAll()
        draw.set(rereceivedFeatureCollection)
      }
    }
  }, []);

  return (
    <>
      <div
        id="map"
        ref={mapNode}
        data-lat="35.6759"
        data-lng="139.7449"
        data-zoom="14"
        data-marker="off"
      ></div>
    </>
  );
}

export default App;
