import React from 'react';
import { IconProps } from '../../../../../src/features/common/types/common';

function DonateIcon({ color }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill={color ? color : '#000'}
        d="M10 16.25a8.124 8.124 0 008.125-8.125A8.124 8.124 0 0010 0a8.124 8.124 0 00-8.125 8.125A8.124 8.124 0 0010 16.25zM9.133 3.805v-.657A.647.647 0 019.78 2.5h.434a.646.646 0 01.648.648v.664a3.08 3.08 0 011.68.602.437.437 0 01.047.668l-.637.606c-.148.144-.371.148-.547.039-.208-.132-.449-.201-.695-.2H9.19c-.351 0-.636.32-.636.715 0 .32.195.606.472.688l2.434.73c1.004.3 1.707 1.266 1.707 2.348 0 1.328-1.031 2.402-2.309 2.437v.657a.648.648 0 01-.648.648h-.434a.647.647 0 01-.648-.648v-.665a3.08 3.08 0 01-1.68-.601.438.438 0 01-.047-.668l.637-.605c.149-.145.371-.149.547-.04.208.132.45.201.695.2h1.52c.351 0 .636-.32.636-.715 0-.32-.195-.606-.472-.688L8.53 8.59c-1.004-.3-1.707-1.266-1.707-2.348.004-1.328 1.031-2.402 2.309-2.437z"
        opacity="0.4"
      ></path>
      <path
        fill={color ? color : '#000'}
        d="M8.531 8.59l2.434.73c.277.082.473.367.473.688 0 .394-.286.715-.637.715H9.28a1.286 1.286 0 01-.695-.2c-.176-.109-.399-.105-.547.04l-.637.605a.438.438 0 00.047.668 3.08 3.08 0 001.68.601v.665a.647.647 0 00.648.648h.434a.647.647 0 00.648-.648v-.657c1.278-.035 2.309-1.11 2.309-2.437 0-1.082-.703-2.047-1.707-2.348l-2.434-.73c-.277-.082-.472-.367-.472-.688 0-.394.285-.715.636-.715h1.52c.246-.001.487.068.695.2.176.109.399.105.547-.04l.637-.605a.438.438 0 00-.047-.668 3.08 3.08 0 00-1.68-.601v-.665a.645.645 0 00-.648-.648H9.78a.647.647 0 00-.648.648v.657c-1.278.035-2.305 1.11-2.309 2.437 0 1.082.703 2.047 1.707 2.348zm10.219 5.16h-1.27a9.468 9.468 0 01-2.851 2.5h2.492c.207 0 .375.14.375.313v.625c0 .171-.168.312-.375.312H2.875c-.207 0-.375-.14-.375-.313v-.625c0-.171.168-.312.375-.312h2.492a9.514 9.514 0 01-2.851-2.5H1.25A1.25 1.25 0 000 15v3.75A1.25 1.25 0 001.25 20h17.5A1.25 1.25 0 0020 18.75V15a1.25 1.25 0 00-1.25-1.25z"
      ></path>
    </svg>
  );
}

export default DonateIcon;
