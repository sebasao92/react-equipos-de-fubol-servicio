import React from 'react';
import ShowTeams from '../components/commons/showTeams/showTeams'
import { shallow, mount } from "enzyme";

const team = {
    name: 'alcorcon',
}

describe('ShowTeams', () => {
    it('should be defined', () => {
        expect(<ShowTeams />).toBeDefined();
    });
    it("renders correctly", () => {
        const wrapper = shallow(
            <ShowTeams />
        );
        expect(wrapper.exists()).toBe(true);
    });
    it("accepts name props", () => {
        const wrapper = mount(<ShowTeams name={team.name} />);
        expect(wrapper.props().name).toEqual(team.name);
      });
});
