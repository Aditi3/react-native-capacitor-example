# React Native Capacitor Adjust Example

React Native Capacitor Example demonstrating usage of Adjust Cordova plugin.

## Add Adjust SDK to your project 

```
npm install @awesome-cordova-plugins/adjust --save
npm add com.adjust.sdk
```

## Integrate Adjust SDK into your app

##### Import the Adjust SDK

```
import { Adjust, AdjustConfig, AdjustEnvironment, AdjustLogLevel, AdjustEvent } from '@awesome-cordova-plugins/adjust';
```

##### Create Adjust Config and track an event 

```
var adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
Adjust.create(adjustConfig);

var adjustEvent = new AdjustEvent("g3mfiw");
Adjust.trackEvent(adjustEvent);
```
