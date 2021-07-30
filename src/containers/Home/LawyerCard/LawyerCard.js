import { LawyerCard } from "../../../components/Home";
import BriefcaseOutline from "../../../assets/images/briefcase-outline.svg";
import ClockOutline from "../../../assets/images/clock-outline-purple.svg";

export function LawyerCardContainer({
  name,
  item1,
  item2,
  image,
  width,
  height,
  ...restProps
}) {
  return (
    <LawyerCard.Container width={width} height={height}>
      <LawyerCard>
        <LawyerCard.Image src={image} />
        <LawyerCard.Body>
          <LawyerCard.Text>{name}</LawyerCard.Text>
          <LawyerCard.List>
            <LawyerCard.Icon src={BriefcaseOutline} alt="briefcase" />
            <LawyerCard.Text>{item1}</LawyerCard.Text>
          </LawyerCard.List>
          <LawyerCard.List>
            <LawyerCard.Icon src={ClockOutline} alt="clock" />
            <LawyerCard.Text>{item2}</LawyerCard.Text>
          </LawyerCard.List>
        </LawyerCard.Body>
      </LawyerCard>
    </LawyerCard.Container>
  );
}
