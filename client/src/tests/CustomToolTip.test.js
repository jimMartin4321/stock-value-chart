import React from 'react';
import renderer from 'react-test-renderer';
import CustomToolTip from '../components/CustomToolTip';

test('custom tooltip renders correctly', () => {
  const component = renderer.create(
    <CustomToolTip active={true} payload={[{ payload: { time: 'five o\'clock' } }]} />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
