// import { View, Image, useColorScheme } from 'react-native';
// import { OrbitingCircles } from '../Common/OrbitingCircles';
// import { COLORS } from '../../themes/colors';
// import { imageLinks } from '../../utils/imageLinks';

// export default function TechOrbit() {
//   const scheme = useColorScheme();
//   const isDark = scheme === 'dark';

//   return (
//     <View className="h-[400px] w-full items-center justify-center relative">
//       {/* Outer Orbit */}
//       <OrbitingCircles
//         radius={130}
//         speed={2}
//         pathColor={isDark ? COLORS.common.grayMedium : COLORS.common.grayLight}
//         pathWidth={0.8}
//       >
//         <Image
//           source={{
//             uri: imageLinks.html,
//           }}
//           className="w-[50px] h-[50px] rounded-full bg-white"
//         />

//         <Image
//           source={{
//             uri: imageLinks.css,
//           }}
//           className="w-[50px] h-[50px] rounded-full bg-white"
//         />

//         <Image
//           source={{
//             uri: imageLinks.javascript,
//           }}
//           className="w-[50px] h-[50px] rounded-full bg-white"
//         />

//         <Image
//           source={{
//             uri: imageLinks.nextJs,
//           }}
//           className="w-[50px] h-[50px] rounded-full bg-white"
//         />
//       </OrbitingCircles>

//       {/* Inner Orbit */}
//       <OrbitingCircles
//         reverse
//         radius={70}
//         speed={2}
//         pathColor={isDark ? COLORS.common.grayMedium : COLORS.common.grayLight}
//         pathWidth={0.8}
//       >
//         <Image
//           source={{
//             uri: imageLinks.reactNative,
//           }}
//           className="w-12 h-12 rounded-full bg-white"
//         />

//         <Image
//           source={{
//             uri: imageLinks.androidStudio,
//           }}
//           className="w-12 h-12 rounded-full bg-white"
//         />

//         <Image
//           source={{
//             uri: imageLinks.gitHub,
//           }}
//           className="w-12 h-12 rounded-full bg-white"
//         />
//       </OrbitingCircles>
//     </View>
//   );
// }

import { View, Image, useColorScheme } from 'react-native';
import { OrbitingCircles } from '../Common/OrbitingCircles';
import { COLORS } from '../../themes/colors';

export default function TechOrbit({
  outerOrbitImages = [],
  innerOrbitImages = [],
}) {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';

  // Convert string URL → { uri: string }
  const getImageSource = img => {
    if (typeof img === 'string') {
      return { uri: img };
    }
    return img; // for local require(...)
  };

  return (
    <View className="h-[400px] w-full items-center justify-center relative">
      {/* Outer Orbit */}
      <OrbitingCircles
        radius={130}
        speed={2}
        pathColor={isDark ? COLORS.common.grayMedium : COLORS.common.grayLight}
        pathWidth={0.8}
      >
        {outerOrbitImages.map((img, index) => (
          <Image
            key={`outer-${index}`}
            source={getImageSource(img)}
            className="w-[50px] h-[50px] rounded-full bg-white"
          />
        ))}
      </OrbitingCircles>

      {/* Inner Orbit */}
      <OrbitingCircles
        reverse
        radius={70}
        speed={2}
        pathColor={isDark ? COLORS.common.grayMedium : COLORS.common.grayLight}
        pathWidth={0.8}
      >
        {innerOrbitImages.map((img, index) => (
          <Image
            key={`inner-${index}`}
            source={getImageSource(img)}
            className="w-12 h-12 rounded-full bg-white"
          />
        ))}
      </OrbitingCircles>
    </View>
  );
}
