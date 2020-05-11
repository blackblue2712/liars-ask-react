import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';

import UserDropdown from './UserDropdown';
import ListRests from './ListRests';
import ListRestItem from '../ListRestItem/ListRestItem';

configure({ adapter: new Adapter() });

describe("<UserDropdown />", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<UserDropdown />);
    })
    
    it('expect to render 2 rest items component', () => {
        wrapper = shallow(<ListRests />);
        expect(wrapper.find(ListRestItem)).toHaveLength(2);
    });

    it('expect to render Signout button component', () => {
        wrapper = shallow(<ListRests />);
        expect(wrapper.find(".btn-signout")).toHaveLength(1);
    });
})
