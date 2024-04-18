// mapbox.js
const MAPBOX_API_KEY = 'pk.eyJ1IjoieG5pY29sYXNnIiwiYSI6ImNsMDc4NmpwbDI1cnQzYm85ZW1yc3JseTYifQ.y8bji6ykkeH_9YOPG7KOSQ';
const MAPBOX_SCRIPT_URL = `https://api.mapbox.com/mapbox-gl-js/v2.13.0/mapbox-gl.js`;

let mapboxScriptLoaded = false;

export async function loadMapboxScriptIfNeeded() {
  if (!mapboxScriptLoaded) {
    await loadMapboxScript();
    mapboxScriptLoaded = true;
  }
}

async function loadMapboxScript() {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = MAPBOX_SCRIPT_URL;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

export function initializeMap(mapContainerId, zoom) {
  mapboxgl.accessToken = MAPBOX_API_KEY;
  new mapboxgl.Map({
    container: mapContainerId,
    style: 'mapbox://styles/mapbox/streets-v11',
    center:[-77.586, 0.804821],
    zoom,
  });
}