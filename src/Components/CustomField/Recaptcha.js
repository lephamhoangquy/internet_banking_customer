import ReCAPTCHA from 'react-google-recaptcha';
import React from 'react';

export const Captcha = (props) => (
  <div>
    <ReCAPTCHA
      sitekey="6LeGB6cZAAAAAOfWy6JHUfKAZvziD3WpnUG05sh-"
      onChange={props.input.onChange}
    />
  </div>
);
