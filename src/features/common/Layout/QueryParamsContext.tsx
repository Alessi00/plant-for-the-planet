import React, { createContext, FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import tenantConfig from '../../../../tenant.config';

const config = tenantConfig();
const tenantSupportedLocale = config.languages;
type QueryParamType = string | undefined | string[] | null;
export interface ParamsContextType {
  embed: QueryParamType;
  showBackIcon: QueryParamType;
  callbackUrl: QueryParamType;
  language: QueryParamType;
  showProjectDetails: QueryParamType;
  showProjectList: QueryParamType;
  email: QueryParamType;
  targetEmail: QueryParamType;
  alertError: boolean;
}
export const ParamsContext = createContext<ParamsContextType>({
  embed: undefined,
  showBackIcon: undefined,
  callbackUrl: undefined,
  language: undefined,
  showProjectDetails: undefined,
  showProjectList: undefined,
  email: '',
  targetEmail: '',
  alertError: false,
});

const QueryParamsProvider: FC = ({ children }) => {
  const { i18n } = useTranslation();

  const [embed, setEmbed] = useState<QueryParamType>(undefined);
  const [showBackIcon, setShowBackIcon] = useState<QueryParamType>(undefined);
  const [callbackUrl, setCallbackUrl] = useState<QueryParamType>(undefined);
  const [language, setLanguage] = useState<QueryParamType>(
    typeof window !== 'undefined' && localStorage.getItem('language')
      ? localStorage.getItem('language')
      : 'en'
  );

  const [showProjectDetails, setShowProjectDetails] =
    useState<QueryParamType>(undefined);
  const [showProjectList, setShowProjectList] =
    useState<QueryParamType>(undefined);
  const router = useRouter();
  const { query } = router;
  const [email, setEmail] = useState('');
  const [targetEmail, setTargetEmail] = useState('');
  const [alertError, setAlertError] = React.useState<boolean>(false);

  useEffect(() => {
    if (query.embed) setEmbed(query.embed);
  }, [query.embed]);

  useEffect(() => {
    if (query.back_icon) setShowBackIcon(query.back_icon);
  }, [query.back_icon]);

  useEffect(() => {
    if (query.callback) setCallbackUrl(query.callback);
  }, [query.callback]);

  useEffect(() => {
    if (localStorage.getItem('language') === null) {
      const userBrowserLanguage = navigator.language ?? navigator.languages[0];
      // checks whether tenant supported locale matches the user browser preference locale
      const languageMatched = tenantSupportedLocale.find((locale) => {
        return (
          locale[0] + locale[1] ===
          userBrowserLanguage[0] + userBrowserLanguage[1]
        );
      });

      if (languageMatched !== undefined) {
        localStorage.setItem('language', languageMatched);
        setLanguage(languageMatched);
        i18n.changeLanguage(languageMatched);
      } else {
        localStorage.setItem('language', 'en');
        setLanguage('en');
        i18n.changeLanguage('en');
      }
    }
  }, [tenantSupportedLocale]);

  useEffect(() => {
    if (query.project_details === 'true' || query.project_details === 'false')
      setShowProjectDetails(query.project_details);
  }, [query.project_details]);

  useEffect(() => {
    if (query.project_list === 'true' || query.project_list === 'false')
      setShowProjectList(query.project_list);
  }, [query.project_list]);

  useEffect(() => {
    if (i18n && i18n.isInitialized && language) {
      i18n.changeLanguage(language as string);
      /* localStorage.setItem('language', language as string); */ //not needed as i18n handles setting the local storage
    }
  }, [language, i18n.isInitialized]);
  const fetchEmail = () => {
    const emailFromLocal = localStorage.getItem('targetEmail');
    if (emailFromLocal) setEmail(emailFromLocal);
  };
  useEffect(() => {
    fetchEmail();
  }, [targetEmail]);
  return (
    <ParamsContext.Provider
      value={{
        alertError,
        setAlertError,
        email,
        setEmail,
        targetEmail,
        setTargetEmail,
        embed,
        showBackIcon,
        callbackUrl,
        language,
        showProjectDetails,
        showProjectList,
      }}
    >
      {children}
    </ParamsContext.Provider>
  );
};

export default QueryParamsProvider;
