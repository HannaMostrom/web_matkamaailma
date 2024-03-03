import React from "react";
import Navigation from "../components/Navigation";
import ContactForm from "../components/ContactForm";
import woman from "../pictures/woman.jpg";
import hotelroom from "../pictures/hotelroom.jpg";
import pyramids from "../pictures/pyramids.jpg";
import restaurant from "../pictures/restaurant.jpg";
import drink from "../pictures/drink.jpg";

import { Container, Row, Col } from "react-bootstrap";

function Varaussivu() {
  return (
    <Container fluid>
      <div className="tausta">
        <Row>
          <Col>
            <h1 className="otsikko">MATKAMAAILMA</h1>
            <Navigation />
            <h2 className="tokaOtsikko">VARAUSSIVUSTO</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="picture">
              <img
                src={woman}
                className="picture3"
                alt="woman"
                height="60%"
                width="80%"
              />
            </div>
          </Col>
          <Col>
            <p className="p-teksti">
              Kauttamme voit varata huolettomasti ja helposti matkat eri
              kohteisiimme jokaiselle budjetille! Suosituimmat kohteemme ovat
              Kanaria, Viro sekä Egypti, joissa jokaisessa on otettu huomioon
              esteettömyys ja erilaiset aktiviteetit. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu
              pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac
              blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend
              tristique, tortor mauris molestie elit, et lacinia ipsum quam nec
              dui. Quisque nec mauris sit amet elit iaculis pretium sit amet
              quis magna.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="p-teksti">
              Kauttamme voit varata matkapaketteja (sis matkustus ja
              majoittumisen) ja meiltä löytyy jokaiselle matkustajalle
              omanlainen seikkailu! Tee matkastasi vieläkin mukavampi ja
              osallistu erilaisiin aktiiviteetteihin vaelluksista opastetuille
              kierroksille. Tarjolla on myös erilaisia ruokapaketteja
              paikallisiin ravintoloihin! Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nulla quam velit, vulputate eu
              pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac
              blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend
              tristique, tortor mauris molestie elit, et lacinia ipsum quam nec
              dui. Quisque nec mauris sit amet elit iaculis pretium sit amet
              quis magna.
            </p>
          </Col>
          <Col>
            <div className="picture">
              <img
                src={hotelroom}
                className="picture"
                alt="hotelroom"
                height="90%"
                width="90%"
              />
            </div>
          </Col>
        </Row>
        <h2 className="tokaOtsikko">HINNASTO</h2>
        <Row>
          <Col>
            <div className="picture">
              <img
                src={pyramids}
                className="picture"
                alt="pyramids"
                height="90%"
                width="90%"
              />
            </div>
          </Col>
        </Row>
        <h3 className="kolmasOtsikko">Egypti</h3>
        <Row>
          <Col>
            <label className="label-teksti">Kerran elämässä</label>
            <p className="p-teksti">
              <li>1 viikko, sisältäen majoitukset ja matkat</li>
              <li>1500e/matkustaja</li>
              <li>liirunlaarunliirun laarun liirunlaarum</li>
            </p>
          </Col>
          <Col>
            <label className="label-teksti">Muinaiset ihmeet</label>
            <p className="p-teksti">
              <li>2 viikkoa, sisältäen majoitukset ja matkat</li>
              <li>2500e/matkustaja</li>
              <li>liirunlaarunliirun laarun liirunlaarum</li>
            </p>
          </Col>
        </Row>
        <h3 className="kolmasOtsikko">Viro</h3>
        <Row>
          <Col>
            <label className="label-teksti">Halvalla hyvä tulee</label>
            <p className="p-teksti">
              <li>2 pvä, sisältäen majoitukset ja matkat</li>
              <li>200e/matkustaja</li>
            </p>
          </Col>
          <Col>
            <label className="label-teksti">Pientä luksusta</label>
            <p className="p-teksti">
              <li>5pvä, sisältäen majoitukset ja matkat </li>
              <li>800e/matkustaja</li>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="picture">
              <img
                src={restaurant}
                className="picture"
                alt="restaurant"
                height="90%"
                width="90%"
              />
            </div>
          </Col>
        </Row>
        <h3 className="kolmasOtsikko">Kanaria</h3>
        <Row>
          <Col>
            <label className="label-teksti">Kalevin matkat</label>
            <p className="p-teksti" p>
              <li>2 viikkoa, sisältäen majoitukset ja matkat</li>
              <li>1900e/matkustaja</li>
            </p>
          </Col>
          <Col>
            <label className="label-teksti">Onnellisten Saari</label>
            <p className="p-teksti">
              <li>3 viikkoa, sisältäen majoitukset ja matkat</li>
              <li>5000e/matkustaja</li>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <label className="label-teksti">Keihäsmatkat</label>
            <p className="p-teksti">
              <li>1 viikko, sisältäen majoitukset ja matkat</li>
              <li>800e/matkustaja</li>
              <li>liirunlaarunliirun laarun liirunlaarum</li>
              <li>liirunlaarunliirun laarun liirunlaarum</li>
            </p>
          </Col>
          <Col>
            <div className="picture">
              <img
                src={drink}
                className="picture"
                alt="drink"
                height="80%"
                width="80%"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="p-teksti">
              Kohteemme hintoihin on sisällytetty majoitus sekä
              kuljetus/matkustus sekä hinnat sisältävät avl. Varaukset ja
              tarkemmat lisätiedot numerosta 0400 123456, sähköpostitse
              info@matkamaailma.fi tai yhteydenotto lomakkeemme kautta.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <ContactForm />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Varaussivu;
