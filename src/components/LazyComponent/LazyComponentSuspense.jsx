import React, { Component, lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

class LazyComponentSuspense extends Component {
  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    );
  }
}

export default LazyComponentSuspense;