import { Polar } from "@polar-sh/sdk"

export const polarCLient = new Polar({
    accessToken: process.env.POLAR_ACCESS_TOKEN,
    server: "sandbox",
})