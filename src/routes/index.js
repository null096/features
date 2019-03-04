// components
import Difference from '../components/Difference/Difference';
import MouseDot from '../components/MouseDot/MouseDot';
import LazyComponentSuspense from '../components/LazyComponent/LazyComponentSuspense';

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
  }
];