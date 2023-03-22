/* eslint-disable testing-library/no-debugging-utils */
import { shallow } from "enzyme";
import Layout from "./Layout";

test("<MeetupItem/> renders without crashing", () => {
  const wrapper = shallow(<Layout />);
  expect(wrapper.exists()).toBe(true);
});
