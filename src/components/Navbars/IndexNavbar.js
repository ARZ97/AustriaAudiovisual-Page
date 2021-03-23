import React from "react";
 // reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="dark">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="#AudioVisual"
              id="navbar-brand"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("header-section").scrollIntoView();
              }}
            >
              ENRIQUE AUSTRIA
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              PORTAFOLIO
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="#AudioVisual"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("Intro-section").scrollIntoView();
                  }}
                >
                  <i className="now-ui-icons business_badge"></i>
                  <p>INICIO</p>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#AudioVisual"
                  nav
                  onClick={(e) => {e.preventDefault();
                    document
                    .getElementById("introportafolio-section")
                    .scrollIntoView();}}
                >
                  <i className="now-ui-icons business_briefcase-24 mr-1"></i>
                  <p>PORTAFOLIO</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("sesionFotos-section")
                        .scrollIntoView();
                    }}
                  >
                    <i className="now-ui-icons media-1_camera-compact mr-1"></i>
                    SESION FOTOGRAFICA
                  </DropdownItem>
                  <DropdownItem
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("produccion-section")
                        .scrollIntoView();
                    }}
                  >
                    <i className="now-ui-icons tech_headphones mr-1"></i>
                    PRODUCCIONES
                  </DropdownItem>
                  <DropdownItem
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("catalogos-section")
                        .scrollIntoView();
                    }}
                  >
                    <i className="now-ui-icons media-1_album mr-1"></i>
                    CATALOGOS
                  </DropdownItem>
                  <DropdownItem
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("videoclips-section")
                        .scrollIntoView();
                    }}
                  >
                    <i className="now-ui-icons media-1_button-play mr-1"></i>
                    VIDEOCLIPS
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink
                  href="#AudioVisual"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact-section").scrollIntoView();
                  }}
                >
                  <i className="now-ui-icons ui-1_email-85"></i>
                  <p>CONTACTO</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="https://www.facebook.com/Austriavisual/"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  LIKE EN FACEBOOK
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/austria_audiovisual/"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  SIGUEME EN INSTAGRAM
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
