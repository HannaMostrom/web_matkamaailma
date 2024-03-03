import React from "react";
import Navigation from "../components/Navigation";
import ContactForm from "../components/ContactForm";

import seaguls from "../pictures/seaguls.jpg";

import { Container, Row, Col } from "react-bootstrap";

function Yhteystiedot() {
  return (
    <Container fluid>
      <div className="tausta">
        <Row>
          <Col>
            <div className="otsikko">MATKAMAAILMA</div>
            <Navigation />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="tokaOtsikko">YHTEYSTIEDOT</h2>
            <p className="p-teksti">
              Kiitos vierailustasi verkkosivustolla! Jos haluat varata matkan,
              voit tehdä sen joko numerosta 0400 123456 tai
              yhteydenottolomakkeen kautta. Arvostamme kaikkia palautteita ja
              palautteita voit tarvittaessa laittaa meille sähköpostitse
              osoitteeseen info@matkamaailma.fi .
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              src={seaguls}
              className="picture-center"
              alt="seaguls"
              height="100%"
              width="60%"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <br></br>
            <br></br>
            <ContactForm />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Yhteystiedot;
