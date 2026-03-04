import React from 'react';
import { Image } from 'react-native';

const Obstacle = ({
  obstacleWidth,
  obstacleHeight,
  randomBottom,
  gap,
  obstaclesLeft,
}) => {

  return (
    <>
      <Image
        source={require('../../assets/pipe.png')}
        style={{
          position: 'absolute',
          width: obstacleWidth,
          height: 500,
          left: obstaclesLeft,
          bottom: randomBottom + obstacleHeight + gap,
        }}
        resizeMode="cover"
      />

      <Image
        source={require('../../assets/pipe.png')}
        style={{
          position: 'absolute',
          width: obstacleWidth,
          height: obstacleHeight,
          left: obstaclesLeft,
          bottom: randomBottom,
        }}
        resizeMode="cover"
      />
    </>
  );
};

export default Obstacle;