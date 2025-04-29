import Skeleton from 'react-native-animated-skeletons';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.skeletonContainer}>
        <Skeleton width={100} height={100} color="#bdc3c7" borderRadius={10} />
        <View style={styles.skeletonContent}>
          <Skeleton width={150} height={15} color="#bdc3c7" borderRadius={10} />
          <Skeleton height={8} color="#bdc3c7" borderRadius={10} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skeletonContainer: {
    gap: 10,
    flexDirection: 'row',
  },
  skeletonContent: {
    flex: 1,
    gap: 10,
    justifyContent: 'center',
  },
});
