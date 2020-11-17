import Modal from '@material-ui/core/Modal';
import { Elements } from '@stripe/react-stripe-js';
import React, { ReactElement, Ref } from 'react';
import Sugar from 'sugar';
import getImageUrl from '../../../utils/getImageURL';
import getStripe from '../../../utils/stripe/getStripe';
import { ThemeContext } from '../../../theme/themeContext';
import DonationsPopup from '../../donations';
import i18next from '../../../../i18n/'
import getFormatedCurrency from '../../../utils/countryCurrency/getFormattedCurrency';

const { useTranslation } = i18next;
interface Props {
  project: any;
  open: boolean;
  handleOpen: Function;
  handleClose: Function;
  buttonRef: any;
  popupRef: any;
}

export default function PopupProject({
  project,
  open,
  handleOpen,
  handleClose,
  buttonRef,
  popupRef,
}: Props): ReactElement {
  const { t, i18n } = useTranslation(['donate', 'common', 'country']);
  const { theme } = React.useContext(ThemeContext);

  const ImageSource = project.properties.image
    ? getImageUrl('project', 'medium', project.properties.image)
    : '';
  const progressPercentage =
    (project.properties.countPlanted / project.properties.countTarget) * 100 +
    '%';

  const projectDetails = project.properties;

  return (
    <>
      <Modal
        ref={popupRef}
        className={'modal theme'}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Elements stripe={getStripe()}>
          <DonationsPopup project={projectDetails} onClose={handleClose} />
        </Elements>
      </Modal>
      <div className={'projectImage'}>
        {project.properties.image &&
        typeof project.properties.image !== 'undefined' ? (
          <div
            className={'projectImageFile'}
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0.4), rgba(0,0,0,0), rgba(0,0,0,0)),url(${ImageSource})`,
              backgroundPosition: 'center',
            }}
          ></div>
        ) : null}

        <div className={'projectImageBlock'}>
          {/* <div className={'projectType}>
                {GetProjectClassification(project.properties.classification)}
              </div> */}

          <div className={'projectName'}>
            {Sugar.String.truncate(project.properties.name, 54)}
          </div>
        </div>
      </div>

      <div className={'progressBar'}>
        <div
          className={'progressBarHighlight'}
          style={{ width: progressPercentage }}
        />
      </div>
      <div className={'projectInfo'}>
        <div className={'projectData'}>
          <div className={'targetLocation'}>
            <div className={'target'}>
              {Sugar.Number.abbr(Number(project.properties.countPlanted), 1)}{' '}
              {t('common:planted')} •{' '}
              <span style={{ fontWeight: 400 }}>
              {t('country:' + project.properties.country.toLowerCase())}
              </span>
            </div>
          </div>
          <div className={'projectTPOName'}>
            {t('common:by', {
              tpoName: project.properties.tpo.name
            })}
          </div>
        </div>
        {project.properties.allowDonations && (
          <div className={'projectCost'}>
            {project.properties.treeCost ? (
              <>
                <div
                  ref={buttonRef}
                  onClick={handleOpen}
                  className={'donateButton'}
                >
                  {t('common:donate')}
                </div>
                <div className={'perTreeCost'}>
                  {getFormatedCurrency(
                    i18n.language,
                    project.properties.currency,
                    project.properties.treeCost
                  )}{' '}
                  <span>{t('donate:perTree')}</span>
                </div>
              </>
            ) : null}
          </div>
        )}
      </div>
    </>
  );
}
