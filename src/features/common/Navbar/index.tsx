import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Donate from '../../../assets/images/navigation/Donate';
import Leaderboard from '../../../assets/images/navigation/Leaderboard';
import Me from '../../../assets/images/navigation/Me';
import LOGO from '../../../assets/images/PlanetLogo';
import styles from './Navbar.module.scss';

export default function NavbarComponent(props: any) {
  const router = useRouter();
  let menuItems = [
    {
      id: 1,
      name: 'About us',
      path: '/about',
      icon: (
        <LOGO color={router.pathname === '/about' ? '#89b35a' : '#2f3336'} />
      ),
    },
    {
      id: 2,
      name: 'Donate/Gift',
      path: '/',
      icon: <Donate color={router.pathname === `/` ? '#89b35a' : '#2f3336'} />,
    },
    {
      id: 3,
      name: 'Leaderboard',
      path: '/leaderboard',
      icon: (
        <Leaderboard
          color={router.pathname === '/leaderboard' ? '#89b35a' : '#2f3336'}
        />
      ),
    },
    {
      id: 4,
      name: 'Me',
      path: '/me',
      icon: <Me color={router.pathname === '/me' ? '#89b35a' : '#2f3336'} />,
    },
  ];

  return (
    <>
      {/* Top Navbar */}
      <Navbar
        fixed="top"
        className={styles.top_nav}
        bg={props.theme === 'theme-light' ? '' : 'dark'}
        variant={props.theme === 'theme-light' ? 'light' : 'dark'}
      >
        <Nav className={'d-none d-md-flex flex-row ' + styles.nav_container}>
          {/* Maps the menu items on the nav bar */}
          {menuItems.map((item) => {
            let isFirstItem = item.id === 1;
            return (
              <Nav.Link
                key={item.id}
                // if it's the first item then shows the icon on the left of top navbar
                className={isFirstItem ? styles.first_icon : ''}
              >
                <Link href={item.path}>
                  {/* if it's first item in menu items and tenant is not 'plantfortheplanet'
                      the shows the logo of tenant with PFP logo.
                      else it shows PFP logo with About Us text */}
                  {isFirstItem && process.env.TENANT !== 'plantfortheplanet' ? (
                    <div className={styles.tenant_logo_container}>
                      <img
                        src={`${process.env.CDN_URL}logo/svg/${process.env.TENANT}.svg`}
                      />
                      <div className={styles.logo_divider}></div>
                      <img src={`${process.env.CDN_URL}logo/svg/planet.svg`} />
                    </div>
                  ) : (
                    <div className={styles.link_container}>
                      <div className={styles.link_icon}>{item.icon}</div>
                      <p
                        className={
                          router.pathname === item.path
                            ? styles.active_icon
                            : ''
                        }
                      >
                        {item.name}
                      </p>
                    </div>
                  )}
                </Link>
              </Nav.Link>
            );
          })}
        </Nav>
      </Navbar>

      {/* Bottom navbar */}
      <Navbar
        fixed="bottom"
        className={`d-md-none ${styles.bottom_nav}`}
        bg="light"
        expand="lg"
      >
        <Nav className={'d-flex flex-row ' + styles.mobile_nav}>
          {menuItems.map((item) => {
            return (
              <Nav.Link key={item.id}>
                <Link href={item.path}>
                  <div className={styles.link_container}>
                    <div className={styles.link_icon}>{item.icon}</div>
                    <p>{item.name}</p>
                  </div>
                </Link>
              </Nav.Link>
            );
          })}
        </Nav>
      </Navbar>
    </>
  );
}
