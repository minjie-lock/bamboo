
import { NavigationView, NavigationViewProps } from "@googlemaps/react-native-navigation-sdk";

type NavigationGoogleViewProps = {
  styles: {
    android: NavigationViewProps['androidStylingOptions'];
    ios: NavigationViewProps['iOSStylingOptions'];
  };
  creates: {
    view: NavigationViewProps['onMapViewControllerCreated'];
    navgation: NavigationViewProps['onNavigationViewControllerCreated'];
  };
}

export default function NavigationGoogleView(
  props: NavigationGoogleViewProps
){

  const {
    styles,
    creates
  } = props;

  return (
    <NavigationView
      iOSStylingOptions={styles.ios}
      androidStylingOptions={styles.android}
      onMapViewControllerCreated={creates.view}
      onNavigationViewControllerCreated={creates.navgation}
    />
  )
}