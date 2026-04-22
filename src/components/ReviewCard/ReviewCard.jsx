import './ReviewCard.scss'
import Badge from "@/components/Badge";
import RatingView from "@/components/RatingView";

const ReviewCard = (props) => {
  const {
    name,
    subtitle,
    description,
    ratingValue,
  } = props


  return (
    <div
      className="review-card"
    >
      <header className="review-card__header">
<div className="review-card-author">
  <h4 className="review-card__name h6">{name}</h4>
  <div className="review-card__subtitle">
    {subtitle}
  </div>
<Badge>
  <RatingView
  value={ratingValue}
  label={ratingValue}
  />
</Badge>

</div>
      </header>
      <div className="review-card__body">
        <p>{description}</p>
      </div>
    </div>
  )
}
export default ReviewCard;