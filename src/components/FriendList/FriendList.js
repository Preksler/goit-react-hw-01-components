import PropTypes from "prop-types"
import { FriendListItem } from "./FriendListItem"
import css from "./FriendList.module.css"

export function FriendList({ friends }) {
    return (
        <ul className={css.friend_list}>
            {friends.map(({ avatar, name, isOnline, id }) => {
                return (
                    <FriendListItem
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                        key={id}
                    />
            )
            })}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};