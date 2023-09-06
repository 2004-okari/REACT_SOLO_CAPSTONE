import React from "react";
import { render } from '@testing-library/react';
import Navigation from "../components/Navigation";
import renderer from 'react-test-renderer';

describe("Navigation displays correctly", () => {
  test("Navigation file matches snapshot", () => {
    const tree = renderer.create(<Navigation />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})