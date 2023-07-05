import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "../../components/Header/Header";
import { TweetsList } from "../../components/TweetsList/TweetsList";
import { fetchUsers } from "../../redux/usersOperations";

export const TweetsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <TweetsList />
    </div>
  );
};
