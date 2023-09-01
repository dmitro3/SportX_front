import { createNavigationContainerRef } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export function navigate(name: string) {
  if (navigationRef.isReady()) {
    // @ts-ignore
    navigationRef.navigate(name);
  }
}

export function navigateWithParams(name: string, params: any) {
    if (navigationRef.isReady()) {
      // @ts-ignore
      navigationRef.navigate(name, { params });
    }
  }
  
  export function goBack() {
    if (navigationRef.isReady()) {
      navigationRef.goBack();
    }
  }
  
  export function navigateToStack(stack: string, screen: string) {
    if (navigationRef.isReady()) {
      // @ts-ignore
      navigationRef.navigate(stack, { screen });
    }
  }
  
  export function reset(name: any) {
    if (navigationRef.isReady()) {
      navigationRef.resetRoot({
        index: 0,
        routes: [{ name: name }],
      });
    }
  }
