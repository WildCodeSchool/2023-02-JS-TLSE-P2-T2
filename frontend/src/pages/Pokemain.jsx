import "primereact/resources/themes/lara-dark-indigo/theme.css";
import "primereact/resources/primereact.css";
import SideBarTop from "../components/SidebarTop";
import SearchBar from "../components/SearchBar";

export default function Pokemain() {
  return (
    <>
      <p>Pokemain</p>
      <SearchBar />
      <SideBarTop />
    </>
  );
}
