# my-react-native-app

一个学习React Native的项目

# 学习资料

[react-native github](https://github.com/facebook/react-native)

[React Native中文网](https://reactnative.cn/)

# 新建项目

使用react native命令行工具新建项目

`react-native init 项目名`

运行项目，首先要确保有可用的真机或模拟器

```
cd 项目名
react-native run-android
```

# 笔记

### 尺寸

> React Native 中的尺寸都是无单位的，表示的是与设备像素密度无关的逻辑像素点。

### TextInput

> `TextInput`在安卓上默认有一个底边框，同时会有一些padding。如果要想使其看起来和iOS上尽量一致，则需要设置`padding: 0`，同时设置`underlineColorAndroid="transparent"`来去掉底边框。
>
> 又，在安卓上如果设置`multiline = {true}`，文本默认会垂直居中，可设置`textAlignVertical: 'top'`样式来使其居顶显示。
>
> 又又，在安卓上长按选择文本会导致`windowSoftInputMode`设置变为`adjustResize`，这样可能导致绝对定位的元素被键盘给顶起来。要解决这一问题你需要在AndroidManifest.xml中明确指定合适的`windowSoftInputMode`( <https://developer.android.com/guide/topics/manifest/activity-element.html> )值，或是自己监听事件来处理布局变化。