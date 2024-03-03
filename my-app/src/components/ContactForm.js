import { React } from "react";

import "../App.css";

import { Container, Row, Col } from "react-bootstrap";

function ContactForm() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <h3 className="neljasOtsikko">YHTEYDENOTTOLOMAKE</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <form>
                <label className="label-kolmonen" for="fname">
                  Nimi
                </label>
                <br></br>
                <input
                  type="text"
                  name="nimi"
                  placeholder="Nimi"
                  className="tekstit-kaksi"
                />
                <br></br>

                <label className="label-kolmonen" for="number">
                  Puhelinnumero
                </label>
                <br></br>
                <input
                  type="text"
                  name="puhelinnumero"
                  placeholder="Puhelinnumero"
                  className="tekstit-kaksi"
                />
                <br></br>
                <label className="label-kolmonen" for="email">
                  Sähköpostiosoite
                </label>
                <br></br>
                <input
                  type="text"
                  name="sahköpostiosoite"
                  placeholder="Sähköpostiosoite"
                  className="tekstit-kaksi"
                />
                <br></br>
                <label className="label-kolmonen" for="info">
                  Lisätiedot
                </label>
                <br></br>
                <input
                  type="text2"
                  name="lisatiedot"
                  placeholder=""
                  className="tekstit-kaksi"
                />
                <br></br>
                <input type="submit" value="Lähetä"></input>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactForm;
