import React from "react";
import Navigation from "../components/Navigation";

import morocco from "../pictures/morocco.jpg";
import bedroom from "../pictures/bedroom.jpg";
import oldtown from "../pictures/oldtown.jpg";
import viro1 from "../pictures/viro1.jpg";
import beach from "../pictures/beach.jpg";
import olds from "../pictures/olds.jpg";

import pyramidsvideo from "../videos/pyramidsvideo.mp4";
import virovideo from "../videos/virovideo.mp4";
import beachvideo from "../videos/beachvideo.mp4";

import { Container, Row, Col } from "react-bootstrap";

function Kohteet() {
  return (
    <Container fluid>
      <div className="tausta">
        <Row>
          <Col>
            <h1 className="otsikko">MATKAMAAILMA</h1>
            <Navigation />
          </Col>
        </Row>
        <h2 className="tokaOtsikko">KOHTEIDEN ESITTELY</h2>
        <h3 className="kolmasOtsikko">Egypti</h3>
        <Row>
          <Col>
            <p className="p-teksti">
              Haluatko luksusta arkeen ja historiaa? Jos vastaat kyllä, matkasi
              kohteena suositellaan Egyptiä. Egyptissä näet muinaisia pyramideja
              ja muita nähtävyyksiä sekä tulevaisuuden ihmeitä!
              Matkustuspakettimme kohteeseen ovat “kerran elämässä” (1 viikko
              sis hotellit ja majoitukset) sekä “muinaiset ihmeet” (2 viikko sis
              hotellit ja majoitukset). Egypti on edullinen kohde, jossa voit
              myös käydä rannalla tai ihmetellä antiikin ihmeitä! Järjestämme
              myös matkoja Saharan aavikolle. Nyt on elämäsi tilaisuus matkustaa
              Egyptiin! Maan turvallisuustilanne on tällä hetkellä erinomainen.
            </p>
          </Col>
          <Col>
            <div className="picture">
              <img
                src={morocco}
                className="picture"
                alt="morocco"
                height="90%"
                width="80%"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="p-teksti">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              quam velit, vulputate eu pharetra nec, mattis ac neque. Duis
              vulputate commodo lectus, ac blandit elit tincidunt id. Sed
              rhoncus, tortor sed eleifend tristique, tortor mauris molestie
              elit, et lacinia ipsum quam nec dui. Quisque nec putate commodo
            </p>
          </Col>
          <Col>
            <div className="picture">
              <img
                src={bedroom}
                className="picture"
                alt="bedroom"
                height="90%"
                width="80%"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="picture">
              <video width="90%" height="90%" controls>
                <source src={pyramidsvideo} type="video/mp4" />
              </video>
              <label className="label-vasen">Tutustu tarkemmin Egyptiin</label>
            </div>
          </Col>
          <Col>
            <p className="p-teksti">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              quam velit, vulputate eu pharetra nec, mattis ac neque. Duis
              vulputate commodo lectus, ac blandit elit tincidunt id. Sed
              rhoncus, tortor sed eleifend tristique, tortor mauris molestie
              elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet
              elit iaculis pretium sit amet quis magna. Aenean velit odio,
              elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus
              aliquam mattis.
            </p>
          </Col>
        </Row>
        <h3 className="kolmasOtsikko">Viro</h3>
        <Row>
          <Col>
            <p className="p-teksti">
              Lähimatkustusta parhaimmillaan, lähde elämäsi seikkailulle Viroon
              Tallinnaan! Matkustaminen on nopeaa ja helppoa kumppaniemme
              laivoilla, joissa voit tehdä myös matkustaessa ostoksia. Virossa
              odottaa vanhakaupunki ja parhaimmat paikalliset hotellit, joista
              löydät myös yöelämää ja viihdettä illallesi. Järjestämme myös
              matkoja paikalliseen kauppakeskukseen erikoistarjouksella, kysy
              lisää!
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="picture-center">
              <img
                src={oldtown}
                className="picture-center"
                alt="oldtown"
                height="90%"
                width="90%"
              />
              <label className="label-vasen2">Kuva Viron kylästä</label>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="p-teksti">
              Lähimatkailua parhaimmillaan, pakettejamme ovat “Havalla hyvä
              tulee” (2 pvä sis matkat ja hotellit) sekä “pientä luksusta” (5pvä
              sisältäen matkat ja hotellit.) Hintataso Virossa on maltillinen ja
              aktiiviteetteja on jokaiselle jotakin. Matkamme ovat esteettömiä
              matkoja, kysy lisää! Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nulla quam velit, vulputate eu pharetra nec,
              mattis ac neque. Duis vulputate commodo lectus, ac blandit elit
              tincidunt id. Sed rhoncus, tortor sed eleifend tristique.
            </p>
          </Col>
          <Col>
            <div className="picture">
              <video width="30%" height="30%" controls>
                <source src={virovideo} type="video/mp4" />
              </video>
            </div>
          </Col>
        </Row>
        <label className="label-oikea">Tutustu tarkemmin Viroon</label>
        <Row>
          <Col>
            <p className="p-teksti">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              quam velit, vulputate eu pharetra nec, mattis ac neque. Duis
              vulputate commodo lectus, ac blandit elit tincidunt id. Sed
              rhoncus, tortor sed eleifend tristique, tortor mauris molestie
              elit, et lacinia ipsum quam nec dui.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nulla quam velit, vulputate eu
              pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac
              blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend
              tristique, tortor mauris molestie elit, et lacinia ipsum quam nec
              dui. Sed rhoncus, tortor sed eleifend tristique, tortor mauris
              molestie elit, et lacinia ipsum quam nec dui.
            </p>
          </Col>
          <Col>
            <div className="picture">
              <img
                src={viro1}
                className="picture"
                alt="oldtown"
                height="80%"
                width="80%"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className="kolmasOtsikko">Kanaria</h3>
            <p className="p-teksti">
              Vieraile suomalaisten suosikkikohteessa vuosikymmenten ajalta!
              Kanarialla voit toteuttaa itseäsi eri kohteissa ja eri
              aktiiviteeteilla, esimerkiksi rantaloman tai patikoinnin
              merkeissä. Sää suosii aina kohteessa ja lämpöä on myös
              talviaikoinakin!
            </p>
          </Col>
          <Col>
            <p className="p-teksti">
              Edullista matkustamista lämpimään, kohteessa pärjäät joko
              englannilla tai vuokrattavalla tulkilla. Matkapakettejamme on
              “Kalevin matkat” (2 viikkoa sis hotelli ja majoitukset),
              “keihäsmatkat” (1 viikko sis hotellit ja majoitukset) sekä
              “onnellisten saari” (3 viikkoa, sis hotellit ja majoitukset). Ota
              yhteyttä ja sovitaan sinulle esteettömän mahtava matka!
              Liirumlaarum ipsumlipsum lisätekstiä sivustolle
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="picture2">
              <img
                src={beach}
                className="picture2"
                alt="beach"
                height="90%"
                width="90%"
              />
            </div>
            <label className="label-kakkonen">
              Paikallisia nähtävyyksiä kanarialla
            </label>
          </Col>
          <Col>
            <p className="p-teksti2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              quam velit, vulputate eu pharetra nec, mattis ac neque. Duis
              vulputate commodo lectus, ac blandit elit tincidunt id. Sed
              rhoncus, tortor sed eleifend tristique, tortor mauris molestie
              elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet
              elit iaculis pretium sit amet quis magna.Lorem ipsum dolor sit
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
            <div className="picture2">
              <img
                src={olds}
                className="picture2"
                alt="olds"
                height="90%"
                width="90%"
              />
            </div>
            <label className="label-kakkonen">
              Kanarialta löytyy aktiiviteetteja kaikenikäisille
            </label>
          </Col>
          <Col>
            <p className="p-teksti">
              Aenean velit odio, elementum in tempus ut, vehicula eu diam.
              Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis
              sodales nec vulputate justo hendrerit. Vivamus varius pretium
              ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit
              amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis
              vulputate commodo lectus, ac blandit elit tincidunt id. Sed
              rhoncus, tortor sed eleifend tristique, tortor mauris molestie
              elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet
              elit iaculis pretium sit amet quis magna.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="p-teksti">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              quam velit, vulputate eu pharetra nec, mattis ac neque. Duis
              vulputate commodo lectus, ac blandit elit tincidunt id. Sed
              rhoncus, tortor sed eleifend tristique, tortor mauris molestie
              elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet
              elit iaculis pretium sit amet quis magna. Aenean velit odio,
              elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus
              aliquam mattis. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac
              neque. Duis vulputate commodo lectus, ac blandit elit tincidunt
              id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris
              molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris
              sit amet elit iaculis pretium sit amet quis magna.
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <p className="p-teksti">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              quam velit, vulputate eu pharetra nec, mattis ac neque. Duis
              vulputate commodo lectus, ac blandit elit tincidunt id. Sed
              rhoncus, tortor sed eleifend tristique, tortor mauris molestie
              elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet
              elit iaculis pretium sit amet quis magna. Aenean velit odio,
              elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus
              aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate
              justo hendrerit. Vivamus varius pretium ligula, a aliquam odio
              euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at
              ultricies metus viverra. Pellentesque arcu mauris, malesuada quis
              ornare accumsan, blandit sed diam.
            </p>
          </Col>
          <Col>
            <div className="picture">
              <video width="100%" height="100%" controls>
                <source src={beachvideo} type="video/mp4" />
              </video>
            </div>

            <label className="label-center2">
              Tutustu tarkemmin Kanariansaariin
            </label>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Kohteet;
