import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });


module.exports = {
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
