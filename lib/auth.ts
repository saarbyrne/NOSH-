"use client"

export const isAuthenticated = (): boolean => {
  if (typeof window === "undefined") return false
  return localStorage.getItem("nosh-auth") !== null
}

export const logout = (): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("nosh-auth")
    window.location.href = "/login"
  }
}

export const login = (email: string, password: string): boolean => {
  // Fake authentication - replace with real auth later
  if (email === "jenni@nosh.com" && password === "nosh2024") {
    if (typeof window !== "undefined") {
      localStorage.setItem("nosh-auth", "fake-jwt-token")
    }
    return true
  }
  return false
}

export const getAuthToken = (): string | null => {
  if (typeof window === "undefined") return null
  return localStorage.getItem("nosh-auth")
}
