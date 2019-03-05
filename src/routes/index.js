// components
import Difference from '../components/Difference/Difference';
import MouseDot from '../components/MouseDot/MouseDot';
import LazyComponentSuspense from '../components/LazyComponent/LazyComponentSuspense';
import ShuffleTest from '../components/ChildrenManipulation/Shuffle/ShuffleTest';

export default [
  {
    path: '/difference',
    Component: Difference
  },
  {
    path: '/mousedot',
    Component: MouseDot
  },
  {
    path: '/lazy',
    Component: LazyComponentSuspense
  },
  {
    path: '/shufflechildren',
    Component: ShuffleTest
  }
];