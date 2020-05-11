import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './Header';

configure({ adapter: new Adapter() });

describe("<Header />", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Header />);
    })

    it('expect to render Header component', () => {
        expect(wrapper.length).toEqual(1);
    });

    it("should not show menu when not click button", () => {
        expect(wrapper.state()).toEqual({ toggleMenu: false })
    })
})
