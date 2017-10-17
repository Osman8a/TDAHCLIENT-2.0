import React from 'react';
import chai, {expect} from 'chai';
/*eslint-disable */
import sinon from 'sinon';
/*eslint-enable */
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinonChai from 'sinon-chai';

chai.use (sinonChai);

configure ({adapter: new Adapter ()});

// DUMMY TEST
it ('should return true', () => {
  const Fixture = () => (
    <div className="fixure">
      <input id="checked" defaultChecked />
      <input id="not" defaultChecked={false} />
    </div>
  );

  const wrapper = shallow (<Fixture />); // mount/render/shallow when applicable
  expect (wrapper.is ('.fixure')).to.exist;
  expect (wrapper.children ()).to.have.lengthOf (2);
  expect (wrapper.find ('#checked')).to.have.lengthOf (1);
  expect (wrapper.find ('#chec').exists ()).to.be.false;
});
