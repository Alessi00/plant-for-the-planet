import { Modal } from '@mui/material';
import React, { ReactElement } from 'react';
import InfoIcon from '../../../../../public/assets/images/icons/InfoIcon';
import styles from './Stats.module.scss';
import StatsInfoModal from './StatsInfoModal';
import { useTranslation } from 'next-i18next';
import { localizedAbbreviatedNumber } from '../../../../utils/getFormattedNumber';
import { ThemeContext } from '../../../../theme/themeContext';

interface Props {
  tenantScore: any;
}
export default function Stats({ tenantScore }: Props): ReactElement {
  const [infoExpanded, setInfoExpanded] = React.useState(null);
  const { t, i18n, ready } = useTranslation([
    'leaderboard',
    'common',
    'planet',
  ]);
  const [openModal, setModalOpen] = React.useState(false);
  const handleModalClose = () => {
    setModalOpen(false);
  };

  const { theme } = React.useContext(ThemeContext);
  return ready ? (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.statCard}>
          <h2 className={styles.statNumber}>
            {localizedAbbreviatedNumber(i18n.language, Number(63356788), 2)}
          </h2>
          <h3 className={styles.statText}>{t('planet:treesDonated')}</h3>
          <button
            id={'donatedStats'}
            onClick={() => {
              setInfoExpanded('donated');
              setModalOpen(true);
            }}
            className={styles.statInfo}
          >
            <InfoIcon color="#000" />
          </button>
        </div>
        <div className={styles.statCard}>
          <h2 className={styles.statNumber}>
            {localizedAbbreviatedNumber(
              i18n.language,
              Number(tenantScore.total),
              2
            )}
          </h2>
          <h3 className={styles.statText}>{t('planet:plantedGlobally')}</h3>
          <button
            id={'globalStats'}
            onClick={() => {
              setInfoExpanded('global');
              setModalOpen(true);
            }}
            className={styles.statInfo}
          >
            <InfoIcon color="#000" />
          </button>
        </div>
        <div className={styles.statCard}>
          <h2
            className={styles.statNumber}
            style={{ color: styles.dangerColor }}
          >
            {localizedAbbreviatedNumber(i18n.language, Number(10000000000), 2)}
          </h2>
          <h3 className={styles.statText}>{t('planet:forestLoss')}</h3>
          <button
            id={'lossStats'}
            onClick={() => {
              setInfoExpanded('loss');
              setModalOpen(true);
            }}
            className={styles.statInfo}
          >
            <InfoIcon color="#000" />
          </button>
        </div>
      </div>
      {infoExpanded !== null ? (
        <Modal
          className={'modalContainer' + ' ' + theme}
          open={openModal}
          onClose={handleModalClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <StatsInfoModal
            infoExpanded={infoExpanded}
            setInfoExpanded={setInfoExpanded}
            setModalOpen={setModalOpen}
          />
        </Modal>
      ) : null}
    </div>
  ) : (
    <></>
  );
}
