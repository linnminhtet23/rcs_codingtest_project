import "./header.css";
import bannerImg from "../../assets/bannerImg.jpg"
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Kim Jisoo Media</span>
      </div>
      <img
        className="headerImg"
        src={bannerImg}
        alt=""
      />
    </div>
  );
}
