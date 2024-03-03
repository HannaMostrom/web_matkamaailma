import React from "react";
import Navigation from "../components/Navigation";
import hands from "../pictures/hands.jpg";
import boat from "../pictures/boat.jpg";

import { Container, Row, Col } from "react-bootstrap";

function Etusivu() {
  return (
    <Container fluid>
      <div className="tausta">
        <Row>
          <Col>
            <h1 className="otsikko">MATKAMAAILMA</h1>
            <Navigation />
          </Col>
        </Row>
        <div>
          <Row>
            <Col>
              <img
                src={hands}
                className="picture-center"
                alt="hands"
                height="80%"
                width="80%"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 className="etuOtsikko">Tervetuloa Matkamaailman sivuille!</h2>
              <p className="p-teksti">
                On aina ottaa omaa aikaa ja matkustaa kohti uusia seikkailuita!
                Sivustoltamme voit varata matkoja ympäri maailman erilaiset
                tarpeet huomioiden. Matkamme ovat laadukkaita ja helposti
                varattavia. Tarvittaessa voit ottaa yhteyttä meihin ja
                varaukseen liittyen tästä linkistä.
              </p>
              <p className="p-teksti">
                Varaukset ja tarkemmat lisätiedot numerosta 0400 123456,
                sähköpostitse info@matkamaailma.fi tai{" "}
                <a className="linkki" href="/yhteystiedot">
                  yhteydenottolomakkeemme
                </a>{" "}
                kautta.
              </p>{" "}
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                src={boat}
                className="picture-center"
                alt="hands"
                height="80%"
                width="60%"
              />
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default Etusivu;
