import React from 'react';
import Trend from 'react-trend';

class CustomTrend extends React.Component {

  render() {
    return (
      <Trend
        smooth
        autoDraw
        autoDrawDuration={3000}
        autoDrawEasing='ease-out'
        gradient={['#C33764', '#1D2671']}
        data={[0,10,5,44,2.5,12]}
        strokeWidth={4.5}
        strokeLinecap={'round'}
      />
    )
  }
}

export default CustomTrend
