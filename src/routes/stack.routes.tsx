import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
  Confirmation,
  PlantSelect,
  UserIdentification,
  Welcome,
} from "../pages";
import { colors } from "../styles";

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{ cardStyle: { backgroundColor: colors.white } }}
  >
    <stackRoutes.Screen name="Welcome" component={Welcome} />
    <stackRoutes.Screen
      name="UserIdentification"
      component={UserIdentification}
    />
    <stackRoutes.Screen name="Confirmation" component={Confirmation} />

    <stackRoutes.Screen name="PlantSelect" component={PlantSelect} />
  </stackRoutes.Navigator>
);

export default AppRoutes;
