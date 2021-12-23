import "./sidebar.css";
import sidebarImg from "../../assets/sidebarImg.jpg";
export default function Sidebar() {

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT</span>
        <img src={sidebarImg} alt="" />
        <p>
          Kim Ji-soo (Korean: 김지수; born January 3, 1995), known mononymously
          as Jisoo, is a South Korean singer and actress. She made her debut in
          August 2016 as a member of the girl group Blackpink formed by YG
          Entertainment. In 2021, Jisoo starred as the leading actress in the
          JTBC drama Snowdrop.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
        <li className="sidebarListItem">jisoo</li>
          <li className="sidebarListItem">kpop</li>
          <li className="sidebarListItem">music</li>
          <li className="sidebarListItem">entertainment</li>
          <li className="sidebarListItem">actress</li>
          <li className="sidebarListItem">blackpink</li>
        </ul>
      </div>
    </div>
  );
}
