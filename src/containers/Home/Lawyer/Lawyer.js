import { LawyerCardContainer } from "../LawyerCard/LawyerCard";
import { Lawyers } from "../../../components/Home";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Ruhut from "../../../assets/images/IMG_3009.JPG";

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
    <Lawyers.Container>
      <Lawyers>
        <Lawyers.Top>
          <Lawyers.Header>Temui Pengacara</Lawyers.Header>
          <Lawyers.Text>Kami memilih setiap advokat kami</Lawyers.Text>
        </Lawyers.Top>
        {!isPhone ? (
          <Lawyers.CardContainer>
            <LawyerCardContainer
              name="Michael Pardede"
              item1="750+ kasus"
              item2="15 tahun pengalaman"
              image={Ruhut}
            />
            <LawyerCardContainer
              name="Ruhut Poltak Sitompol"
              item1="~3.000 kasus"
              item2="39 tahun pengalaman"
              height="80%"
              width="30%"
            />
            <LawyerCardContainer
              name="Riwil Nayade"
              item1="1250+ kasus"
              item2="21 tahun pengalaman"
            />
          </Lawyers.CardContainer>
        ) : (
          <Swiper
            autoPlay={false}
            centerMode={true}
            dynamicHeight={true}
            showIndicators={false}
            showArrows={false}
            centerSlidePercentage={20}
          >
            <SwiperSlide>
              <LawyerCardContainer
                name="Michael Pardede"
                item1="750+ kasus"
                item2="15 tahun pengalaman"
              />
            </SwiperSlide>
            <Swiper>
              <LawyerCardContainer
                name="Ruhut Poltak Sitompol"
                item1="~3.000 kasus"
                item2="39 tahun pengalaman"
                height="85%"
                width="30.5%"
              />
            </Swiper>
            <SwiperSlide>
              <LawyerCardContainer
                name="Riwil Nayade"
                item1="~3.000 kasus"
                item2="39 tahun pengalaman"
              />
            </SwiperSlide>
          </Swiper>
        )}
      </Lawyers>
    </Lawyers.Container>
  );
}
