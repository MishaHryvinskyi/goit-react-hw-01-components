 import PropTypes from 'prop-types';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return <div 
  style={{
    display: "flex",
    justifyContent: "center",
  }}
  >
  <div>
    <img
      src={avatar}
      alt={username}
      width="200"
    />
    <p>{username}</p>
    <p>@{tag}</p>
    <p>{location}</p>
  </div>

  <ul>
    <li>
      <span>Followers</span>
      <span>{stats.followers}</span>
    </li>
    <li>
      <span>Views</span>
      <span>{stats.views}</span>
    </li>
    <li>
      <span>Likes</span>
      <span>{stats.likes}</span>
    </li>
  </ul>
</div>;
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
};

// export const Profile = ({
//     username,
//     tag,
//     location,
//     avatar,
//     stats,
//     followers,
//     views,
//     likes,
// }) => {
//     return <div class="profile">
//     <div class="description">
//       <img
//         src={avatar}
//         alt={username}
//       />
//       <p class="name">{username}</p>
//       <p class="tag">{tag}</p>
//       <p class="location">{location}</p>
//     </div>
  
//     <ul class="stats">
//       <li>
//         <span class="label">{stats.followers}</span>
//         <span class="quantity">1000</span>
//       </li>
//       <li>
//         <span class="label">{stats.views}</span>
//         <span class="quantity">2000</span>
//       </li>
//       <li>
//         <span class="label">{stats.likes}</span>
//         <span class="quantity">3000</span>
//       </li>
//     </ul>
//   </div>
// };

