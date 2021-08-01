import React, { useState } from "react";
import { Landing } from "../../../components/Home";
import PhoneMockup from "../../../assets/images/phone_mockup.png";
import { Form } from "../../../components/Home";
import { useMediaQuery } from "react-responsive";
import { db } from "../../../firebase";
import * as Yup from "yup";
import * as axios from "axios";

const api = axios.create({
  baseURL: "https://asia-southeast2-takum-ea88f.cloudfunctions.net/api"
});

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
  phoneNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  email: Yup.string()
    .email()
    .required()
});

export function LandingContainer() {
  const isPhone = useMediaQuery({ query: "(max-width: 480px)" });

  const [text, setText] = useState();
  const [sent, setSent] = useState(false);
  const [err, setError] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();

    if(validationSchema.isType({email: text})) {
      validationSchema.isValid({ email: text }).then(async valid => {
        if (valid) {
          setSent(true);
          setError(false);
  
          let res = await api.post("/mailing/add", { info: text });
          console.log(res);
        } else {
          setError(true);
        }
      });
    } else if(validationSchema.isType({phoneNumber: text})) {
      validationSchema.isValid({ phoneNumber: text }).then(async valid => {
        if (valid) {
          setSent(true);
          setError(false);
  
          let res = await api.post("/mailing/add", { info: text });
          console.log(res);
        } else {
          setError(true);
        }
      }); 
    }

    

  const handleChange = e => {
    setText(e.target.value);
  };

  return (
    <Landing.Container>
      <Landing>
        <Landing.Body>
          <Landing.Header>Solusi Hukum dalam Genggaman Tangan</Landing.Header>
          <Form.Container>
            <Form>
              {!isPhone ? (
                <>
                  <Form.Input
                    onChange={handleChange}
                    disabled={sent}
                    width={"55%"}
                    placeholder="Isi Email atau Nomor. Hp"
                  />
                  <Form.Button onClick={handleSubmit}>Ayo Gabung!</Form.Button>
                </>
              ) : (
                <>
                  <div style={{ width: "100%", display: "flex" }}>
                    <Form.Input
                      onChange={handleChange}
                      disabled={sent}
                      width={"45%"}
                      placeholder="Klik di sini"
                    />
                  </div>
                  <Form.Button onClick={handleSubmit}>Ayo Gabung!</Form.Button>
                </>
              )}
            </Form>
          </Form.Container>
        </Landing.Body>
        <Landing.Image src={PhoneMockup} alt="phone-mockup" />
      </Landing>
    </Landing.Container>
  );
}
