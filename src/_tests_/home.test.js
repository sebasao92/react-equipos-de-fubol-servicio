import React from 'react';
import Home from '../components/pages/home'
import { shallow } from "enzyme";

describe('ShowTeams', () => {
    it('should be defined', () => {
        expect(<Home />).toBeDefined();
    });
    it("renders correctly", () => {
        const wrapper = shallow(
            <Home />
        );
        expect(wrapper.exists()).toBe(true);
    });
});
