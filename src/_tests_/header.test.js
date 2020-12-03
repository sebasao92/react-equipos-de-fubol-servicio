import React from 'react';
import Header from '../components/commons/header/header'
import { shallow } from "enzyme";

describe('Header', () => {
    it('should be defined', () => {
        expect(<Header />).toBeDefined();
    });
    it("renders correctly", () => {
        const wrapper = shallow(
            <Header />
        );
        expect(wrapper.exists()).toBe(true);
    });
    it("renders title header", () => {
        const wrapper = shallow(<Header />);
        const title = <div className="header">EQUIPOS DE FÚTBOL</div>;
        expect(wrapper.contains(title)).toEqual(true);
      });
});


