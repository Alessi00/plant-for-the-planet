import { ReactElement } from 'react';
import { useTranslation } from 'next-i18next';
import DownloadCodes from './DownloadCodes';
import { PaymentDetails } from '../../../common/types/payments';
import styles from '../AccountHistory.module.scss';
import { ProjectPurpose, UnitTypes } from '@planet-sdk/common';

interface CertificatesProps {
  recordDetails: PaymentDetails;
  purpose: ProjectPurpose;
  unitType: UnitTypes;
}

export const shouldEnableCertificate = (
  purpose: ProjectPurpose,
  unitType: UnitTypes
) => {
  if (
    purpose === 'conservation' ||
    purpose === 'bouquet' ||
    (purpose === 'trees' && unitType === 'm2')
  ) {
    return false;
  } else {
    return true;
  }
};

export default function Certificates({
  recordDetails,
  purpose,
  unitType,
}: CertificatesProps): ReactElement {
  const { t } = useTranslation(['me']);

  return (
    <>
      {recordDetails?.donorCertificate &&
        shouldEnableCertificate(purpose, unitType) && (
          <div className={styles.singleDetail}>
            <a
              href={recordDetails?.donorCertificate}
              target="_blank"
              rel="noreferrer"
            >
              {t('donorCertificate')}
            </a>
          </div>
        )}
      {recordDetails?.taxDeductibleReceipt && (
        <div className={styles.singleDetail}>
          <a
            href={recordDetails.taxDeductibleReceipt}
            target="_blank"
            rel="noreferrer"
          >
            {t('taxDeductibleReceipt')}
          </a>
        </div>
      )}
      {recordDetails?.giftCertificate &&
        shouldEnableCertificate(purpose, unitType) && (
          <div className={styles.singleDetail}>
            <a
              href={recordDetails.giftCertificate}
              target="_blank"
              rel="noreferrer"
            >
              {t('giftCertificate')}
            </a>
          </div>
        )}
      {recordDetails?.codesUrl && (
        <DownloadCodes codesUrl={recordDetails.codesUrl} />
      )}
    </>
  );
}
