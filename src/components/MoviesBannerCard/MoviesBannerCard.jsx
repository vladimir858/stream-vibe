import './MoviesBannerCard.scss'
import {Image} from "minista";
import Button from "@/components/Button";

const MoviesBannerCard = (props) => {
  const {
    title,
    description,
    imgSrc,
  } = props

  return (
    <div
      className="movies-banner-card"
    >
      <Image src={imgSrc}  className='movies-banner-card__image' />
      <div className="movies-banner-card__inner"></div>
      <div className="movies-banner-card__body">
        <h2 className="movies-banner-card__title h3">
          {title}
        </h2>
        <div className="movies-banner-card__description hidden-mobile">
          <p>{description}</p>
</div>
      </div>
        <footer className="movies-banner-card__footer">
          <Button
          className="movies-banner-card__play-button"
          iconName="play"
          label="Play Now"
          />
          <div className="movies-banner-card__action">

            <Button
              mod="black-06"
            iconName="plus"
            label="Add to playlist"
            isLabelHidden

            />
            <Button
              mod="black-06"
            iconName="like"
            label="Like"
            isLabelHidden

            />
            <Button
              mod="black-06"
            iconName="volume"
            label="Mute"
            isLabelHidden

            />
          </div>

        </footer>
    </div>
  )
}
export default MoviesBannerCard;