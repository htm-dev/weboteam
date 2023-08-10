import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";
import {MinPara, MinTitle, ServiceWrapper} from "../ContentBlock/LeftContentBlock/styles";
import {PngIcon} from "../../common/PngIcon";

interface MiddleBlockProps {

  id: string;
  title: string;
  content: string;

  section : any;
  button: string;
  t: any;
}

const MiddleBlock = ({ id,title, content, button,section, t }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MiddleBlockSection  id={id}>
      <Slide direction="up">
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              {button && (
                <Button name="submit" onClick={() => scrollTo("contact")}>
                  {t(button)}
                </Button>
              )}
              <ServiceWrapper>
                <Row justify="space-between">
                  {typeof section === "object" &&
                      section.map((item: any, id: number) => {
                        return (
                            <Col key={id} span={4}>
                              <a href={item.url}>
                                <PngIcon src={item.icon} width="200px" height="100px" />
                              </a>
                              <MinTitle>{t(item.title)}</MinTitle>
                              <MinPara>{t(item.content)}</MinPara>
                            </Col>
                        );
                      })}
                </Row>
              </ServiceWrapper>
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
