import { Grid } from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react';
import { SpeciesPlanted } from '../SpeciesPlanted';
import { TreePlanted } from '../TreePlanted';
import styles from './index.module.scss';

interface Props {
  setProgress: Dispatch<SetStateAction<number>>;
}

export const Graphs = ({ setProgress }: Props) => {
  return (
    <div className={styles.graphsContainer}>
      <Grid container alignContent="center" justifyContent="center" spacing={2}>
        <Grid item xs={12} md={6}>
          <TreePlanted />
        </Grid>
        <Grid item xs={12} md={6}>
          <SpeciesPlanted />
        </Grid>
      </Grid>
    </div>
  );
};
