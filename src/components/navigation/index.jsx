"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logo from "./ccia-logo-2.png";
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, Navbar, NavbarToggler, UncontrolledDropdown } from "reactstrap";
import { useState } from "react";

const links = [
  {
    href: "/",
    title: "Inicio",
  },
  {
    href: "/quienes-somos",
    title: "Quiénes somos",
  },
  {
    href: "/servicios",
    title: "Servicios",
    children: [
      {
        href: "cde",
        title: "CDE"
      },
      {
        href: "cev",
        title: "CEV"
      },
      {
        href: "cca",
        title: "CCA"
      },
      {
        href: "ola",
        title: "OLA"
      },
      {
        href: "expo",
        title: "Expo"
      },
      {
        href: "/",
        title: "Todos los Servicios"
      },

    ]
  },
  {
    href: "/inscripcion",
    title: "Inscripción",
  },
  {
    href: "/socios",
    title: "Socios",
  },
  {
    href: "/proyecto-risp-ho",
    title: "Proyecto RISP-HO",
  },
  {
    href: "/contactenos",
    title: "Contáctenos",
  },
];

export function Navigation() {
  const currentRoute = usePathname();
  const [isOpen, setOpen] = useState(false);

  return (
    <Navbar
      sticky="top"
      dark
      expand="md"
      style={{
        backgroundColor: "#0086CD",
      }}
    >
      {
        <Link href="/" className="navbar-brand">
          <Image src={logo} alt="ccia-logo" width={70} />
        </Link>
      }

      <NavbarToggler onClick={() => setOpen(!isOpen)} className="me-2 bi bi-list text-white" />

      <Collapse isOpen={isOpen} navbar>
        <Nav navbar className="ms-auto">
          {links.map((link, key) => {
            if (!!link.children) {
              return (<UncontrolledDropdown nav inNavbar key={key}>
                <DropdownToggle nav caret style={{
                  color: `${link.href}` === `/${String(currentRoute).split("/")[1]}` ? "#FBCC0F" : "white",
                  textTransform: "uppercase",
                }}>
                  <strong>
                    {String(link.title).toUpperCase()}
                  </strong>
                </DropdownToggle>

                <DropdownMenu >
                  {

                    link.children.map((l, k) => {

                      return (
                        <DropdownItem
                          key={k}
                        >
                          <Link
                            href={`${link.href}/${l.href}`}
                            className={`nav-link ${`${link.href}/${l.href}` === currentRoute ? "active" : ""}`}
                            onClick={() => setOpen(false)}
                            style={{
                              color: `${link.href}/${l.href}` === currentRoute ? "#FBCC0F" : "black",
                              textTransform: "uppercase",
                            }}
                          >
                            <strong>
                              {l.title}
                            </strong>
                          </Link>
                        </DropdownItem>
                      )
                    }
                    )
                  }
                </DropdownMenu>
              </UncontrolledDropdown>);
            }

            return (
              <NavItem key={key}>
                <Link
                  href={link.href}
                  className={`nav-link ${link.href === currentRoute ? "active" : ""
                    }`}
                  onClick={() => setOpen(false)}
                  style={{
                    color: link.href === currentRoute ? "#FBCC0F" : "white",
                    textTransform: "uppercase",
                  }}
                >
                  <strong> {link.title}</strong>
                </Link>
              </NavItem>
            )
          }
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );


}