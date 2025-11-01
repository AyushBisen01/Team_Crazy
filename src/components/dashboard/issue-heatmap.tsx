'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { issues } from '@/lib/data';
import { useEffect, useState } from 'react';

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

function HeatmapLayer() {
  const [heatmap, setHeatmap] = useState<google.maps.visualization.HeatmapLayer | null>(null);

  useEffect(() => {
    // This effect runs on the client after mount, so `google` is available.
    const locations = issues.map(issue => new google.maps.LatLng(issue.location.lat, issue.location.lng));
    
    if (window.google && window.google.maps && window.google.maps.visualization) {
      const heatmapLayer = new google.maps.visualization.HeatmapLayer({
        data: locations,
        radius: 40,
        gradient: [
          'rgba(0, 255, 255, 0)',
          'rgba(0, 255, 255, 1)',
          'rgba(0, 191, 255, 1)',
          'rgba(0, 127, 255, 1)',
          'rgba(0, 63, 255, 1)',
          'rgba(0, 0, 255, 1)',
          'rgba(0, 0, 223, 1)',
          'rgba(0, 0, 191, 1)',
          'rgba(0, 0, 159, 1)',
          'rgba(0, 0, 127, 1)',
          'rgba(63, 0, 91, 1)',
          'rgba(127, 0, 63, 1)',
          'rgba(191, 0, 31, 1)',
          'rgba(255, 0, 0, 1)',
        ],
      });
      setHeatmap(heatmapLayer);
    }

  }, []);

  return heatmap ? <MapLayer layer={heatmap} /> : null;
}


// A little helper component to add the heatmap layer to the map
function MapLayer({ layer }: { layer: google.maps.visualization.HeatmapLayer }) {
  const map = (useMap) ? useMap() : null;

  useEffect(() => {
    if (map) {
      layer.setMap(map);
    }
    return () => {
      layer.setMap(null);
    };
  }, [map, layer]);

  return null;
}

export function IssueHeatmap() {
  if (!API_KEY) {
    return (
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle>Issue Density Heatmap</CardTitle>
          <CardDescription>A visual representation of where issues are being reported.</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow flex items-center justify-center bg-muted/50 rounded-b-lg">
          <p className="text-center text-muted-foreground">
            Google Maps API Key not configured. <br />
            Please set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>Issue Density Heatmap</CardTitle>
        <CardDescription>A visual representation of where issues are being reported.</CardDescription>
      </CardHeader>
      <CardContent className="p-0 rounded-b-lg overflow-hidden flex-grow">
        <APIProvider apiKey={API_KEY} libraries={['visualization']}>
          <div className="h-[400px] w-full">
            <Map
              defaultCenter={{ lat: 12.9716, lng: 77.5946 }}
              defaultZoom={12}
              gestureHandling={'greedy'}
              disableDefaultUI={true}
              mapId="a3b0f5c1a1f0f0c"
            >
              <HeatmapLayer />
            </Map>
          </div>
        </APIProvider>
      </CardContent>
    </Card>
  );
}
// Hack to get around useMap not being defined in some contexts
function useMap() {
    return (window as any).google?.maps?.Map;
}
