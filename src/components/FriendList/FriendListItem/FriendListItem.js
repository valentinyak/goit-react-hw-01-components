import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline, id }) {
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
