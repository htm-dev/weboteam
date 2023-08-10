import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Empty,
  FooterContainer
} from "./styles";
import {useState} from "react";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={12} md={12} sm={14} xs={14}>
            <LogoContainer aria-label="homepage">
              <SvgIcon src="weboteam-logo.svg" width="250px" height="122px" />
            </LogoContainer>
              <Para>{t(`une agence digitale innovante, vous guide vers l'excellence en ligne. Notre passion pour la créativité et la technologie se traduit par des solutions sur mesure qui transcendent les attentes. De la conception web captivante au marketing numérique percutant, nous donnons vie à vos aspirations digitales. Avec Weboteam, votre succès en ligne est notre priorité.`)}</Para>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Empty />
              <Large left="true" to="/">
                {t("Acceuil")}
              </Large>
              <Large onClick={() => scrollTo("services")}>
                {t("Services")}
              </Large>
              <Large onClick={() => scrollTo("clients")}>
                {t("Clients")}
              </Large>
              <Large
                  onClick={() => scrollTo("contact")}
              >{t("Contact")}
              </Large>
            </Col>
            {/*  <Col lg={10} md={10} sm={12} xs={12}>

              <Language>{t("Contact")}</Language>
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <a href="mailto:l.qqbadze@gmail.com">
                <Chat>{t(`Contact`)}</Chat>
              </a>
            </Col>

              <Col lg={6} md={6} sm={12} xs={12}>
              <Label htmlFor="select-lang">{t("Language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="united-kingdom.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("fr")}>
                  <SvgIcon
                    src="french.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Col>
            */}
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="weboteam-logo.svg"
                  aria-label="homepage"
                  width="101px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>

              <SocialLink
                href=""
                src="twitter.svg"
              />
              <SocialLink
                href=""
                src="linkedin.svg"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
