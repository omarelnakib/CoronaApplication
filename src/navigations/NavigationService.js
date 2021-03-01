import * as React from "react";
import { StackActions,NavigationActions } from "@react-navigation/native";
export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
export function replace(name, params) {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
  console.log(navigationRef)
}
export function goBack() {
  navigationRef.current?.goBack();
}
export function reset(name, params){
  navigationRef.current?.dispatch(StackActions.popToTop());
  navigationRef.current?.navigate(name, params);

}
