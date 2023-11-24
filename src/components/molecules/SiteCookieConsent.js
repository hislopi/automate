import React from "react"
import CookieConsent from "react-cookie-consent"

export const SiteCookieConsent = () => {
  return (
    <CookieConsent
      buttonText="Accept all Cookies"
      buttonStyle={{
        borderRadius: "5px",
        fontSize: "17px",
        fontWeight: "400",
        padding: "13px 15px",
        background: "#69c350",
      }}
      style={{ background: "white", color: "#000000" }}>
      <span style={{ color: "#000000" }}>
        This site uses cookies to improve your browsing experience, perform
        analytics and research, and conduct advertising. Closing the banner or
        clicking Accept all Cookies indicates you agree to the use of cookies on
        your device.
      </span>{" "}
    </CookieConsent>
  )
}
