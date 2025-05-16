// MapScreen.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoibWF5azU3MyIsImEiOiJjbTg3ZzJwZmkwN29xMmpxdTVsbXhudDluIn0.v0pNdMjYnd235k_vUWyuBQ';

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>Mapbox GL JS</title>
<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
<script src="https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js"></script>
<link href="https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css" rel="stylesheet" />
<style>
  body { margin:0; padding:0; }
  #map { position:absolute; top:0; bottom:0; width:100%; }
</style>
</head>
<body>
<div id="map"></div>
<script>
  mapboxgl.accessToken = '${MAPBOX_ACCESS_TOKEN}';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [77.5946, 12.9716], // Bangalore coords
    zoom: 12
  });
</script>
</body>
</html>
`;

export default function MapScreen() {
    return (
        <View style={styles.container}>
            <WebView
                originWhitelist={['*']}
                source={{ html: htmlContent }}
                style={{ flex: 1 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
});
