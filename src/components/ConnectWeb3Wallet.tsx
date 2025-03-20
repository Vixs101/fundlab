"use client";

import { ConnectKitButton } from "connectkit";

export function CustomConnectWallet() {
    const customTheme = {
        "--ck-connectbutton-background": "white",
        "--ck-connectbutton-color": "black",
        "--ck-connectbutton-font-size": ".875rem",
        "--ck-connectbutton-hover-color": "#373737",
        "--ck-connectbutton-border-radius": "8px",
        "--ck-connectbutton-hover-background": "#F0F2F5",
        "--ck-connectbutton-hover-box-shadow": "0 0 0 0 #ffffff",
        "--ck-connectbutton-active-color": "#373737",
        "--ck-connectbutton-active-background": "#EAECF1",
        "--ck-connectbutton-active-box-shadow": "0 0 0 0 #ffffff",
      };
      
    return <ConnectKitButton customTheme={customTheme} />;
}