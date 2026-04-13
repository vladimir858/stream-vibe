import './Banner.scss'
import Button from "@/components/Button";

const Banner = (props) => {
  const titleId = `banner-title`;

  return (
    <section
      className="banner container"
      aria-label={titleId}
    >
<div className="banner__inner">
  <div className="banner__body">
    <h2 className="banner__title" id={titleId}>
     Start your free trial today!
    </h2>
    <div className="banner__description">This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</div>
  </div>
  <Button
  className="banner__button"
  label="Start a Free Trail"
  href="/subscriptions"
  />
</div>
    </section>
  )
}
export default Banner;