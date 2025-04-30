export default {
  expo: {
    name: "Nullcore",
    slug: "nullcore",
    version: "1.0.0",
    orientation: "landscape",
    icon: "./assets/images/app-icon.png",
    scheme: "nullcore",
    deepLinking: true,
    userInterfaceStyle: "automatic",
    newArchEnabled: true,

    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.mohdaqdasasim.nullcore",
    },

    android: {
      package: "com.mohdaqdasasim.nullcore",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.mohdaqdasasim.nullcore",
      adaptiveIcon: {
        foregroundImage: "./assets/images/app-icon.png",
        backgroundColor: "#080816",
      },
      splash: {
        image: "./assets/images/app-icon.png",
        resizeMode: "contain",
        backgroundColor: "#080816",
      },
      intentFilters: [
        {
          autoVerify: true,
          action: "VIEW",
          data: {
            scheme: "https",
            host: "nullcore.app",
          },
          category: ["BROWSABLE", "DEFAULT"],
        },
      ],
    },

    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/app-icon.png",
    },

    plugins: ["expo-router"],

    experiments: {
      typedRoutes: true,
    },
  },
};
