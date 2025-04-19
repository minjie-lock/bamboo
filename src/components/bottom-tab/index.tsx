import type {
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';

export default function BottomTabs(props: BottomTabBarProps) {


  const {
    state,
  } = props;

  const onLink = () => {

  };

  return (
    <bamboo.view>
      {
        state.routes.map(route => {
          const onPress = () => {
            onLink();
          };
          return (
            <bamboo.view key={route.key}>
              <bamboo.text>{state.routeNames}</bamboo.text>
            </bamboo.view>
          );
        })
      }
    </bamboo.view>
  );
}
