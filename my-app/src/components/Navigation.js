import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Navigation() {
  // active tulee olla valinnassa

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg nav nav-pills nav-fill justify-content-center">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <ul class="nav nav-pills mx-auto">
          <li class="nav-item custom custom">
            <a className="nav-item nav-link custom tekstit" href="/etusivu">
              Etusivu
            </a>
          </li>
          <li class="nav-item custom">
            <a className="nav-item nav-link custom tekstit" href="/varaus">
              Varaussivusto
            </a>
          </li>
          <li class="nav-item custom">
            <a className="nav-item nav-link custom tekstit" href="/kohteet">
              Kohteiden esittely
            </a>
          </li>
          <li class="nav-item custom">
            <a
              className="nav-item nav-link custom tekstit"
              href="/matkakertomukset"
            >
              Matkakertomuksia
            </a>
          </li>
          <li class="nav-item custom">
            <a
              className="nav-item nav-link custom tekstit"
              href="/yhteystiedot"
            >
              Yhteystiedot
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
