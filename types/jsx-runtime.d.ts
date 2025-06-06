import type {
  ActivityIndicatorProps,
  ButtonProps,
  DrawerLayoutAndroidProps,
  FlatListProps,
  ImageBackgroundProps,
  ImageProps,
  InputAccessoryViewProps,
  KeyboardAvoidingViewProps,
  ModalProps,
  PressableProps,
  ScrollViewProps,
  SectionListProps,
  StatusBarProps,
  TextInputProps,
  TextProps,
  TouchableHighlightProps,
  TouchableNativeFeedbackProps,
  TouchableOpacityProps,
  TouchableWithoutFeedbackProps,
  ViewProps,
} from 'react-native';


namespace JSX {

  interface Attributes {
    className?: string;
  }

  interface IntrinsicElements {
    /**
     * @component activity-indicator
     * @description Displays a circular loading indicator.
     * @description 圆形加载指示器
     * @see https://reactnative.dev/docs/activityindicator
     */
    'activity-indicator': ActivityIndicatorProps & Attributes,
    /**
     * @component button
     * @description A basic button component that should render nicely on any platform. Supports a minimal level of customization.
     * @description 一个基本的按钮组件，任何平台都能正常显示，支持一定的自定义
    */
    button: ButtonProps,
    /**
     * @component flat-list
     * @description A core component designed for efficient display of large lists of data.
     * @description 一个用于高效显示大量数据的核心组件
     * @see https://reactnative.dev/docs/flatlist
    */
    'flat-list': FlatListProps & Attributes,
    /**
     * @component image
     * @description A component that displays an image.
     * @description 一个用于显示图片的组件
     * @see https://reactnative.dev/docs/image
    */
    image: ImageProps & Attributes,
    /**
     * @component image-background
     * @description A component that displays an image as a background.
     * @description 一个用于显示图片作为背景的组件
     * @see https://reactnative.dev/docs/imagebackground
     */
    'image-background': ImageBackgroundProps & Attributes,
    /**
     * @component keyboard-avoiding
     * @description A component that adjusts the view's position to avoid keyboard overlaps.
     * @description 一个用于调整视图位置以避免键盘重叠的组件
     * @see https://reactnative.dev/docs/keyboardavoidingview
    */
    'keyboard-avoiding': KeyboardAvoidingViewProps & Attributes,
    /**
     * @component modal
     * @description A component that presents a modal view.
     * @description 一个用于显示模态视图的组件
     * @see https://reactnative.dev/docs/modal
    */
    modal: ModalProps & Attributes,
    /**
     * @component pressable
     * @description A component that detects presses on itself and its children.
     * @description 一个用于检测触摸和子组件的组件
     * @see https://reactnative.dev/docs/pressable
     */
    pressable: PressableProps & Attributes,
    /**
     * @component refresh
     * @description A component that displays a refreshing indicator while the contents of a ScrollView are refreshing.
     * @description 一个用于显示正在刷新的指示器的组件
     * @see https://reactnative.dev/docs/refreshcontrol
    */
    refresh: RefreshControlProps & Attributes,
    /**
     * @component scroll
     * @description A component that renders content inside a scroll view.
     * @description 一个用于渲染内容在滚动视图中的组件
     * @see https://reactnative.dev/docs/scrollview
    */
    scroll: ScrollViewProps & Attributes,
    /**
     * @component section
     * @description A component that renders content inside a section list.
     * @description 一个用于渲染内容在列表中的组件
     * @see https://reactnative.dev/docs/sectionlist
     */
    section: SectionListProps & Attributes,
    /**
     * @component status-bar
     * @description A component that renders the status bar.
     * @description 一个用于渲染状态栏的组件
     * @see https://reactnative.dev/docs/statusbar
     */
    'status-bar': StatusBarProps & Attributes,
    /**
     * @component text
     * @description A component for displaying text.
     * @description 一个用于显示文本的组件
     * @see https://reactnative.dev/docs/text
     */
    text: TextProps & Attributes,
    /**
     * @component input
     * @description A component for entering text.
     * @description 一个用于输入文本的组件
     * @see https://reactnative.dev/docs/textinput
     */
    input: TextInputProps & Attributes,
    /**
     * @component touchable-highlight
     * @description A component for handling touch events.
     * @description 一个用于处理触摸事件的组件
     * @see https://reactnative.dev/docs/touchablehighlight
     */
    'touchable-highlight': TouchableHighlightProps & Attributes,
    /**
     * @component touchable-opacity
     * @description A component for handling touch events.
     * @description 一个用于处理触摸事件的组件
     * @see https://reactnative.dev/docs/touchableopacity
     */
    'touchable-opacity': TouchableOpacityProps & Attributes,
    /**
     * @component touchable-without-feedback
     * @description A component for handling touch events without feedback.
     * @description 一个用于处理触摸事件而无反馈的组件
     * @see https://reactnative.dev/docs/touchablewithoutfeedback
     */
    'touchable-without-feedback': TouchableWithoutFeedbackProps & Attributes,
    /**
     * @component view
     * @description A component for rendering views.
     * @description 一个用于渲染视图的组件
     * @see https://reactnative.dev/docs/view
     */
    view: ViewProps,
    /**
     * @component virtualized-list
     * @description A component for rendering performance-sensitive scroll views with large lists of data.
     * @description 一个用于渲染高性能滚动视图的组件，用于处理大量数据
    */
    'virtualized-list': VirtualizedListProps & Attributes,
    /**
     * @component drawer-layout
     * @description A component for rendering a drawer layout.
     * @description 一个用于渲染抽屉布局的组件
     * @see https://reactnative.dev/docs/drawerlayoutandroid
     */
    'drawer-layout': DrawerLayoutAndroidProps & Attributes,
    /**
     * @component touchable-native-feedback
     * @description A component for rendering a native feedback.
     * @description 一个用于渲染原生反馈的组件
     * @see https://reactnative.dev/docs/touchablenativefeedback
     */
    'touchable-native-feedback': TouchableNativeFeedbackProps & Attributes,
    /**
     * @component input-accessory
     * @description A component for rendering an input accessory.
     * @description 一个用于渲染输入辅助视图的组件
     * @see https://reactnative.dev/docs/inputaccessoryview
     */
    'input-accessory': InputAccessoryViewProps & Attributes,
    /**
     * @description A wrapper for the SafeAreaView component.
     * @see https://reactnative.dev/docs/safeareaview
    */
    'safe-area': SafeAreaViewProps & Attributes;
  }
}

export {
  JSX
}