import {
  Jost_400Regular,
  Jost_600SemiBold,
  useFonts,
} from "@expo-google-fonts/jost";
import AppLoading from "expo-app-loading";
import * as Notifications from "expo-notifications";
import React, { useEffect } from "react";
import { PlantProps } from "./src/libs/storage";
import Routes from "./src/routes";

export default function App() {
  const [fonstLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      async (notification) => {
        const data = notification.request.content.data.plant as PlantProps;
        console.log(data);
      }
    );

    return () => subscription.remove();
    
    // ! Don't uncomment
    // async function notifications() { 
    //   await Notifications.cancelAllScheduledNotificationsAsync();

    //   const data = await Notifications.getAllScheduledNotificationsAsync();
    //   console.log("## NOTIFICAÇÕES AGENDADAS ##");
    //   console.log(data);
    // }

    // notifications();
  }, []);

  if (!fonstLoaded) {
    return <AppLoading />;
  }

  return <Routes />;
}
