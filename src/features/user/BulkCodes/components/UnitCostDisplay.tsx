import { ReactElement } from 'react';
import { TextField, styled } from 'mui-latest';
import i18next from '../../../../../i18n';

const { useTranslation } = i18next;

const UnitCostDisplayGroup = styled('div')({
  display: 'flex',
  gap: 16,
});

interface UnitCostDisplayProps {
  unitCost: number;
  currency: string;
  unit: 'tree' | 'm2' | 'ha';
}

const UnitCostDisplay = ({
  unitCost,
  currency,
  unit,
}: UnitCostDisplayProps): ReactElement | null => {
  const { t, ready } = useTranslation(['bulkCodes']);

  if (ready) {
    return (
      <UnitCostDisplayGroup className="UnitCostDisplay">
        <TextField
          label={t('bulkCodes:costPerUnit')}
          value={`${unitCost} ${currency}`}
          inputProps={{ readOnly: true }}
          disabled
        ></TextField>
        <TextField
          label={t('bulkCodes:unitOfMeasurement')}
          value={unit}
          inputProps={{ readOnly: true }}
          disabled
        ></TextField>
      </UnitCostDisplayGroup>
    );
  }
  return null;
};

export default UnitCostDisplay;
