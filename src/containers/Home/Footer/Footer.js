import { Footer } from "../../../components/Home";
import Insta from "../../../assets/images/instagram_icon.svg";
import Twitter from "../../../assets/images/twitter_icon.svg";
import Logo from "../../../assets/images/takum_banner.svg";
import AppStore from "../../../assets/images/appstore.svg";
import GooglePlay from "../../../assets/images/googleplay.svg";
import { useMediaQuery } from "react-responsive";

export function FooterContainer() {
  const isPhone = useMediaQuery({ query: "(max-width: 480px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <Footer.Container>
      <Footer>
        <Footer.Body>
          <Footer.TextContainer>
            <Footer.Text weight={"bold"}>TAKUM</Footer.Text>
            <Footer.Text href="#landing">Ayo Gabung!</Footer.Text>
            <Footer.Text
              href="https://www.termsfeed.com/live/8a3a7830-310c-4434-8d35-e7be07f0b542"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </Footer.Text>
            <Footer.Text
              href="https://docs.google.com/document/d/1U-e9ueaGtbPg5G3xZ3r-9ziE-OLJPg7MRRNYoOy6nOE/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms &#38; Condition
            </Footer.Text>
          </Footer.TextContainer>
          <Footer.TextContainer>
            <Footer.Text weight={"bold"}>RESOURCES</Footer.Text>
            <Footer.Text href="mailto:info@takum.id?subject=Support: ">
              Takum Support
            </Footer.Text>
            <Footer.Text
              href="https://drive.google.com/drive/folders/1Vn1cNFb0BW6DKxDKCTiUMhFCIJs9rzfY?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Berita &#38; Media
            </Footer.Text>
          </Footer.TextContainer>
          <Footer.MediaContainer>
            <div>
              <Footer.Text weight={"bold"}>MEDIA SOSIAL</Footer.Text>
              <Footer.IconContainer width={!isPhone ? "100%" : "30%"}>
                <a href="https://www.instagram.com/takum.id/">
                  <Footer.Image
                    width={isPhone ? "70%" : ""}
                    src={Insta}
                    alt="Instagram"
                  />
                </a>
                <a href="https://twitter.com/takum_id">
                  <Footer.Image
                    width={isPhone ? "70%" : ""}
                    src={Twitter}
                    alt="Twitter"
                  />
                </a>
              </Footer.IconContainer>
            </div>
          </Footer.MediaContainer>
        </Footer.Body>
        <Footer.BottomContainer>
          <Footer.Image width={isPhone ? "30%" : ""} src={Logo} alt="logo" />
          <div style={!isPhone ? { width: "25%" } : { width: "55%" }}>
            <Footer.IconContainer>
              <a
                href="https://apps.apple.com/us/app/takum/id1578338615"
                style={{ height: "100%", width: "100%" }}
              >
                <Footer.Image
                  width={!isPhone ? "80%" : "80%"}
                  src={AppStore}
                  alt="appstore"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.tahuapp"
                style={{ height: "100%", width: "100%" }}
              >
                <Footer.Image
                  width={!isPhone ? "90%" : "90%"}
                  src={GooglePlay}
                  alt="googleplay"
                />
              </a>
            </Footer.IconContainer>
          </div>
        </Footer.BottomContainer>
      </Footer>
    </Footer.Container>
  );
}
