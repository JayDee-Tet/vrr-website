'use client';

import Wave from 'react-wavify';

interface WaveBackgroundProps {
  isDark?: boolean;
}

export default function WaveBackground({ }: WaveBackgroundProps) {
  const lightColors = {
    wave1: "#e0ac69", 
    wave2: "#c68a4b", 
    wave3: "#a06d3b", 
  };
  
  const colors = lightColors;
  
  return (
    <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: '300px' }}>
      {/*Back layer */}
      <Wave 
        fill={colors.wave1}
        paused={false}
        style={{ 
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '100%',
        }}
        options={{
          height: 20,
          amplitude: 25,
          speed: 0.03,
          points: 4
        }}
      />
      
      {/*Middle layer */}
      <Wave 
        fill={colors.wave2}
        paused={false}
        style={{ 
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '90%',
        }}
        options={{
          height: 15,
          amplitude: 30,
          speed: 0.08,
          points: 3
        }}
      />
      
      {/*Front layer */}
      <Wave 
        fill={colors.wave3}
        paused={false}
        style={{ 
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '80%',
        }}
        options={{
          height: 10,
          amplitude: 20,
          speed: 0.12,
          points: 5
        }}
      />
    </div>
  );
}