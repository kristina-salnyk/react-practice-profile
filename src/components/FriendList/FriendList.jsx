import FriendListItem from '../FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(item => (
        <FriendListItem
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
