import { React } from "react";

import "../App.css";

function ContactForm() {
  return (
    <div>
      <h3 className="neljasOtsikko">YHTEYDENOTTOLOMAKE</h3>
      <div>
        <form>
          <label className="label-kolmonen" for="fname">
            Nimi
          </label>
          <input
            type="text"
            name="nimi"
            placeholder="Nimi"
            className="tekstit-kaksi"
          />
        </form>
        <form>
          <label className="label-kolmonen" for="number">
            Puhelinnumero
          </label>
          <input
            type="text"
            name="puhelinnumero"
            placeholder="Puhelinnumero"
            className="tekstit-kaksi"
          />
          <label className="label-kolmonen" for="email">
            Sähköpostiosoite
          </label>
          <input
            type="text"
            name="sahköpostiosoite"
            placeholder="Sähköpostiosoite"
            className="tekstit-kaksi"
          />
          <label className="label-kolmonen" for="info">
            Lisätiedot
          </label>
          <input
            type="text2"
            name="lisatiedot"
            placeholder=""
            className="tekstit-kaksi"
          />
          <input type="submit" value="Lähetä"></input>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
