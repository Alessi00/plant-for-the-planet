import { ReactElement } from 'react';
import { Grid, styled } from '@mui/material';
import FormSteps from './FormSteps';

const FormContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: 24,
  borderRadius: 9,
  boxShadow: theme.shadows[1],
}));

interface TabbedViewProps {
  children: React.ReactNode;
  step: number;
}

export default function TabbedView({
  children,
  step,
}: TabbedViewProps): ReactElement {
  return (
    <Grid container className="TabbedView">
      <Grid
        item
        xs={12}
        md={3}
        component={() => <FormSteps step={step} />}
      ></Grid>
      <Grid item xs={12} md={9} component={FormContainer}>
        {children}
      </Grid>
    </Grid>
  );
}