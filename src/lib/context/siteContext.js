import React, { createContext, useEffect, useMemo, useState } from "react"
import { useLocation } from "@gatsbyjs/reach-router"

export const SiteContext = createContext()

export const SiteProvider = ({ children }) => {
  return <SiteContext.Provider>{children}</SiteContext.Provider>
}
