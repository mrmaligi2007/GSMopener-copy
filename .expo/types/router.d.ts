/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/authorized-users-list`; params?: Router.UnknownInputParams; } | { pathname: `/authorized-users`; params?: Router.UnknownInputParams; } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/settings`; params?: Router.UnknownInputParams; } | { pathname: `/step1`; params?: Router.UnknownInputParams; } | { pathname: `/step2`; params?: Router.UnknownInputParams; } | { pathname: `/step3`; params?: Router.UnknownInputParams; } | { pathname: `/step4`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/home` | `/home`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/settings` | `/settings`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/setup` | `/setup`; params?: Router.UnknownInputParams; } | { pathname: `/components/Button`; params?: Router.UnknownInputParams; } | { pathname: `/components/Card`; params?: Router.UnknownInputParams; } | { pathname: `/components/CustomIcons`; params?: Router.UnknownInputParams; } | { pathname: `/components/DeviceInfo`; params?: Router.UnknownInputParams; } | { pathname: `/components/Header`; params?: Router.UnknownInputParams; } | { pathname: `/components/TextInputField`; params?: Router.UnknownInputParams; } | { pathname: `/components/ThemedNavigationContainer`; params?: Router.UnknownInputParams; } | { pathname: `/components/ErrorBoundary`; params?: Router.UnknownInputParams; } | { pathname: `/styles/theme`; params?: Router.UnknownInputParams; } | { pathname: `/contexts/ThemeContext`; params?: Router.UnknownInputParams; } | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/authorized-users-list`; params?: Router.UnknownOutputParams; } | { pathname: `/authorized-users`; params?: Router.UnknownOutputParams; } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/settings`; params?: Router.UnknownOutputParams; } | { pathname: `/step1`; params?: Router.UnknownOutputParams; } | { pathname: `/step2`; params?: Router.UnknownOutputParams; } | { pathname: `/step3`; params?: Router.UnknownOutputParams; } | { pathname: `/step4`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/home` | `/home`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/settings` | `/settings`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/setup` | `/setup`; params?: Router.UnknownOutputParams; } | { pathname: `/components/Button`; params?: Router.UnknownOutputParams; } | { pathname: `/components/Card`; params?: Router.UnknownOutputParams; } | { pathname: `/components/CustomIcons`; params?: Router.UnknownOutputParams; } | { pathname: `/components/DeviceInfo`; params?: Router.UnknownOutputParams; } | { pathname: `/components/Header`; params?: Router.UnknownOutputParams; } | { pathname: `/components/TextInputField`; params?: Router.UnknownOutputParams; } | { pathname: `/components/ThemedNavigationContainer`; params?: Router.UnknownOutputParams; } | { pathname: `/components/ErrorBoundary`; params?: Router.UnknownOutputParams; } | { pathname: `/styles/theme`; params?: Router.UnknownOutputParams; } | { pathname: `/contexts/ThemeContext`; params?: Router.UnknownOutputParams; } | { pathname: `/+not-found`, params: Router.UnknownOutputParams & {  } };
      href: Router.RelativePathString | Router.ExternalPathString | `/authorized-users-list${`?${string}` | `#${string}` | ''}` | `/authorized-users${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `/settings${`?${string}` | `#${string}` | ''}` | `/step1${`?${string}` | `#${string}` | ''}` | `/step2${`?${string}` | `#${string}` | ''}` | `/step3${`?${string}` | `#${string}` | ''}` | `/step4${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/home${`?${string}` | `#${string}` | ''}` | `/home${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/settings${`?${string}` | `#${string}` | ''}` | `/settings${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/setup${`?${string}` | `#${string}` | ''}` | `/setup${`?${string}` | `#${string}` | ''}` | `/components/Button${`?${string}` | `#${string}` | ''}` | `/components/Card${`?${string}` | `#${string}` | ''}` | `/components/CustomIcons${`?${string}` | `#${string}` | ''}` | `/components/DeviceInfo${`?${string}` | `#${string}` | ''}` | `/components/Header${`?${string}` | `#${string}` | ''}` | `/components/TextInputField${`?${string}` | `#${string}` | ''}` | `/components/ThemedNavigationContainer${`?${string}` | `#${string}` | ''}` | `/components/ErrorBoundary${`?${string}` | `#${string}` | ''}` | `/styles/theme${`?${string}` | `#${string}` | ''}` | `/contexts/ThemeContext${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/authorized-users-list`; params?: Router.UnknownInputParams; } | { pathname: `/authorized-users`; params?: Router.UnknownInputParams; } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/settings`; params?: Router.UnknownInputParams; } | { pathname: `/step1`; params?: Router.UnknownInputParams; } | { pathname: `/step2`; params?: Router.UnknownInputParams; } | { pathname: `/step3`; params?: Router.UnknownInputParams; } | { pathname: `/step4`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/home` | `/home`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/settings` | `/settings`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/setup` | `/setup`; params?: Router.UnknownInputParams; } | { pathname: `/components/Button`; params?: Router.UnknownInputParams; } | { pathname: `/components/Card`; params?: Router.UnknownInputParams; } | { pathname: `/components/CustomIcons`; params?: Router.UnknownInputParams; } | { pathname: `/components/DeviceInfo`; params?: Router.UnknownInputParams; } | { pathname: `/components/Header`; params?: Router.UnknownInputParams; } | { pathname: `/components/TextInputField`; params?: Router.UnknownInputParams; } | { pathname: `/components/ThemedNavigationContainer`; params?: Router.UnknownInputParams; } | { pathname: `/components/ErrorBoundary`; params?: Router.UnknownInputParams; } | { pathname: `/styles/theme`; params?: Router.UnknownInputParams; } | { pathname: `/contexts/ThemeContext`; params?: Router.UnknownInputParams; } | `/+not-found` | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
    }
  }
}
