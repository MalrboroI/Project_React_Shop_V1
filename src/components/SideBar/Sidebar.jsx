import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData, SidebarDataFooter } from "./SidebarData";
import SubMenu from "./SubMenu";
import { SubMenuFooter } from "./SubMenu";
import { Nav } from "react-bootstrap";
import { IconContext } from "react-icons/lib";
import "../styles/sideBar.css";

// const Nav = styled.div`
//   background: white;
//   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;

// const NavIcon = styled(Link)`
//   margin-left: 2rem;
//   font-size: 2rem;
//   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;

const SidebarNav = styled.nav`
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{}}>
        <Nav className="customNavBar">
          <Nav to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </Nav>
        </Nav>

        <SidebarNav sidebar={sidebar} className="customSidebarNav">
          <SidebarWrap>
            <Nav to="#" className="NavIcon">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </Nav>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
          <SidebarNav sidebar={sidebar} className="SubMenuFooter">
            <SidebarWrap>
              {SidebarDataFooter.map((item, index) => {
                return <SubMenuFooter item={item} key={index} />;
              })}
            </SidebarWrap>
          </SidebarNav>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
}
