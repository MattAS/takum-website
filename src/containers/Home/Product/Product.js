import { Product } from "../../../components/Home";
import PhoneChat from "../../../assets/images/phone_chat.png";
import PhoneCall from "../../../assets/images/phone-call-outline.svg";
import GridOutline from "../../../assets/images/grid-outline.svg";
import ClockOutline from "../../../assets/images/clock-outline.svg";
import MediaQuery from 'react-responsive'

export function ProductContainer() {
  return (
    <Product.Container>
      <Product>
        <MediaQuery minWidth={768}>
          <Product.ImageContainer>
            <Product.Image src={PhoneChat} alt={"chat"} />
          </Product.ImageContainer>
          <Product.Body>
            <Product.Header>Produk Kami</Product.Header>
            <Product.List>
              <Product.Icon src={PhoneCall} alt="phone_call" />
              <Product.Text>Konsultasi via chat dan telepon!</Product.Text>
            </Product.List>
            <Product.List>
              <Product.Icon src={GridOutline} alt="grid" />
              <Product.Text>Pengacara kami ahli di setiap bidang!</Product.Text>
            </Product.List>
            <Product.List>
              <Product.Icon src={ClockOutline} alt="clock" />
              <Product.Text>Proses menjadwal hanya 5 menit!</Product.Text>
            </Product.List>
          </Product.Body>
        </MediaQuery>
        <MediaQuery maxWidth={480}>
          <Product.Header>Produk Kami</Product.Header>
          <div style={{ width: "100%", display: "flex" }}>
            <Product.ImageContainer>
              <Product.Image src={PhoneChat} alt={"chat"} />
            </Product.ImageContainer>
            <Product.Body>
              <Product.List>
                <Product.Icon src={PhoneCall} alt="phone_call" />
                <Product.Text>Konsultasi via chat dan telepon!</Product.Text>
              </Product.List>
              <Product.List>
                <Product.Icon src={GridOutline} alt="grid" />
                <Product.Text>Pengacara kami ahli di setiap bidang!</Product.Text>
              </Product.List>
              <Product.List>
                <Product.Icon src={ClockOutline} alt="clock" />
                <Product.Text>Proses menjadwal hanya 5 menit!</Product.Text>
              </Product.List>
            </Product.Body>
          </div>

        </MediaQuery>
      </Product>
    </Product.Container>
  );
}
