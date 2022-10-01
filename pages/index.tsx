import { useRouter } from 'next/router';
import React from 'react';
import ProjectsList from '../src/features/projects/screens/Projects';
import GetAllProjectsMeta from '../src/utils/getMetaTags/GetAllProjectsMeta';
import getStoredCurrency from '../src/utils/countryCurrency/getStoredCurrency';
import { getRequest } from '../src/utils/apiRequests/api';
import { ProjectPropsContext } from '../src/features/common/Layout/ProjectPropsContext';
import Credits from '../src/features/projects/components/maps/Credits';
import Filters from '../src/features/projects/components/projects/Filters';
import { ParamsContext } from '../src/features/common/Layout/QueryParamsContext';
import { ErrorHandlingContext } from '../src/features/common/Layout/ErrorHandlingContext';
import DirectGift from '../src/features/donations/components/DirectGift';
import { DEFAULT_TENANT } from '../src/utils/constants/environment';
import i18next from '../i18n';

interface Props {
  initialized: Boolean;
  currencyCode: any;
  setCurrencyCode: Function;
}

export default function Donate({
  initialized,
  currencyCode,
  setCurrencyCode,
}: Props) {
  const {
    projects,
    setProject,
    setProjects,
    setShowSingleProject,
    showProjects,
    setShowProjects,
    setsearchedProjects,
    setZoomLevel,
    filteredProjects,
  } = React.useContext(ProjectPropsContext);
  const { handleError } = React.useContext(ErrorHandlingContext);
  const { tenantID } = React.useContext(ParamsContext);
  const { useTranslation } = i18next;
  const { i18n } = useTranslation();
  const router = useRouter();
  const [internalCurrencyCode, setInternalCurrencyCode] = React.useState('');
  const [directGift, setDirectGift] = React.useState(null);
  const [showdirectGift, setShowDirectGift] = React.useState(true);
  const [internalLanguage, setInternalLanguage] = React.useState('');

  React.useEffect(() => {
    const getdirectGift = localStorage.getItem('directGift');
    if (getdirectGift) {
      setDirectGift(JSON.parse(getdirectGift));
    }
  }, []);

  React.useEffect(() => {
    if (directGift) {
      if (directGift.show === false) {
        setShowDirectGift(false);
      }
    }
  }, [directGift]);

  // Deprecation Notice: This route will be removed in next major version
  React.useEffect(() => {
    if (router.query.p) {
      router.push('/[p]', `/${router.query.p}`, {
        shallow: true,
      });
    }
  }, [router]);

  React.useEffect(() => {
    setShowSingleProject(false);
    setProject(null);
    setZoomLevel(1);
  }, []);

  // Load all projects
  React.useEffect(() => {
    async function loadProjects() {
      if (
        !internalCurrencyCode ||
        currencyCode !== internalCurrencyCode ||
        internalLanguage !== i18n.language ||
        tenantID
      ) {
        {
          const currency = getStoredCurrency();
          setInternalCurrencyCode(currency);
          setCurrencyCode(currency);
          setInternalLanguage(i18n.language);
          const projects = await getRequest(
            `/app/projects`,
            handleError,
            '/',
            {
              _scope: 'map',
              currency: currency,
              tenant: tenantID || DEFAULT_TENANT,
              'filter[purpose]': 'trees,conservation',
              locale: i18n.language,
            },
            undefined,
            tenantID
          );
          setProjects(projects);
          setProject(null);
          setShowSingleProject(false);
          setZoomLevel(1);
        }
      }
    }
    if (tenantID || DEFAULT_TENANT) {
      loadProjects();
    }
  }, [DEFAULT_TENANT, tenantID, currencyCode, i18n.language]);

  const ProjectsProps = {
    projects: filteredProjects,
    showProjects,
    setShowProjects,
    setsearchedProjects,
    currencyCode,
    setCurrencyCode,
  };

  const GiftProps = {
    setShowDirectGift,
    directGift,
  };

  return (
    <>
      {initialized ? (
        filteredProjects && initialized ? (
          <>
            <GetAllProjectsMeta />
            <ProjectsList {...ProjectsProps} />
            {directGift ? (
              showdirectGift ? (
                <DirectGift {...GiftProps} />
              ) : null
            ) : null}
            <Credits setCurrencyCode={setCurrencyCode} />
          </>
        ) : (
          <></>
        )
      ) : null}
      {showProjects && <Filters />}
    </>
  );
}
