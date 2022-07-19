import { createContext, ReactElement, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// import i18next from '../../../../i18n';
import { useTranslation } from 'react-i18next';

export const TenantContext = createContext({
  tenantID: '',
  setTenantID: (value: string) => '',
});

// const { useTranslation } = i18next;

const TenantContextProvider = ({ children }: any): ReactElement => {
  const { i18n } = useTranslation();
  const [tenantID, setTenantID] = useState('');
  const [language, setlanguage] = useState(
    typeof window !== 'undefined' && localStorage.getItem('language')
      ? localStorage.getItem('language')
      : 'en'
  );
  console.log(language, '1');
  const router = useRouter();

  const { query } = router;

  useEffect(() => {
    if (query.locale) {
      setlanguage(query.locale);
    }
  }, [query.locale]);

  console.log(query.locale);
  console.log(language, '2');

  useEffect(() => {
    console.log(i18n, i18n.isInitialized, 'i18n');
    if (i18n && i18n.isInitialized) {
      i18n.changeLanguage(language);
      console.log(language, '3');
      localStorage.setItem('language', language);
      console.log(language, '4');
    }
  }, [language, query.locale, i18n]);

  useEffect(() => {
    const getTenantID = (query: {}) => {
      if (process.env.TENANTID) {
        return process.env.TENANTID;
      } else if (query.tenant) {
        return query.tenant;
      } else {
        return 'ten_NxJq55pm';
      }
    };
    const tenantId = getTenantID(query);

    setTenantID(tenantId);
  }, [query.tenant]);
  return (
    <TenantContext.Provider value={{ tenantID, setTenantID }}>
      {children}
    </TenantContext.Provider>
  );
};

export default TenantContextProvider;
