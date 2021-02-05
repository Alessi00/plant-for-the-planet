import React, { ReactElement } from 'react';
import BackArrow from '../../../../public/assets/images/icons/headerIcons/BackArrow';
import PaymentProgress from '../../common/ContentLoaders/Donations/PaymentProgress';
import { PaymentDetailsProps } from '../../common/types/donations';
import styles from './../styles/PaymentDetails.module.scss';
import {  createDonationFunction, payDonationFunction } from '../components/PaymentFunctions';
import i18next from '../../../../i18n';
import getFormatedCurrency from '../../../utils/countryCurrency/getFormattedCurrency';
import { getFormattedNumber } from '../../../utils/getFormattedNumber';
import { paypalCurrencies } from '../../../utils/paypalCurrencies';
import CardPayments from '../components/paymentMethods/CardPayments';
import { Elements } from '@stripe/react-stripe-js';
import getStripe from '../../../utils/stripe/getStripe';
import PaymentMethodTabs from '../components/paymentMethods/PaymentMethodTabs';
import SepaPayments from '../components/paymentMethods/SepaPayments';
import PaypalPayments from '../components/paymentMethods/PaypalPayments';
import GiroPayPayments from '../components/paymentMethods/GiroPayPayments';

const { useTranslation } = i18next;

function PaymentDetails({
  paymentSetup,
  project,
  treeCount,
  treeCost,
  currency,
  setDonationStep,
  contactDetails,
  isGift,
  giftDetails,
  paymentType,
  setPaymentType,
  country,
  isTaxDeductible,
  token,
  donationID,
  setDonationID
}: PaymentDetailsProps): ReactElement {
  const { t, i18n, ready } = useTranslation(['donate', 'common']);

  const [isPaymentProcessing, setIsPaymentProcessing] = React.useState(false);

  React.useEffect(() => {
    setPaymentType('CARD');
  }, []);

  const [paymentError, setPaymentError] = React.useState('');

  const [donorDetails,setDonorDetails] =React.useState({})

  React.useEffect(() => {
    let donorDetails = {
      firstname: contactDetails.firstName,
      lastname: contactDetails.lastName,
      email: contactDetails.email,
      address: contactDetails.address,
      zipCode: contactDetails.zipCode,
      city: contactDetails.city,
      country: contactDetails.country,
      companyname: contactDetails.companyName,
    };
    setDonorDetails(donorDetails);
    createDonationFunction({
      isTaxDeductible, 
      country, 
      project, 
      treeCost, 
      treeCount,
      currency,
      donorDetails,
      isGift,
      giftDetails,
      setIsPaymentProcessing,
      setPaymentError,
      setDonationID,
      token
    });

    // This array needs to be verified
  }, [paymentSetup,treeCount, treeCost,contactDetails,isGift, giftDetails, isTaxDeductible ])
//paymentSetup, treeCount, treeCost, donorDetails, isGift, giftDetails, isTaxDeductible


  const onSubmitPayment = ( gateway:any, paymentMethod:any)=>{
    payDonationFunction ({
      gateway,
      paymentMethod,
      setIsPaymentProcessing,
      setPaymentError,
      t,
      paymentSetup,
      donationID,
      token,
      setDonationStep,
      donorDetails
    })
  }  

  return ready ? (
    isPaymentProcessing ? (
      <PaymentProgress isPaymentProcessing={isPaymentProcessing} />
    ) : (
        <div className={styles.container}>
          <div className={styles.header}>
            <button id={'backArrowPayment'}
              onClick={() => setDonationStep(2)}
              className={styles.headerBackIcon}
            >
              <BackArrow />
            </button>
            <div className={styles.headerTitle}>{t('donate:paymentDetails')}</div>
          </div>

          {paymentError && (
            <div className={styles.paymentError}>{paymentError}</div>
          )}

          <div className={styles.finalTreeCount}>
            <div className={styles.totalCost}>
              {getFormatedCurrency(i18n.language, currency, treeCount * treeCost)}
            </div>
            <div className={styles.totalCostText}>
              {t('donate:fortreeCountTrees', {
                treeCount: getFormattedNumber(i18n.language, Number(treeCount)),
              })}
            </div>
          </div>

          <PaymentMethodTabs 
            paymentType={paymentType} 
            setPaymentType={setPaymentType} 
            showGiroPay={country === 'DE'} 
            showPaypal={paypalCurrencies.includes(currency) && paymentSetup?.gateways.paypal} 
            />
          <div
            role="tabpanel"
            hidden={paymentType !== 'CARD'}
            id={`payment-methods-tabpanel-${'CARD'}`}
            aria-labelledby={`scrollable-force-tab-${'CARD'}`}
          >
            <Elements
              stripe={getStripe(paymentSetup)}>
              <CardPayments onPaymentFunction={(data) => onSubmitPayment('stripe', data)} paymentType={paymentType} setPaymentType={setPaymentType} />
            </Elements>
          </div>

          {/* SEPA */}
          <div
            role="tabpanel"
            hidden={paymentType !== 'SEPA'}
            id={`payment-methods-tabpanel-${'SEPA'}`}
            aria-labelledby={`scrollable-force-tab-${'SEPA'}`}
          >
            <Elements
              stripe={getStripe(paymentSetup)}>
              <SepaPayments
                paymentType={paymentType}
                onPaymentFunction={onSubmitPayment}
                contactDetails={contactDetails}
              />
            </Elements>
          </div>

          {/* Paypal */}
          <div
            role="tabpanel"
            hidden={paymentType !== 'Paypal'}
            id={`payment-methods-tabpanel-${'Paypal'}`}
            aria-labelledby={`scrollable-force-tab-${'Paypal'}`}
          >
            {paymentType === 'Paypal' && (
              <PaypalPayments
              paymentSetup={paymentSetup}
              treeCount={treeCount}
              treeCost={treeCost}
              currency={currency}
              donationID={donationID}
              payDonationFunction={onSubmitPayment}
            />
            )}
            
          </div>
          <div
            role="tabpanel"
            hidden={paymentType !== 'Jiro'}
            id={`payment-methods-tabpanel-${'Jiro'}`}
            aria-labelledby={`scrollable-force-tab-${'Jiro'}`}
          >
            <Elements
              stripe={getStripe(paymentSetup)}>
                <GiroPayPayments
                  contactDetails={contactDetails}
                  onSubmitPayment={onSubmitPayment}
                  paymentSetup={paymentSetup}
                />
              </Elements>
            
            </div>

        </div>
      )
  ) : <></>;
}

export default PaymentDetails;
