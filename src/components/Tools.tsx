import { Row, Col } from "react-bootstrap";
import { IoLogoBitbucket } from "react-icons/io";
import { IoLogoGitlab } from "react-icons/io5";
import { SiGithub, SiJira, SiPostman, SiSlack } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import '@/styles/custom_icons.scss';
import { toolsData } from '@/data/tools';

const toolsIcons: Record<string, JSX.Element> = {
  bitbucket: <IoLogoBitbucket />,
  gitlab: <IoLogoGitlab />,
  github: <SiGithub />,
  jira: <SiJira />,
  vscode: <TbBrandVscode />,
  postman: <SiPostman />,
  slack: <SiSlack />,
};

const Tools = () => (
    <>
      <h2 className="text-center pb-4">
        <strong className="highlighted-text">Herramientas</strong> que utilizo
      </h2>

      <Row className="justify-content-center gap-4">
        {
          toolsData.map((toolItem, index) => (
            <Col key={index} xs={4} md={2} className="custom-icons">
              { toolsIcons[toolItem.icon] }
              <span className="custom-icons-text pt-1">{ toolItem.title }</span>
            </Col>

          ))
        }
      </Row>
    </>
);

export default Tools;