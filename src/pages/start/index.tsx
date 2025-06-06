export default function Start() {

  const features = [
    {
      title: 'Easy coding',
      description: 'Get a web-like coding experience',
    },
    {
      title: 'Tailwind CSS',
      description: 'Don’t use native styles',
    },
    {
      title: 'No need to introduce basic components',
      description: '<view> -> <View>',
    },
  ]

  return (
    <safe-area className="w-screen h-screen">
      <view
        className="mx-auto max-w-sm flex-1 justify-between gap-4 px-1 py-4"
      >
        <view className="ios:pt-8 pt-12">
          <text className="text-4xl text-center font-bold ios:text-left ios:font-black dark:text-white">
            Welcome to Bamboo
          </text>
          <text className="text-4xl text-center font-bold ios:text-left ios:font-black text-blue-400 animate-bounce">
            Application
          </text>
        </view>
        <view className="gap-8">
          {
            features?.map((item) => {
              return (
                <view key={item?.title} className="flex-row gap-4">
                  <view>

                  </view>
                  <view className="flex-1">
                    <text className="text-2xl font-bold -mt-1.5 dark:text-white">
                      {item?.title}
                    </text>
                    <text className="dark:text-slate-300">
                      {item?.description}
                    </text>
                  </view>
                </view>
              )
            })
          }
        </view>
        <touchable-highlight
          className="bg-blue-500 rounded-lg h-[40px] items-center justify-center"
        >
          <text className="drak:text-white text-white font-bold text-lg">
            Next
          </text>
        </touchable-highlight>
      </view>
    </safe-area>
  )
}