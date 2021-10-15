import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

const LinkData = [
  {
    path: "/",
    text: "Home",
    icon: HomeIcon,
    id: 1,
  },
  {
    path: "/explore/1",
    text: "Explore",
    icon: SearchIcon,
    id: 2,
  },

  {
    path: "/notifications/2",
    text: "Notifications",
    icon: NotificationsIcon,
    id: 3,
  },
  {
    path: "/bookmarks/3",
    text: "Bookmarks",
    icon: BookmarkBorderIcon,
    id: 4,
  },
  {
    path: "/profile/4",
    text: "Profile",
    icon: PersonOutlineIcon,
    id: 5,
  },
];
export default LinkData;
