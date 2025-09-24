import Image from "next/image";
import styles from "./page.module.css";
import './page.css'
import Lightmodebutton from "./components/Lightmodebutton";
export default function Home() {
  return (
    <>
      <Lightmodebutton/>
      <div className="container">
        <div className="item">porto</div>
        <div>portofolio page on the web </div>
        <button>make a porto</button>

      </div>
    </>
  );
}
