import React, {useEffect, useState} from 'react';
import {Row, Col} from "antd";
import Know from "../../../../assets/img/png/APARENTE-conocete.png";
import Plan from "../../../../assets/img/png/APARENTE-planea.png";
import Launch from "../../../../assets/img/png/APARENTE-lanza.png";
import Analyze from "../../../../assets/img/png/APARENTE-analiza.png";
import Arrow1 from "../../../../assets/img/png/APARENTE-flecha-1.png";
import Arrow2 from "../../../../assets/img/png/APARENTE-flecha-2.png";
import Arrow3 from "../../../../assets/img/png/APARENTE-flecha-3.png";
import Arrow4 from "../../../../assets/img/png/APARENTE-flecha-4.png";

import "./Process.scss";

export default function Process() {
    const [width, setWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        window.addEventListener("resize",updateWidth);
        return () => 
            window.removeEventListener("resize", updateWidth);
    });

    const updateWidth = () => {
        setWidth(window.innerWidth);
    };
    
    
    return (
        <>
        <Row className = "process-title">
            <Col lg = {4} md = {0}/>
            <Col lg = {16} md = {24}>
                <h2>Tu proceso<span>_</span></h2>
            </Col>
            <Col lg = {4} md = {0}/>
        </Row>
        <Row className = "process-know" >
            <Col lg = {2} md = {0}/>
            <Col lg = {8} md = {0}/>
            <Col lg = {4} md = {24}>
                <img alt = "Conócete" src = {Know}  /> 
            </Col>
            <Col lg = {8} md = {24} className = "know-description">
                <h4>Conócete<span>_</span></h4>
                <p>Una buena estrategia de imagen se basa en ti, tu personalidad y tus objetivos.</p>
            </Col>
            <Col lg = {2} md = {0}/>
        </Row>
        {width > 970 ?
            <Row className = "arrow-1" >
            <Col lg = {4} />
            <Col lg = {16} >
                <img alt = "Flecha hacia abajo" src = {Arrow1} />
            </Col>
            <Col lg = {4} />
            </Row> : null}
        <Row className = "process-plan" >
            <Col lg = {2} md = {0} />
            <Col lg = {8} md = {0} />
            <Col lg = {4} md = {24}>
                <img alt = "Planea" src = {Plan} />
            </Col>
            <Col lg = {8} md = {24} className = "plan-description">
                <h4>Planea<span>_</span></h4>
                <p>Planeamos cada detalle para crear una imagen sólida y convincente.</p>
            </Col>
            <Col lg = {2} md = {0}/>
        </Row>
        {width > 970 ? 
            <Row className = "arrow-2" >
                <Col lg = {2} />
                <Col lg = {8} className = "arrow-left">
                    <img  alt = "Flecha" src = {Arrow4} />
                </Col> 
                <Col lg = {4} />
                <Col lg = {8} className = "arrow-right">
                    <img alt = "Flecha" src = {Arrow2}  />
                </Col>
                <Col lg = {2} />
            </Row> : null }
        
        {width > 970 ? 
            <Row className = "process-launch-analyze" >
            <Col lg = {2} />
            <Col lg = {4} className = "analyze-description">
                <h4>Analiza<span>_</span></h4>
                <p>Analizamos la efectividad de las estrategias y tomamos decisiones basadas en datos.</p>
            </Col>
            <Col lg = {4} className = "analyze">
            <img  alt = "Analiza" src = {Analyze} />
            </Col> 
            <Col lg = {4} />
            <Col lg = {4} className = "launch">
            <img alt = "Lanza" src = {Launch}  />
            </Col>
            <Col lg = {4} className = "launch-description" >
                <h4>Lanza<span>_</span></h4>
                <p>Te guiamos en la aplicación de todas las estrategias propuestas.</p>
            </Col>
            <Col lg = {2} />
        </Row> : 
        <Row className = "process-launch-analyze">
            <Col md = {24} sm = {24} xs = {24} className = "analyze">
                <img  alt = "Analiza" src = {Analyze} />
            </Col>
            <Col md = {24} sm = {24} xs = {24} className = "analyze-description">
                <h4>Analiza<span>_</span></h4>
                <p>Analizamos la efectividad de las estrategias y tomamos decisiones basadas en datos.</p>
            </Col>
            <Col md = {24} sm = {24} xs = {24} className = "launch">
                <img alt = "Lanza" src = {Launch}  />
            </Col>
            <Col md = {24} sm = {24} xs = {24} className = "launch-description">
                <h4>Lanza<span>_</span></h4>
                <p>Te guiamos en la aplicación de todas las estrategias propuestas.</p>
            </Col>
        </Row>}
        {width > 970 ? 
            <Row className = "arrow-3" >
                <Col lg = {4} />
                <Col lg = {16}>
                    <img alt = "Flecha" src = {Arrow3} />
                </Col>
                <Col lg = {4} />
            </Row> : null
        }
        
        </>
    )
}
