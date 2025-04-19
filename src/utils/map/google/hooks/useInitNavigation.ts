import { useNavigation } from "@googlemaps/react-native-navigation-sdk";
import { useCallback } from "react";

/**
 * @function useInitNavigation
 * @description 访问 NavigationController 并控制组件内的导航，提供添加和删除侦听器的方法
 * @returns {Function} - A function that initializes the navigation controller.
 */
export default function useInitNavigation() {
  const { navigationController } = useNavigation();
  const initializeNavigation = useCallback(async () => {
    try {
      await navigationController.init();
      console.log('Navigation initialized');
    } catch (error) {
      console.error('Error initializing navigation', error);
    }
  }, [navigationController]);
  return initializeNavigation;
}