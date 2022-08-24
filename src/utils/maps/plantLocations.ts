import { FlyToInterpolator, WebMercatorViewport } from 'react-map-gl';
import * as d3 from 'd3-ease';
import * as turf from '@turf/turf';
import { getRequest } from '../apiRequests/api';
import { ParamsContext } from '../../features/common/Layout/QueryParamsContext';


export function zoomToPlantLocation(
  geoJson: Object,
  viewport: Object,
  isMobile: boolean,
  setViewPort: Function,
  duration = 1200
) {
  if (viewport.width && viewport.height) {
    const bbox = turf.bbox(geoJson);
    const { longitude, latitude, zoom } = new WebMercatorViewport(
      viewport
    ).fitBounds(
      [
        [bbox[0], bbox[1]],
        [bbox[2], bbox[3]],
      ],
      {
        padding: {
          top: 50,
          bottom: isMobile ? 120 : 50,
          left: isMobile ? 50 : 400,
          right: isMobile ? 50 : 100,
        },
      }
    );
    const newViewport = {
      ...viewport,
      longitude,
      latitude,
      zoom,
      transitionDuration: duration,
      transitionInterpolator: new FlyToInterpolator(),
      transitionEasing: d3.easeCubic,
    };
    setViewPort(newViewport);
  } else {
    const newViewport = {
      ...viewport,
      height: window.innerHeight,
      width: window.innerWidth,
    };
    setViewPort(newViewport);
  }
}

export async function getAllPlantLocations(
  project: string,
  handleError: Function,
  tenantID: string
) {
    const result = await getRequest(
    `/app/plantLocations/${project}`,
    handleError,
    '/',
    {
      _scope: 'extended',
    },
    '1.0.4',
    tenantID
  );
  if (result) {
    return result;
  } else {
    return null;
  }
}
