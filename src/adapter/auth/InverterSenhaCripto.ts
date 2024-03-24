import ProvedorCriptografia from "../../core/usuario/service/ProvedorCriptografia"

// Na arquitetura hexagonal esta classe é um adaptador
export default class InverterSenhaCripto implements ProvedorCriptografia {
    criptografar(senha: string) {
        return senha.split("").reverse().join("")
    }
}
