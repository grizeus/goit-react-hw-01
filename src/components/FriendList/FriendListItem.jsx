import PropTypes from "prop-types";
import css from "./FriendList.module.css";
import clsx from "clsx";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.friendItem}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.status, isOnline && css.online, !isOnline && css.offline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
