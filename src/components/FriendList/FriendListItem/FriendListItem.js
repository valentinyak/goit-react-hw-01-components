import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline = false, id }) {
  return (
    <li className={s.item} key={id}>
      <span
        className={s.status}
        style={
          isOnline
            ? { backgroundColor: 'green', color: 'green' }
            : { backgroundColor: 'red', color: 'red' }
        }
      >
        {isOnline}
      </span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
