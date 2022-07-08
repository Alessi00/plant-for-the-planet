import { FormControl, NativeSelect } from '@mui/material';
import React, { ReactElement } from 'react';
import PolygonIcon from '../../../../../public/assets/images/icons/PolygonIcon';
import styles from '../../styles/ProjectsMap.module.scss';
import BootstrapInput from '../../../common/InputTypes/BootstrapInput';
import { ProjectPropsContext } from '../../../common/Layout/ProjectPropsContext';
import { useRouter } from 'next/router';
interface Props {}

export default function SitesDropdown(): ReactElement {
  const {
    geoJson,
    selectedSite,
    setSelectedSite,
    isMobile,
    isPolygonMenuOpen,
    setIsPolygonMenuOpen,
  } = React.useContext(ProjectPropsContext);

  const handleChangeSite = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedSite(event.target.value as string);
    if (isMobile) setIsPolygonMenuOpen(false);
  };
  const router = useRouter();
  return (
    <>
      {geoJson.features.length > 1 && (
        <>
          {!isPolygonMenuOpen ? (
            <div
              onMouseOver={() => {
                if (isMobile) setIsPolygonMenuOpen(true);
              }}
              onClick={() => {
                if (!isMobile) setIsPolygonMenuOpen(true);
              }}
              className={router.query.embed === 'true'? styles.embed_projectSitesButton: styles.projectSitesButton}
            >
              <PolygonIcon />
            </div>
          ) : null}
          {isPolygonMenuOpen ? (
            <div className={router.query.embed === 'true'? styles.embed_dropdownContainer: styles.dropdownContainer}>
              <div className={styles.projectSitesDropdown}>
                <FormControl variant="standard">
                  <div className={styles.polygonIcon}>
                    <PolygonIcon />
                  </div>
                  <NativeSelect
                    id="customized-select-native"
                    value={selectedSite}
                    onChange={handleChangeSite}
                    input={<BootstrapInput />}
                  >
                    {geoJson.features.map((site: any, index: any) => {
                      return (
                        <option key={index} value={index}>
                          {site.properties.name}
                        </option>
                      );
                    })}
                  </NativeSelect>
                </FormControl>
              </div>
            </div>
          ) : null}
        </>
      )}
    </>
  );
}
