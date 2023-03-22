/* eslint-disable testing-library/no-debugging-utils */
import { shallow } from "enzyme";
import FavoriteItem from "./FavoriteItem";

test("<MeetupItem/> renders without crashing", () => {
  const wrapper = shallow(<FavoriteItem />);
  expect(wrapper.exists()).toBe(true);
});
