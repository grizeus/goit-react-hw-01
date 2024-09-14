import PpropTypes from "prop-types";
import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>
          {location}
        </p>
      </div>
      <ul className={css.stats}>
        <li className={css.listItem}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PpropTypes.string.isRequired,
  tag: PpropTypes.string.isRequired,
  location: PpropTypes.string.isRequired,
  image: PpropTypes.string.isRequired,
  stats: PpropTypes.object.isRequired,
};
