/** @jsxImportSource ./types  */

import '@/styles/tailwind.css';

export default function Start() {
  return (
    <safe-area className="flex flex-row">
      {/* <view>111</view> */}
      <activity-indicator />
      <text className="text-red-600">
        111
      </text>
      <view></view>
      {/* <view></view> */}
    </safe-area>
  );
}
