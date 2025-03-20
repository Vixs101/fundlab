import { ConnectKitButton } from "connectkit"
import { Button } from "./ui/button"


const ConnectWalletButton = () => {
  return (
    <ConnectKitButton.Custom>
      {({ show, isConnected, truncatedAddress }) => (
        <Button
          onClick={show}
          className="bg-white text-black hover:bg-gray-100 h-11 text-sm font-semibold"
        >
          {isConnected ? truncatedAddress : "Connect Wallet"}
        </Button>
      )}
    </ConnectKitButton.Custom>
  )
}

export default ConnectWalletButton