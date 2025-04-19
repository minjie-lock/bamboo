import { ArrivalEvent, useNavigation } from "@googlemaps/react-native-navigation-sdk";
import { useCallback, useEffect, useMemo } from "react";

export const useEventListeners = () => {
  const {
    navigationController,
    addListeners,
    removeListeners
  } = useNavigation();

  const onArrival = useCallback((event: ArrivalEvent) => {
    if (event.isFinalDestination) {
      //到达
      navigationController.stopGuidance();
    } else {
      // 继续前往
      navigationController.continueToNextDestination();
      navigationController.startGuidance();
    }
  }, [navigationController]);

  const back = useMemo(() => ({
    onArrival,
  }), [onArrival]);

  useEffect(() => {
    addListeners(back)
    return () => {
      removeListeners(back)
    }
  }, [back]);
}