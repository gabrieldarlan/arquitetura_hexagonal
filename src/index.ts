import dotenv from "dotenv"

dotenv.config({
    path: ".env",
    encoding: "latin1",
    debug: true,
})
// require("dotenv").config()
import menuPrincipal from "./app/menu/menuPrincipal"
menuPrincipal()
