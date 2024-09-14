import PpropTypes from "prop-types";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div>
      <div>
        <img src={image} alt="User avatar" />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>
          {location.city}, {location.country}
        </p>
      </div>
      <ul>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PpropTypes.string.isRequired,
  tag: PpropTypes.string.isRequired,
  location: PpropTypes.array.isRequired,
  image: PpropTypes.string.isRequired,
  stats: PpropTypes.array.isRequired,
};
