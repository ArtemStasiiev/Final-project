import React from 'react';
import '../../styles/components/navbar.scss';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { faHome, faCommentDollar, faChartPie, faChartLine, faHistory, faUserAlt } from "@fortawesome/free-solid-svg-icons";
// import { faCommentDollar } from "@fortawesome/free-solid-svg-icons";
// import { faChartPie } from "@fortawesome/free-solid-svg-icons";
// import { faChartLine } from "@fortawesome/free-solid-svg-icons";
// import { faHistory } from "@fortawesome/free-solid-svg-icons";
// import { faUserAlt } from "@fortawesome/free-solid-svg-icons";

const navbar = () => (
    <div className="Navbar-Con">
        <div className="Navbar">
            <FontAwesomeIcon icon={faPaypal} className="PayPal-Icon" />
            <div className="Navbar-Items">
                <NavLink exact to="/" className="Navbar-Item" activeClassName="main-nav-active"  style={{ textDecoration: 'none' }}>
                        <div className="Navbar-Items__Icon-Con">
                            <FontAwesomeIcon className="iconNav" icon={faHome} />
                        </div>

                        <div className="Navbar-Items__Name">Home</div>
                </NavLink>
                <NavLink exact to="/transfers" className="Navbar-Item" activeClassName="main-nav-active" style={{ textDecoration: 'none' }}>
                        <div className="Navbar-Items__Icon-Con">
                            <FontAwesomeIcon icon={faCommentDollar} />
                        </div>

                        <div className="Navbar-Items__Name">Transfer</div>
                </NavLink>
                <NavLink exact to="/spending" className="Navbar-Item" activeClassName="main-nav-active" style={{ textDecoration: 'none' }}>
                        <div className="Navbar-Items__Icon-Con">
                            <FontAwesomeIcon icon={faChartPie} />
                        </div>

                        <div className="Navbar-Items__Name">Spending</div>
                </NavLink>
                <NavLink exact to="/investing" className="Navbar-Item" activeClassName="main-nav-active" style={{ textDecoration: 'none' }}>
                        <div className="Navbar-Items__Icon-Con">
                            <FontAwesomeIcon icon={faChartLine} />
                        </div>
                        <div className="Navbar-Items__Name">Investing</div>
                </NavLink>
                <NavLink exact to="/history" className="Navbar-Item" activeClassName="main-nav-active" style={{ textDecoration: 'none' }}>
                        <div className="Navbar-Items__Icon-Con">
                            <FontAwesomeIcon icon={faHistory} />
                        </div>

                        <div className="Navbar-Items__Name">History</div>
                </NavLink>
            </div>
            <FontAwesomeIcon icon={faUserAlt} className="AuthorizationIcon" />
        </div>
    </div>
);

export default navbar;