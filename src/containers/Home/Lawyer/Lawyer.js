import { LawyerCardContainer } from "../LawyerCard/LawyerCard";
import { Lawyers } from "../../../components/Home";

export function LawyerContainer() {
  return (
    <Lawyers.Container>
      <Lawyers>
        <Lawyers.Top>
          <Lawyers.Header>Temui Pengacara</Lawyers.Header>
          <Lawyers.Text>Kami memilih setiap advokat kami</Lawyers.Text>
        </Lawyers.Top>
        <Lawyers.CardContainer>
          <LawyerCardContainer
            name="Michael Pardede"
            item1="750+ kasus"
            item2="15 tahun pengalaman"
          />
          <LawyerCardContainer
            name="Ruhut Poltak Sitompol"
            item1="~3.000 kasus"
            item2="39 tahun pengalaman"
            height="85%"
            width="30.5%"
          />
          <LawyerCardContainer
            name="Riwil Nayade"
            item1="~3.000 kasus"
            item2="39 tahun pengalaman"
          />
        </Lawyers.CardContainer>
      </Lawyers>
    </Lawyers.Container>
  );
}
