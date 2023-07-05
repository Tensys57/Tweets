import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { selectArrayIsFollowed } from "../../redux/usersSelector";
import { addIsFollowed, deleteIsFollowed } from "../../redux/usersSlice";
import { useState } from "react";

import mainPicture from "../../images/mainPicture.png";
import elipse from "../../images/Ellipse1.svg";
import logo from "../../images/logo2.svg";
import css from "./TweetsItem.module.css";

export const TweetsItem = ({ user }) => {
  const { id, avatar, tweets, followers } = user;
  const arrayIsFollowed = useSelector(selectArrayIsFollowed);
  const dispatch = useDispatch();

  const clickHandler = () => {
    !isFollowed
      ? setNewFollowersQw((prev) => prev + 1)
      : setNewFollowersQw((prev) => prev - 1);

    isFollowed ? dispatch(deleteIsFollowed(id)) : dispatch(addIsFollowed(id));

    setIsFollowed(!isFollowed);
  };
  const [isFollowed, setIsFollowed] = useState(arrayIsFollowed.includes(id));
  const [newFollowersQw, setNewFollowersQw] = useState(
    isFollowed ? followers + 1 : followers
  );

  return (
    <div>
      <div className={css.tweetsCard}>
        <img
          className={css.mainPicture}
          src={mainPicture}
          alt="Main Picture"
          width="308"
          height="168"
        />
        <a href="https://goit.global/ua/" className={css.logo}>
          <img className={css.logo} src={logo} width="76" height="22"></img>
        </a>
        <div className={css.userDisplay}>
          <img
            className={css.userEllipse}
            src={elipse}
            width="76"
            height="22"
          />
          <img className={css.userPicture} src={avatar} alt="User's Picture" />
          <div className={css.userRectangle}></div>
        </div>

        <div className={css.tweetsContainer}>
          <p className={css.tweetsQuantity}>{tweets} Tweets</p>
          <p className={css.followersQuantity}>
            {new Intl.NumberFormat("en-US", {
              style: "decimal",
            }).format(newFollowersQw)}{" "}
            Followers
          </p>
          <button
            type="button"
            className={`${css.followBtn} ${
              isFollowed ? css.isFollowedBtn : css.isNotFollowedBtn
            }`}
            onClick={clickHandler}
          >
            {isFollowed ? `Following` : `Follow`}
          </button>
        </div>
      </div>
    </div>
  );
};
TweetsItem.propTypes = {
  userId: PropTypes.string,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    tweets: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
  }).isRequired,
};
