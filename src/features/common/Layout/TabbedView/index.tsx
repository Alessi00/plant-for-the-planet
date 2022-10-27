import { ReactElement, useEffect, useState } from 'react';
import { Grid, styled } from '@mui/material';
import TabSteps from './TabSteps';
import { TabItem } from './TabbedViewTypes';

const TabContainer = styled('div')(() => ({
  backgroundColor: 'inherit',
  borderRadius: 9,
  boxShadow: 'none',
  alignItems: 'center',
  display: 'flex',
  '&.TabContainer': {
    flexDirection: 'column',
    gap: 16,
    '& .loadingButton': {
      minWidth: 150,
    },
  },
}));

interface TabbedViewProps {
  children: React.ReactNode;
  step: number | string;
  tabItems: TabItem[];
}

export default function TabbedView({
  children,
  step,
  tabItems,
}: TabbedViewProps): ReactElement {
  const [isStepFound, setIsStepFound] = useState(false);
  const [stepToRender, setStepToRender] = useState<string | number | false>(
    false
  );

  useEffect(() => {
    // sets value for Tabs component only if the specified step is within the list of tabs
    if (tabItems && tabItems.length > 0)
      setIsStepFound(tabItems.some((tabItem) => tabItem.step === step));
  }, [step, tabItems]);

  useEffect(() => {
    setStepToRender(step);
  }, [isStepFound]);

  return (
    <Grid container className="TabbedView">
      <Grid
        item
        xs={12}
        md={3}
        component={() => <TabSteps step={stepToRender} tabItems={tabItems} />}
      ></Grid>
      <Grid
        item
        xs={12}
        md={9}
        component={TabContainer}
        className={'TabContainer'}
      >
        {children}
      </Grid>
    </Grid>
  );
}
