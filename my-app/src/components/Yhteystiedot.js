import React from "react";
import Navigation from "../components/Navigation";
import ContactForm from "../components/ContactForm";

import seaguls from "../pictures/seaguls.jpg";

import { Container } from "react-bootstrap";

function Yhteystiedot() {
  return (
    <Container fluid>
      <div className="tausta">
        <div className="otsikko">MATKAMAAILMA</div>
        <Navigation />
        <h2 className="tokaOtsikko">YHTEYSTIEDOT</h2>
        <p className="p-teksti">
          Kiitos vierailustasi verkkosivustolla! Jos haluat varata matkan, voit
          tehdä sen joko numerosta 0400 123456 tai yhteydenottolomakkeen kautta.
          Arvostamme kaikkia palautteita ja palautteita voit tarvittaessa
          laittaa meille sähköpostitse osoitteeseen info@matkamaailma.fi .
        </p>
        <img
          src={seaguls}
          className="picture-center"
          alt="seaguls"
          height="100%"
          width="60%"
        />
        <ContactForm />
      </div>
    </Container>
  );
}

export default Yhteystiedot;
