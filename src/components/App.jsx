import user from './Profile/user.json';
import stats from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <div>
        <Profile
          userName={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div>
        <Statistics title="Upload stats" stats={stats} />
      </div>
      <div>
        <FriendList friends={friends} />
      </div>
      <div>
        <TransactionHistory transactions={transactions} />
      </div>
    </div>
  );
};
