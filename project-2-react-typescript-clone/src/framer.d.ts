declare module "@/framer/DynamicInfo.js" {
  import { ComponentType } from "react";
  const DynamicInfo: ComponentType<any>;
  export default DynamicInfo;
}

declare module "@/framer/Navigation.js" {
  import { ComponentType } from "react";
  const Navigation: ComponentType<any>;
  export default Navigation;
}

declare module "@/framer/_framer-runtime.js" {
  import { ComponentType, ReactNode } from "react";
  export const FetchClientProvider: ComponentType<{ children: ReactNode; client?: any }>;
}
