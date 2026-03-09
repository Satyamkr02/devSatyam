import React, { useEffect, useMemo } from 'react';
import { View, Image } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

function IconItem({
  icon,
  image,
  rotationX,
  rotationY,
  radius,
  CENTER,
  iconSize,
  minScale,
  maxScale,
  minOpacity,
  maxOpacity,
}) {
  const animatedStyle = useAnimatedStyle(() => {
    const rx = rotationX.value;
    const ry = rotationY.value;

    const cosY = Math.cos(ry);
    const sinY = Math.sin(ry);

    const cosX = Math.cos(rx);
    const sinX = Math.sin(rx);

    const x1 = icon.x * cosY - icon.z * sinY;
    const z1 = icon.x * sinY + icon.z * cosY;

    const y1 = icon.y * cosX - z1 * sinX;
    let z2 = icon.y * sinX + z1 * cosX;

    z2 = Math.max(-radius, Math.min(radius, z2));

    const depth = (z2 + radius) / (2 * radius);

    const scale = minScale + depth * (maxScale - minScale);
    const opacity = minOpacity + depth * (maxOpacity - minOpacity);

    return {
      position: 'absolute',
      left: CENTER,
      top: CENTER,
      transform: [
        { translateX: x1 * scale },
        { translateY: y1 * scale },
        { scale },
      ],
      opacity,
      zIndex: Math.floor(depth * 100),
    };
  });

  return (
    <Animated.View
      style={animatedStyle}
      className="bg-white items-center justify-center rounded-full overflow-hidden"
    >
      <Image
        source={image}
        style={{ width: iconSize, height: iconSize }}
        resizeMode="contain"
      />
    </Animated.View>
  );
}

export default function IconCloud({
  images = [],
  radius = 140,
  iconSize = 42,
  containerSize = 340,
  speed = 0.003,
  tiltAmplitude = 0.2,
  minScale = 0.6,
  maxScale = 1.3,
  minOpacity = 0.4,
  maxOpacity = 1,
}) {
  const CENTER = containerSize / 2 - iconSize / 2;

  const rotationX = useSharedValue(0);
  const rotationY = useSharedValue(0);

  useEffect(() => {
    const id = setInterval(() => {
      rotationY.value += speed;
      rotationX.value = Math.sin(Date.now() / 2000) * tiltAmplitude;
    }, 16);

    return () => clearInterval(id);
  }, [speed, tiltAmplitude, rotationX, rotationY]);

  const icons = useMemo(() => {
    const arr = [];
    const count = images.length;

    const offset = 2 / count;
    const increment = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < count; i++) {
      const y = i * offset - 1 + offset / 2;
      const r = Math.sqrt(1 - y * y);
      const phi = i * increment;

      const x = Math.cos(phi) * r;
      const z = Math.sin(phi) * r;

      arr.push({
        x: x * radius,
        y: y * radius,
        z: z * radius,
      });
    }

    return arr;
  }, [images, radius]);

  return (
    <View
      style={{
        width: containerSize,
        height: containerSize,
        alignSelf: 'center',
      }}
    >
      {icons.map((icon, index) => {
        const img = images[index];
        const source = typeof img === 'string' ? { uri: img } : img;

        return (
          <IconItem
            key={index}
            icon={icon}
            image={source}
            rotationX={rotationX}
            rotationY={rotationY}
            radius={radius}
            CENTER={CENTER}
            iconSize={iconSize}
            minScale={minScale}
            maxScale={maxScale}
            minOpacity={minOpacity}
            maxOpacity={maxOpacity}
          />
        );
      })}
    </View>
  );
}
