import React from "react";
import Navigation from "../components/Navigation";

import bikeride from "../pictures/bikeride.jpg";
import lobby from "../pictures/lobby.jpg";
import puisto from "../pictures/puisto.jpg";
import responsibility from "../pictures/responsibility.jpg";

import { Container, Row, Col } from "react-bootstrap";

function Matkakertomukset() {
  return (
    <Container fluid>
      <div className="tausta">
        <Row>
          <Col>
            <h1 className="otsikko">MATKAMAAILMA</h1>
            <Navigation />
            <h2 className="tokaOtsikko">MATKAKERTOMUKSIA</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="p-teksti">
              “Matkustin pojan tyttäreni kanssa Egyptiin ja matkamme oli
              ikimuistoinen. Hotelli oli hyvä ja esteetön kulku oli tärkeää
              meille. Emme käyneet paikallisia nähtävyyksiä katsomassa, mutta
              hotelli oli erinomainen. Suosittelen kaikille.”
            </p>
            <label className="label-kolme">Selma, 80-v, eläkkeellä</label>
          </Col>
          <Col>
            <p className="p-teksti">
              "Matkustin mieheni kanssa 5 päivän mittaiselle matkalle
              Tallinnaan, Viroon, ja matkustaminen kohteeseen oli nopeaa ja
              helppoa! Matkallamme näimme eri nähtävyyksiä vanhassa kaupungissa
              ja söimme hyvin paikallisissa ravintoloissa. Myös opastettu matka
              paikalliseen ostoskeskukseen oli erinomainen ja päivä meni siellä
              rattoisasti. Suosittelen lämpimästi kohdetta."
            </p>
            <label className="label-kolme">Sirkka, 69-v, eläkkeellä </label>
          </Col>
        </Row>
        <Row>
          <Row>
            <Col>
              <div className="picture">
                <img
                  src={bikeride}
                  className="picture"
                  alt="bikeride"
                  height="90%"
                  width="80%"
                />
              </div>
            </Col>
            <Col>
              <div className="picture">
                <img
                  src={lobby}
                  className="picture"
                  alt="lobby"
                  height="90%"
                  width="80%"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="p-teksti">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                quam velit, vulputate eu pharetra nec, mattis ac neque. Duis
                vulputate commodo lectus, ac blandit elit tincidunt id. Sed
                rhoncus, tortor sed eleifend tristique, tortor mauris molestie
                elit, et lacinia ipsum quam nec dui. l”
              </p>
              <label className="label-kolme">Erika, 55-v, eläkkeellä</label>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="p-teksti">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                quam velit, vulputate eu pharetra nec, mattis ac neque.
              </p>
              <label className="label-kolme">Paavo, 60-v, eläkkeellä</label>
            </Col>
            <Col>
              <p className="p-teksti">
                “Matkamaailman kautta matkan varaus oli helppoa ja
                yksinkertaista. Saimme varattua unelmieni matkan vaivattomasti
                ja edullisesti Viroon. Suosittelen kaikille!”
              </p>
              <label className="label-kolme">Irma, 75-v, eläkkeellä </label>
            </Col>
          </Row>
          <div className="picture">
            <img
              src={puisto}
              className="picture-center"
              alt="puisto"
              height="90%"
              width="80%"
            />
          </div>
          <label className="label-linkki">
            Tutustu tarkemmin ulkoministeriön ohjeisiin matkustamiseen tämän
            linkin kautta
          </label>
          <a href="https://um.fi/matkustaminen">
            <div className="picture">
              <img
                src={responsibility}
                className="picture-center"
                alt="responsibility"
                height="20%"
                width="30%"
              />
            </div>
          </a>
        </Row>
      </div>
    </Container>
  );
}

export default Matkakertomukset;
