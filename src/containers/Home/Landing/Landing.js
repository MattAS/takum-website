import React, { useState } from "react";
import { Landing } from "../../../components/Home";
import PhoneMockup from "../../../assets/images/phone_mockup.png";
import { Form } from "../../../components/Home";
import { useMediaQuery } from "react-responsive";
import { db } from "../../../firebase";
import validator from "validator";
import * as axios from "axios";

const api = axios.create({
  baseURL: "https://asia-southeast2-takum-ea88f.cloudfunctions.net/api/"
});

export function LandingContainer() {
  const isPhone = useMediaQuery({ query: "(max-width: 480px)" });

  const [text, setText] = useState();
  const [sent, setSent] = useState(false);
  const [err, setError] = useState(false);
  const [type, setType] = useState();

  const sendEmail = async text => {
    try {
      let res = await api.post("/mailing/add", { email: text });
      console.log(res);
    } catch (err) {
      console.log(err.message);
    }
  };

  // const sendPhone = async text => {
  //   try {
  //     let res = await api.post("/phone/add", { phone: text });
  //     console.log(res);
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };

  const handleSubmit = async event => {
    event.preventDefault();

    if (validator.isEmail(text)) {
      sendEmail(text);
      setError(false);
      setSent(true);
      setType("email");
    }
    // else if (validator.isMobilePhone(text)) {
    //   sendPhone(text);
    //   setError(false);
    //   setSent(true);
    //   setType("phone");
    //   console.log(text);
    // }
    else {
      setError(true);
    }
  };

  const handleChange = e => {
    setText(e.target.value);
  };

  return (
    <Landing.Container id="landing">
      <Landing>
        <Landing.Body>
          <Landing.Header>Solusi Hukum dalam Genggaman Tangan</Landing.Header>
          <Form.Container>
            <Form>
              <Form.Input
                onChange={handleChange}
                disabled={sent}
                placeholder="Isi Email Anda"
              />
              <Form.Button onClick={handleSubmit}>Ayo Gabung!</Form.Button>
            </Form>
          </Form.Container>
          {err && !sent ? (
            <p style={{ color: "red" }}>Gunakan dengan email Anda.</p>
          ) : null}
          {!err && sent && type == "email" ? (
            <p style={{ color: "#7B6ECC", fontWeight: "bold" }}>
              Cek email Anda untuk unduh aplikasi Takum
            </p>
          ) : !err && sent && type == "phone" ? (
            <p style={{ color: "#7B6ECC", fontWeight: "bold" }}>
              Cek SMS Anda untuk unduh aplikasi Takum
            </p>
          ) : null}
        </Landing.Body>
        <Landing.Image src={PhoneMockup} alt="phone-mockup" />
      </Landing>
    </Landing.Container>
  );
}
