import ReCAPTCHA from 'react-google-recaptcha';
import React from 'react';

export const Captcha = (props) => (
  <div>
    <ReCAPTCHA
      sitekey="6Lfa88AZAAAAAONfkyz3htj-em696N4yvYFMpaCw"
      onChange={props.input.onChange}
    />
  </div>
);
