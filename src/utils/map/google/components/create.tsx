import {
  NavigationProvider,
  TaskRemovedBehavior,
  TermsAndConditionsDialogOptions
} from "@googlemaps/react-native-navigation-sdk";

type GoogleOptions = {
  termsAndConditionsDialogOptions?: TermsAndConditionsDialogOptions;
  taskRemovedBehavior?: TaskRemovedBehavior;
}

/**
 * @function createGoogle
 * @description 创建谷歌地图组件
 * @param props 
 * @param props.children
 * @returns 
 */
export default function createGoogle(options: GoogleOptions) {

  const termsAndConditionsDialogOptions: TermsAndConditionsDialogOptions = {
    title: 'Hello Google Maps',
    companyName: 'Your Company Name',
    showOnlyDisclaimer: true,
  };

  type GoogleMapProps = {
    children?: React.ReactNode;
  }

  const Google = (props: GoogleMapProps) => {
    const { children } = props;
    return (
      <NavigationProvider
        termsAndConditionsDialogOptions={termsAndConditionsDialogOptions}
        taskRemovedBehavior={TaskRemovedBehavior.CONTINUE_SERVICE}
      >
        {children}
      </NavigationProvider>
    )
  }

  return Google;
}