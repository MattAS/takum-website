import { Footer } from "../../../components/Home";
import Insta from "../../../assets/images/instagram_icon.svg";
import Twitter from "../../../assets/images/twitter_icon.svg";
import Logo from "../../../assets/images/takum_banner.svg";
import AppStore from "../../../assets/images/appstore.svg";
import GooglePlay from "../../../assets/images/googleplay.svg";

export function FooterContainer() {
  return (
    <Footer.Container>
      <Footer>
        <Footer.Body>
          <Footer.TextContainer>
            <Footer.Text>TAKUM</Footer.Text>
            <Footer.Text>Privacy Policy</Footer.Text>
            <Footer.Text>Terms &#38; Condition</Footer.Text>
          </Footer.TextContainer>
          <Footer.TextContainer>
            <Footer.Text>RESOURCES</Footer.Text>
            <Footer.Text>Takum Support</Footer.Text>
            <Footer.Text>Berita &#38; Media</Footer.Text>
          </Footer.TextContainer>
          <Footer.MediaContainer>
            <div>
              <Footer.Text>MEDIA SOSIAL</Footer.Text>
              <Footer.IconContainer>
                <Footer.Image src={Insta} alt="Instagram" />
                <Footer.Image src={Twitter} alt="Twitter" />
              </Footer.IconContainer>
            </div>
          </Footer.MediaContainer>
        </Footer.Body>
        <Footer.BottomContainer>
          <Footer.Image src={Logo} alt="logo" />
          <Footer.IconContainer>
            <Footer.Image src={AppStore} alt="appstore" />
            <Footer.Image src={GooglePlay} alt="googleplay" />
          </Footer.IconContainer>
        </Footer.BottomContainer>
      </Footer>
    </Footer.Container>
  );
}
