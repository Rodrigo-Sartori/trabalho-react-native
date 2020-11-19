export const validaAcesso = async (cpf, senha) => {
    const resposta = await fetch('http://localhost:8080/auth', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            cpf: cpf,
            senha: senha
        })
    })
    if (!resposta.ok) {
        console.log("erro no login status: " + resposta.status)
    } else {
        const jsonResposta = await resposta.json()
        return jsonResposta.dados.token
    }

}