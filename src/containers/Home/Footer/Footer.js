import { Footer } from "../../../components/Home";
import Insta from "../../../assets/images/instagram_icon.svg";
import Twitter from "../../../assets/images/twitter_icon.svg";
import Logo from "../../../assets/images/takum_banner.svg";
import AppStore from "../../../assets/images/appstore.svg";
import GooglePlay from "../../../assets/images/googleplay.svg";
import { useMediaQuery } from "react-responsive";

export function FooterContainer() {
  const isPhone = useMediaQuery({ query: "(max-width: 480px)" });
  return (
    <Footer.Container>
      <Footer>
        <Footer.Body>
          <Footer.TextContainer>
            <Footer.Text weight={"bold"}>TAKUM</Footer.Text>
            <Footer.Text>Ayo Gabung!</Footer.Text>
            <Footer.Text>Privacy Policy</Footer.Text>
            <Footer.Text>Terms &#38; Condition</Footer.Text>
          </Footer.TextContainer>
          <Footer.TextContainer>
            <Footer.Text weight={"bold"}>RESOURCES</Footer.Text>
            <Footer.Text>Takum Support</Footer.Text>
            <Footer.Text>Berita &#38; Media</Footer.Text>
          </Footer.TextContainer>
          <Footer.MediaContainer>
            <div>
              <Footer.Text weight={"bold"}>MEDIA SOSIAL</Footer.Text>
              <Footer.IconContainer width={!isPhone ? "100%" : "30%"}>
                <Footer.Image
                  width={isPhone ? "30%" : ""}
                  src={Insta}
                  alt="Instagram"
                />
                <Footer.Image
                  width={isPhone ? "30%" : ""}
                  src={Twitter}
                  alt="Twitter"
                />
              </Footer.IconContainer>
            </div>
          </Footer.MediaContainer>
        </Footer.Body>
        <Footer.BottomContainer>
          <Footer.Image width={isPhone ? "30%" : ""} src={Logo} alt="logo" />
          <div style={!isPhone ? { width: "25%" } : { width: "55%" }}>
            <Footer.IconContainer>
              <Footer.Image
                width={!isPhone ? "45%" : "45%"}
                src={AppStore}
                alt="appstore"
              />
              <Footer.Image
                width={!isPhone ? "45%" : "48%"}
                src={GooglePlay}
                alt="googleplay"
              />
            </Footer.IconContainer>
          </div>
        </Footer.BottomContainer>
      </Footer>
    </Footer.Container>
  );
}
