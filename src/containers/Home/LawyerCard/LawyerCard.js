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
        <LawyerCard.Image resizeMode="cover" src={image} />
        <LawyerCard.Body>
          <LawyerCard.Text weight={"bold"}>{name}</LawyerCard.Text>
          <LawyerCard.List>
            <LawyerCard.Icon src={BriefcaseOutline} alt="briefcase" />
            <LawyerCard.Text weight={"500"}>{item1}</LawyerCard.Text>
          </LawyerCard.List>
          <LawyerCard.List>
            <LawyerCard.Icon src={ClockOutline} alt="clock" />
            <LawyerCard.Text weight={"500"}>{item2}</LawyerCard.Text>
          </LawyerCard.List>
        </LawyerCard.Body>
      </LawyerCard>
    </LawyerCard.Container>
  );
}
