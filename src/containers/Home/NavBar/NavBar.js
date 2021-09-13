import { NavBar } from "../../../components/Home";
import Logo from "../../../assets/images/logo_banner.svg";

export function NavBarContainer() {
  return (
    <NavBar.Container>
      <NavBar>
        <NavBar.Image src={Logo} alt="logo" />
        <NavBar.Links>
          <NavBar.Text href="#landing">Beranda</NavBar.Text>
          <NavBar.Text href="#product">Produk</NavBar.Text>
          <NavBar.Text href="#lawyer">Pengacara</NavBar.Text>
        </NavBar.Links>
      </NavBar>
    </NavBar.Container>
  );
}
