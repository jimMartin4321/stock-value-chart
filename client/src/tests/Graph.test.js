import React from 'react';
import shallow from './enzyme';
import Graph from '../components/Graph';

const data = [{
  price: 5,
  time: 'time1',
  id: 1,
}, {
  price: 9,
  time: 'time2',
  id: 2,
}, {
  price: 1,
  time: 'time3',
  id: 3,
}];

const companyName = 'Jim and Assoc.';

test('graph should accurately display price of last data point (most current)', () => {
  const wrapper = shallow(
    <Graph data={data} companyName={companyName} />,
  );
  expect(wrapper.contains(
    <div className="price" id="price">
      {1}
    </div>,
  )).toBe(true);
});
