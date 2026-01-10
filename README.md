# EstateHub

![EstateHub localtion](./assets/readme/thumbnail.webp)

![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37) ![NativeWind](https://img.shields.io/badge/NativeWind-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white) ![Appwrite](https://img.shields.io/badge/Appwrite-FD366E?style=for-the-badge&logo=appwrite&logoColor=white)

A modern Real Estate application built with **Expo Router**, **NativeWind** (Tailwind CSS for React Native), and **Appwrite**. Perfect for quickly bootstrapping mobile applications with a beautiful, utility-first styling approach.

## 🚀 Features

- ⚡️ **Expo SDK 54** - Latest Expo framework for streamlined development
- 🎨 **NativeWind v4** - Tailwind CSS styling for React Native
- compass **Expo Router** - File-based routing with native navigation
- 📱 **Cross-platform** - iOS, Android, and Web support
- 🎯 **TypeScript** - Full type safety out of the box
- 🔄 **React 19** - Latest React features
- 🏗️ **New Architecture** - Enabled for optimal performance
- ⚡️ **React Compiler** - Experimental optimizations enabled

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- For iOS development: [Xcode](https://developer.apple.com/xcode/)
- For Android development: [Android Studio](https://developer.android.com/studio)

## 🛠️ Installation

1. Clone the repository:

```bash
git clone <https://github.com/SamedyHUNX/EstateHub>
cd real-estate
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variable:

```bash
EXPO_PUBLIC_APPWRITE_PROJECT_ID=
EXPO_PUBLIC_APPWRITE_PROJECT_NAME=
EXPO_PUBLIC_APPWRITE_ENDPOINT=
EXPO_PUBLIC_APPWRITE_DATABASE_ID=
EXPO_PUBLIC_APPWRITE_AGENTS_TABLE_ID=
EXPO_PUBLIC_APPWRITE_GALLERIES_TABLE_ID=
EXPO_PUBLIC_APPWRITE_REVIEWS_TABLE_ID=
EXPO_PUBLIC_APPWRITE_PROPERTIES_TABLE_ID=
```

## 🎯 Getting Started

### Start the development server:

```bash
npx expo start
```

### Run on specific platforms:

**iOS:**

```bash
npx expo run:ios
```

**Android:**

```bash
npx expo run:android
```

**Web:**

```bash
npx expo start --web
```

### Scan QR code:

After running `npx expo start`, scan the QR code with:

- **iOS:** Camera app or Expo Go
- **Android:** Expo Go app

## 🎨 Styling with NativeWind

This project uses NativeWind v4, which brings Tailwind CSS to React Native. Style your components using familiar Tailwind utility classes:

```tsx
import { View, Text } from "react-native";

export default function MyComponent() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-500">
      <Text className="text-white text-2xl font-bold">Hello NativeWind!</Text>
    </View>
  );
}
```

### Global Styles

Global CSS is configured in `app/globals.css` and imported in your root layout.

### Tailwind Configuration

Customize your theme in `tailwind.config.js` to add custom colors, fonts, spacing, and more.

## 📁 Project Structure

```
real-estate/
├── app/                    # File-based routing (Expo Router)
│   ├── _layout.tsx        # Root layout component
│   ├── index.tsx          # Home screen
│   └── globals.css        # Global styles
├── assets/                # Images, fonts, and other static files
├── node_modules/          # Dependencies
├── app.json              # Expo configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── babel.config.js       # Babel configuration
└── package.json          # Project dependencies and scripts
```

## 📦 Key Dependencies

### Core:

- `expo` - Expo framework
- `react-native` - React Native framework
- `expo-router` - File-based routing

### Styling:

- `nativewind` - Tailwind CSS for React Native

### Navigation:

- `@react-navigation/native` - Navigation library
- `react-native-screens` - Native screen primitives
- `react-native-gesture-handler` - Touch gesture system

### UI Components:

- `@expo/vector-icons` - Icon library
- `expo-image` - Optimized image component

## 🔧 Available Scripts

| Command                | Description                       |
| ---------------------- | --------------------------------- |
| `npx expo start`       | Start the Expo development server |
| `npx expo run:android` | Run on Android emulator/device    |
| `npx expo run:ios`     | Run on iOS simulator/device       |
| `npx expo start --web` | Run in web browser                |
| `npx expo lint`        | Run ESLint to check code quality  |

## 🏗️ Building for Production

### Android (APK/AAB):

```bash
eas build --platform android
```

### iOS (IPA):

```bash
eas build --platform ios
```

> **Note:** You'll need to set up [EAS Build](https://docs.expo.dev/build/introduction/) first.

## 🎯 Features & Configuration

### Dark Mode Support

The app supports automatic dark mode based on system preferences. Configure in `app.json`:

```json
"userInterfaceStyle": "automatic"
```

### New Architecture

React Native's new architecture is enabled for better performance:

```json
"newArchEnabled": true
```

### Typed Routes

TypeScript typed routes are enabled for type-safe navigation:

```json
"experiments": {
  "typedRoutes": true
}
```

## 🐛 Troubleshooting

### Clear cache and restart:

```bash
npx expo start -c
```

### Reset project:

```bash
npm run reset-project
```

### Rebuild node_modules:

```bash
rm -rf node_modules package-lock.json
npm install
```

## 📚 Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [NativeWind Documentation](https://www.nativewind.dev/)
- [Expo Router Documentation](https://expo.github.io/router/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💡 Tips

- Use `className` prop (not `style`) for NativeWind styling
- Combine NativeWind classes with inline styles when needed
- Utilize Expo's hot reloading for rapid development
- Check out the [NativeWind playground](https://www.nativewind.dev/playground) for testing styles

---

Built with ❤️ using React Native, Expo, and NativeWind
