import { Row, Col} from "react-bootstrap";
import { DiJavascript1, DiLaravel, DiReact } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { RiBootstrapLine, RiVuejsFill } from "react-icons/ri";
import { SiCss3, SiHtml5, SiJquery, SiMysql, SiPhp } from "react-icons/si";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import '@/styles/custom_icons.scss';
import { skillsData } from "@/data/skills";

const skillIcons: Record<string, JSX.Element> = {
  html: <SiHtml5 />,
  css: <SiCss3 />,
  bootstrap: <RiBootstrapLine />,
  javascript: <DiJavascript1 />,
  typescript: <TbBrandTypescript />,
  react: <DiReact />,
  nextjs: <TbBrandNextjs />,
  vuejs: <RiVuejsFill />,
  php: <SiPhp />,
  laravel: <DiLaravel />,
  mysql: <SiMysql />,
  jquery: <SiJquery />,
  docker: <FaDocker />,
};

const Skills = () => (
  <>
    <h2 className="text-center pb-4">
      <strong className="highlighted-text">Habilidades</strong> profesionales
    </h2>

    <Row className="justify-content-center gap-4">
      {
        skillsData.map((skillItem, index) => (
          <Col key={index} xs={4} md={2} className="custom-icons">
            { skillIcons[skillItem.icon] }
            <span className="custom-icons-text pt-1">{ skillItem.title }</span>
          </Col>

        ))
      }
    </Row>
  </>
);

export default Skills;