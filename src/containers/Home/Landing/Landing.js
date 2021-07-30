import { Landing } from "../../../components/Home";
import PhoneMockup from "../../../assets/images/phone_mockup.png";
import { Form } from "../../../components/Home";

export function LandingContainer() {
  return (
    <Landing.Container>
      <Landing>
        <Landing.Body>
          <Landing.Header>Solusi Hukum dalam Genggaman Tangan</Landing.Header>
          <Form.Container>
            <Form>
              <Form.Input width={"10%"} placeholder="+62" />
              <Form.Input width={"45%"} placeholder="Klik di sini" />
              <Form.Button>Ayo Gabung!</Form.Button>
            </Form>
          </Form.Container>
        </Landing.Body>
        <Landing.Image src={PhoneMockup} alt="phone-mockup" />
      </Landing>
    </Landing.Container>
  );
}
