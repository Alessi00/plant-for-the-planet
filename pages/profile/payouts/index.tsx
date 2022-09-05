import React, { ReactElement } from 'react';
import UserLayout from '../../../src/features/common/Layout/UserLayout/UserLayout';
import Head from 'next/head';
import ManagePayouts, {
  ManagePayoutSteps,
} from '../../../src/features/user/ManagePayouts';
import i18next from '../../../i18n';

const { useTranslation } = i18next;

export default function OverviewPage(): ReactElement {
  const { t, ready } = useTranslation('me');
  return (
    <UserLayout>
      <Head>
        <title>{ready ? t('managePayouts.titleOverview') : ''}</title>
      </Head>
      <ManagePayouts step={ManagePayoutSteps.OVERVIEW} />
    </UserLayout>
  );
}
