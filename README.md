# React Native Animated Skeleton ✨

A React Native library to easily create an amazing animated loading skeleton placeholder.

## 📦 Installation

```bash
npm install react-native-animated-skeletons
```

or

```bash
yarn add react-native-animated-skeletons
```

> **Note:**  
> You must have `react-native-reanimated` installed and properly configured.

```bash
npm install react-native-reanimated
```

Follow the [Reanimated installation guide](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started) if you haven't already.

## 🚀 Usage

Import and use the components you need:

```tsx
import Skeleton from 'react-native-animated-skeletons';

export default function App() {
  return (
    <Skeleton
      width={100}
      height={100}
      color="#E1E9EE"
      borderRadius={8}
    />;
  )
}
```

## ⚙️ Component Configuration

Most components come with customizable props such as:

- `color` - The background color of the skeleton
- `width` (number) - The width of the skeleton in pixels
- `height` (number) - The height of the skeleton in pixels
- `duration` (number) - The duration of the animation in milliseconds
- `borderRadius` (number) - Optional border radius for rounded corners

## ✍️ Contributing

Contributions are welcome! 🚀

If you'd like to:

- Fix a bug
- Suggest a new animated component
- Improve performance or API design

Please open an [issue](https://github.com/blaiti/react-native-animated-skeletons/issues) or submit a [pull request](https://github.com/blaiti/react-native-animated-skeletons/pulls).

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## 📄 License

MIT

## 💬 Let's Connect!

- [Portfolio](https://www.blaiti.com)
- [Twitter](https://twitter.com/SkanderBlaiti)
- [LinkedIn](https://www.linkedin.com/in/skanderblaiti)
