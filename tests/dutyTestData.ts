import { ObjectId } from 'mongodb';

const DutyToBeAddedForPOSTtest = {
  name: 'testDuty1',
  description: 'o(*￣▽￣*)ブ',
  location: '(づ￣ 3￣)づ',
  time: {
    start: '500',
    end: '500',
  },
  constraints: ['no brooms', 'no mops'],
  soldiersRequired: 20,
  value: 100,
};

const DutyToBeAddedForFailedPOSTtest = {
  name: 'problematic duty',
};

const DutyToBeFound = {
  _id: new ObjectId(100),
  name: 'testDuty2',
  description: 'o(*￣▽￣*)ブ',
  location: '(づ￣ 3￣)づ',
  time: {
    start: '500',
    end: '502',
  },
  constraints: ['no brooms', 'no mops'],
  soldiersRequired: 20,
  value: 100,
};

const DutyToSearch = {
  name: 'testDuty3',
  description: 'o(*￣▽￣*)ブ',
  location: '(づ￣ 3￣)づ',
  time: {
    start: '502',
    end: '1',
  },
  constraints: ['no brooms', 'no mops'],
  soldiersRequired: 20,
  value: 100,
};

export {
  DutyToBeAddedForFailedPOSTtest, DutyToBeAddedForPOSTtest, DutyToBeFound, DutyToSearch,
};
