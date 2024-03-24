import polimorfismo from "../fundamentos/polimorfismo"
import registrarUsuario from "../usuario/registrarUsuario"
import TerminalUtil from "../util/TerminalUtil"

export default async function menuUsuario() {
    TerminalUtil.titulo(`Usuarios`)

    const [indice] = await TerminalUtil.menu([`1. Registrar Usuário`, `Voltar`])

    switch (indice) {
        case 0:
            await registrarUsuario()
            break
        default:
            return
    }

    await menuUsuario()
}
