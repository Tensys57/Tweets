import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/usersOperations";
import { selectPage, selectUsers } from "../../redux/usersSelector";
import { changePage } from "../../redux/usersSlice";
import { TweetsItem } from "../TweetsItem/TweetsItem";
import css from "./TweetsList.module.css";

export const TweetsList = () => {
  const users = useSelector(selectUsers);
  const page = useSelector(selectPage);
  const dispatch = useDispatch();

  function handleLoadMoreClick() {
    dispatch(changePage(page + 1));
    dispatch(fetchUsers(page));
  }

  return (
    <>
      <ul className={css.usersList}>
        {users.map((user) => (
          <li key={user.id} className={css.userItem}>
            <TweetsItem user={user} />
          </li>
        ))}
      </ul>
      <button id="loadMoreButton" type="button" onClick={handleLoadMoreClick}>
        {" "}
        Load more...
      </button>
    </>
  );
};
