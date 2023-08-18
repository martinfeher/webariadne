import React from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const App = ({ Component, pageProps }) => {

  return (
    <>
      <GoogleReCaptchaProvider
      reCaptchaKey=process.env.RECAPTCH_SITE_KEY
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
      >
        <Component {...pageProps} />
      </GoogleReCaptchaProvider>
    </>
  );
};

export default App;