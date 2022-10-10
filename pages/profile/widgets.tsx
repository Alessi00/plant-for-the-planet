import { useRouter } from 'next/router';
import React, { ReactElement, useEffect } from 'react';
import { getTenantID } from '../../src/utils/apiRequests/compareTenanID';
import { UserPropsContext } from '../../src/features/common/Layout/UserPropsContext';
import UserLayout from '../../src/features/common/Layout/UserLayout/UserLayout';
import EmbedModal from '../../src/features/user/Widget/EmbedModal';
import styles from './../../src/features/common/Layout/UserLayout/UserLayout.module.scss';
import Head from 'next/head';
import i18next from '../../i18n';
import { ParamsContext } from '../../src/features/common/Layout/QueryParamsContext';

const { useTranslation } = i18next;

function ProfilePage(): ReactElement {
  const { t } = useTranslation('me');
  // External imports

  const { user, contextLoaded } = React.useContext(UserPropsContext);
  const { tenantID } = React.useContext(ParamsContext);
  const resultantTenantID = getTenantID(tenantID);

  // Internal states
  const [profile, setProfile] = React.useState<null | Object>();

  useEffect(() => {
    if (user && contextLoaded) {
      setProfile(user);
    }
  }, [contextLoaded, user]);

  const [embedModalOpen, setEmbedModalOpen] = React.useState(false);

  const embedModalProps = { embedModalOpen, setEmbedModalOpen, user };

  React.useEffect(() => {
    if (user && user.isPrivate) {
      setEmbedModalOpen(true);
    }
  }, [user]);

  // TO DO - change widget link
  return (
    <UserLayout>
      <Head>
        <title>{t('widgets')}</title>
      </Head>
      {user?.isPrivate === false ? (
        <div className="profilePage" style={{ padding: '0px' }}>
          <iframe
            src={`${process.env.WIDGET_URL}?user=${user.id}&tenantkey=${resultantTenantID}`}
            className={styles.widgetIFrame}
          />
        </div>
      ) : (
        <EmbedModal {...embedModalProps} />
      )}
    </UserLayout>
  );
}

export default ProfilePage;
