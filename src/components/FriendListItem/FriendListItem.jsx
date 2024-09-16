import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.friendItem}>
      <img className={css["friend-avatar"]} src={avatar} alt="Avatar" width="48" />
      <p className={css["friend-name"]}>{name}</p>
      <p className={clsx(css.status, isOnline && css.online, !isOnline && css.offline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
}

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
