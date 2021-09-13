import { LawyerCardContainer } from "../LawyerCard/LawyerCard";
import { Lawyers } from "../../../components/Home";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Ruhut from "../../../assets/images/IMG_3009.JPG";
import Riwil from "../../../assets/images/Riwil.jpg";
import Michael from "../../../assets/images/Michael_Pardede.jpg";

export function LawyerContainer() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true
  };

  const isPhone = useMediaQuery({ query: "(max-width: 480px)" });

  return (
    <Lawyers.Container id="lawyer">
      <Lawyers>
        <Lawyers.Top>
          <Lawyers.Header>Temui Pengacara</Lawyers.Header>
          <Lawyers.Text>Kami memilih setiap advokat kami</Lawyers.Text>
        </Lawyers.Top>
        {!isPhone ? (
          <Lawyers.CardContainer>
            <LawyerCardContainer
              name="Riwil Nayade"
              item1="1250+ kasus"
              item2="21 tahun pengalaman"
              image={Riwil}
            />
            <LawyerCardContainer
              name="Ruhut Poltak Sitompul"
              item1="3.000+ kasus"
              item2="39 tahun pengalaman"
              height="85%"
              width="30%"
              image={Ruhut}
            />

            <LawyerCardContainer
              name="Michael Pardede"
              item1="750+ kasus"
              item2="15 tahun pengalaman"
              image={Michael}
            />
          </Lawyers.CardContainer>
        ) : (
          <Lawyers.CardContainer>
            <Swiper
              slidesPerView="auto"
              centeredSlides={true}
              initialSlide={1}
              slidesPerGroup={1}
              spaceBetween={30}
            >
              <SwiperSlide>
                <LawyerCardContainer
                  name="Riwil Nayade"
                  item1="~3.000 kasus"
                  item2="39 tahun pengalaman"
                  image={Riwil}
                />
              </SwiperSlide>
              <SwiperSlide>
                <LawyerCardContainer
                  name="Ruhut Poltak Sitompol"
                  item1="~3.000 kasus"
                  item2="39 tahun pengalaman"
                  height="85%"
                  width="30.5%"
                  image={Ruhut}
                />
              </SwiperSlide>
              <SwiperSlide>
                <LawyerCardContainer
                  name="Michael Pardede"
                  item1="750+ kasus"
                  item2="15 tahun pengalaman"
                  image={Michael}
                />
              </SwiperSlide>
            </Swiper>
          </Lawyers.CardContainer>
        )}
      </Lawyers>
    </Lawyers.Container>
  );
}
