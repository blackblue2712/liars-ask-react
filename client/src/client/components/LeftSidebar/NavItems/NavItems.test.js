import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';

import NavItems from './NavItems';
import NavItem from './NavItem/NavItem';

configure({ adapter: new Adapter() });

describe("<LeftSideBar/> -> <NavItems />", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavItems isAuthenticated={() => null} />);
    });

    it("take a snapshot of NavItem", () => {
        expect(shallow(<NavItem href="#" />)).toMatchSnapshot();
    })
    it("take a snapshot of NavItems", () => {
        expect(shallow(<NavItems isAuthenticated={() => {}} />)).toMatchSnapshot();
    })

    it("should render 4 nav items if not authenticated", () => {
        expect(wrapper.find(NavItem)).toHaveLength(4)
    })

    it("should render 8 nav items if authenticated", () => {
        let authObj = {
            user: {},
            token: "something"
        }
        wrapper.setProps({ isAuthenticated: () => authObj })
        expect(wrapper.find(NavItem)).toHaveLength(8)
    })

    
})