function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    console.log(section);

    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome do atleta ou esporte</p>";
        return;
    }

    let resultados = ""; // String para acumular o HTML dos resultados

    for (let dado of dados) {
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let tags = dado.tags.toLocaleLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            console.log(dado.titulo.includes(campoPesquisa));

            // Adiciona o HTML do atleta encontrado ao array 'resultados'
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a> 
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p> 
                    <a href=${dado.link} target="_blank">Mais informações</a>
                </div>
            `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atualiza o conteúdo da seção com o HTML de todos os resultados encontrados
    section.innerHTML = resultados;   
}