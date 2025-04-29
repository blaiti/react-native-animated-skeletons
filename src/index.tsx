import React from 'react';
import type { ViewProps } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

/**
 * Props for the Skeleton component
 * @interface SkeletonProps
 * @property {number} height - The height of the skeleton in pixels
 * @property {number} width - The width of the skeleton in pixels
 * @property {string} color - The background color of the skeleton
 * @property {number} [duration] - The duration of the animation in milliseconds
 * @property {number} [borderRadius] - Optional border radius for rounded corners
 */
interface SkeletonProps extends ViewProps {
  /**
   * The height of the skeleton in pixels
   */
  height: number;
  /**
   * The width of the skeleton in pixels
   */
  width?: number;
  /**
   * The background color of the skeleton
   */
  color: string;
  /**
   * The duration of the animation in milliseconds
   */
  duration?: number;
  /**
   * The border radius of the skeleton
   */
  borderRadius?: number;
}

/**
 * A loading skeleton component that displays an animated placeholder
 * while content is being loaded. The component creates a pulsing animation
 * effect by interpolating opacity between 0.4 and 1.
 *
 * @component
 * @example
 * ```tsx
 * <Skeleton
 *   width={200}
 *   height={100}
 *   duration={700}
 *   color="#E1E9EE"
 *   borderRadius={8}
 * />
 * ```
 */
const Skeleton: React.FC<SkeletonProps> = ({
  height,
  width,
  color,
  duration,
  borderRadius,
}) => {
  const shared = useSharedValue(0);

  shared.value = withRepeat(
    withTiming(1, { duration: duration ?? 700 }),
    Infinity,
    true
  );

  const animatedStyles = useAnimatedStyle(() => ({
    opacity: interpolate(shared.value, [0, 1], [0.4, 1]),
  }));

  return (
    <Animated.View
      style={[
        animatedStyles,
        {
          height: height,
          width: width ?? '100%',
          backgroundColor: color,
          borderRadius: borderRadius || 0,
        },
      ]}
    />
  );
};

export default Skeleton;
