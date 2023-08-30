import React from 'react';
import { Marker } from 'react-map-gl';
import styles from '../../styles/ProjectsMap.module.scss';
import ProjectPolygon from './ProjectPolygon';
import { FeatureCollection } from 'geojson';
import {
  ConservationProjectExtended,
  TreeProjectExtended,
} from '@planet-sdk/common/build/types/project/extended';

interface Props {
  siteExists: boolean;
  geoJson: FeatureCollection | null;
  project: TreeProjectExtended | ConservationProjectExtended;
}

export default function Location({ siteExists, geoJson, project }: Props) {
  return (
    <>
      {!siteExists && project ? (
        <Marker
          latitude={project.coordinates.lat}
          longitude={project.coordinates.lon}
          offsetLeft={5}
          offsetTop={-16}
        >
          <div
            style={{ left: '28px' }}
            className={`${styles.marker} ${
              project.purpose === 'conservation'
                ? styles.conservationMarker
                : ''
            }`}
          />
        </Marker>
      ) : (
        geoJson !== null && (
          <ProjectPolygon id="locationPolygon" geoJson={geoJson} />
        )
      )}
    </>
  );
}
