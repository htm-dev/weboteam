import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import "antd/dist/antd.css";
import { FloatingWhatsApp } from 'react-floating-whatsapp';

import Router from "./router";
import i18n from "./translation";
import ReactGA from 'react-ga';
const TRACKING_ID = "G-JMC32DLN7W"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
const App = () => (
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <Router />
        <FloatingWhatsApp    phoneNumber="+212620360331"
                             accountName="Weboteam"
                             avatar = "./img/weboteam.png"
                             allowEsc
                             chatMessage="Bonjour, comment on peut vous aider ?"
                             statusMessage = "Réponse généralement dans l'heure"
                             allowClickAway
                             notification
                             notificationSound />
    </I18nextProvider>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("root"));
