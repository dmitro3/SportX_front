import { EXPO_WALLET_CONNECT_PROJECT_URL, EXPO_WALLET_CONNECT_PROJECT_ID, EXPO_WALLET_CONNECT_PROJECT_NAME } from "@env";

export const projectId = `${EXPO_WALLET_CONNECT_PROJECT_ID.toString()}`

export const providerMetadata = {
    name: `${EXPO_WALLET_CONNECT_PROJECT_NAME.toString()}`,
    description: 'Sport-X Connect',
    url: `${EXPO_WALLET_CONNECT_PROJECT_URL.toString()}`,
    icons: ['https://your-project-logo.com/'],
    redirect: {
        native: 'YOUR_APP_SCHEME://',
        universal: `${EXPO_WALLET_CONNECT_PROJECT_URL.toString()}`
    }
}
