import {Stack} from "expo-router";
import '@/app/styles.css'

export default function RootLayout() {
    return <Stack
        screenOptions={{
            headerShown: false
        }}
    />
}
