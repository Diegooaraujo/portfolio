const menuProjetos = document.querySelector(".menuProjetos")
const closeBtn = document.querySelector(".closeBtn")
const imgGithub = '../img/icones/github.png';



menuProjetos.addEventListener("click", (e) => {
    if (!menu.classList.contains("open")) {
        menu.classList.add("open");
    }
})

closeBtn.addEventListener("click", (e) => {
    if (menu.classList.contains("open")) {
        menu.classList.remove("open")
    }
})

// Seleciona todos os projetos que precisam da animação
const projetos = document.querySelectorAll('.projetos.reveal');

// Função para verificar quando o projeto entra na tela
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        
        if (entry.isIntersecting) {
            // Quando o projeto entra na tela, adiciona a classe 'visible'
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.5 }); // 50% do elemento precisa estar visível

// Observa cada projeto
projetos.forEach(projeto => {
   
    observer.observe(projeto);
});

document.getElementById('contato').onclick = function () {
    document.getElementById('rodape').scrollIntoView({ behavior: 'smooth' });
};

const todosProjetos = [
    {
        nome: 'Buscador de Cep',
        descricao: 'A aplicação permite que os usuários insiram um CEP e retornem informações relacionadas a esse CEP, como endereço e localização. A integração com APIs de serviço de CEP é esperada para buscar esses dados.',
        imagem: '../img/BuscaCep.png',
        site: 'https://gerador-de-qr-code-rouge.vercel.app/',
        github: 'https://github.com/Diegooaraujo/gerador-de-QR-Code',
        tecnologias:['../img/icones/react.png',],
    },
    {
        nome: 'Gerador de QrCode',
        descricao: 'Este projeto é um Gerador de QR Code, um site simples e interativo que permite aos usuários inserir uma URL ou um texto e gerar automaticamente um QR Code. A interface é composta por um campo de entrada de texto, um botão para gerar o código, e a exibição do QR Code gerado.',
        imagem: '../img/qrCode.png',
        site: 'https://gerador-de-qr-code-rouge.vercel.app/',
        github: 'https://github.com/Diegooaraujo/gerador-de-QR-Code',
        tecnologias:['../img/icones/html.png','../img/icones/css-3.png','../img/icones/js.png'],
    },
    {
        nome: 'Lista de tarefas',
        descricao: 'Este projeto é uma Lista de Tarefas Avançada (Todo List), onde os usuários podem adicionar, editar, concluir, excluir e buscar tarefas de maneira interativa e eficiente. A interface permite que as tarefas sejam filtradas por status (feitas ou a fazer) e pesquisadas em tempo real. O projeto utiliza um sistema de armazenamento local (LocalStorage) para salvar as tarefas, garantindo que os dados persistam mesmo após o fechamento do navegador.',
        imagem: '../img/lista-de-tarefas.png',
        site: 'https://lista-de-tarefas-phi-drab.vercel.app/',
        github: 'https://github.com/Diegooaraujo/Lista-de-Tarefas/tree/main',
        tecnologias:['../img/icones/html.png','../img/icones/css-3.png','../img/icones/js.png'],
    },
    {
        nome: 'Amigo Secreto',
        descricao: 'Este projeto é uma aplicação de Amigo Secreto desenvolvida para facilitar a organização do tradicional jogo de troca de presentes. Através da interface web, o usuário pode adicionar os nomes dos amigos, visualizar a lista de participantes e sortear aleatoriamente o amigo secreto. Além disso, há a funcionalidade para limpar a lista de amigos antes de começar um novo sorteio.',
        imagem: '../img/Amigo-Secreto.png',
        site: 'https://amigo-secreto-iota-five.vercel.app/',
        github: 'https://github.com/Diegooaraujo/Amigo-Secreto',
        tecnologias:['../img/icones/html.png','../img/icones/css-3.png','../img/icones/js.png'],
    },
    {
        nome: 'Numero Secreto',
        descricao: 'Este projeto é um simples jogo de adivinhação de número secreto. O objetivo do jogo é adivinhar um número secreto sorteado aleatoriamente entre 1 e 10, com a ajuda de dicas fornecidas após cada tentativa. O jogo conta com feedbacks visuais e sonoros, como a utilização da biblioteca ResponsiveVoice.js para gerar uma voz que descreve o que está acontecendo (como o número escolhido ser maior ou menor).',
        imagem: '../img/numero-secreto.png',
        site: 'https://jogo-numero-secreto-eight-sage.vercel.app/',
        github: 'https://github.com/Diegooaraujo/jogo-Numero-secreto',
        tecnologias:['../img/icones/html.png','../img/icones/css-3.png','../img/icones/js.png'],
    },
];

adicionarProjetos()

function adicionarProjetos() {
    const container = document.querySelector(".trabalhos");
    let count = 1;
    todosProjetos.forEach(projeto => {

        const posicao = count % 2 === 0 ? 'right' : 'left';  // Se count for ímpar -> 'left', se for par -> 'right'
        const projetoClasse = count % 2 === 0 ? 'projetoRight' : 'projetoLeft';  // Classe adicional para o layout
        // Criação dos elementos para cada projeto

        if (posicao == 'left') {
            
            const divContainer = document.createElement("div");
            divContainer.classList.add("container");

            const divImg = document.createElement('div');


            divImg.classList.add(projetoClasse);  // Você pode mudar isso dependendo da posição
            divImg.style.backgroundImage = `url(${projeto.imagem})`;
            divImg.style.backgroundPosition = "top"
            divImg.style.backgroundSize = "cover"

            const projetos = document.createElement("div");
            projetos.classList.add('projetos', 'reveal'); // Adiciona a classe 'reveal' para que o IntersectionObserver funcione
            projetos.classList.add(posicao); // Isso pode ser alternado dependendo da posição

            const descProjeto = document.createElement('div');
            descProjeto.classList.add('descProjeto');

            const titulo = document.createElement('h3');
            titulo.innerHTML = projeto.nome;

            const desc = document.createElement('p');
            desc.innerHTML = projeto.descricao;

            const divDescProjeto_img = document.createElement('div');
            divDescProjeto_img.classList.add('descProjeto_img');
            // const img = document.createElement('img');
            // img.src = projeto.imagem;
            if(projeto.tecnologias){
                projeto.tecnologias.forEach(image=>{
                    let imagem = document.createElement('img')
                    imagem.src = image
                    divDescProjeto_img.appendChild(imagem)
                })
            }
           

            const divButtons = document.createElement('div');
            divButtons.classList.add('buttons');

            const linkSite = document.createElement('a');
            linkSite.href = projeto.site;
            linkSite.innerHTML = 'Visite';
            linkSite.setAttribute('target','_blank')

            const linkGithub = document.createElement('a');
            linkGithub.classList.add('gitHub');
            linkGithub.href = projeto.github;
            linkGithub.setAttribute('target','_blank')
            const gitImg = document.createElement('img');
            gitImg.src = imgGithub;

            linkGithub.appendChild(gitImg);
            divButtons.appendChild(linkSite);
            divButtons.appendChild(linkGithub);

            
            descProjeto.appendChild(titulo);
            descProjeto.appendChild(desc);
            descProjeto.appendChild(divDescProjeto_img)
            descProjeto.appendChild(divButtons);
            projetos.appendChild(divImg);
            projetos.appendChild(descProjeto);
            divContainer.appendChild(projetos);
            container.appendChild(divContainer);

            // Certifique-se de observar o projeto após ser adicionado
            observer.observe(projetos); // Observando o novo projeto
            count++
        }else{
            
            const divContainer = document.createElement("div");
            divContainer.classList.add("container");

            const divImg = document.createElement('div');


            divImg.classList.add(projetoClasse);  // Você pode mudar isso dependendo da posição
            divImg.style.backgroundImage = `url(${projeto.imagem})`;
            divImg.style.backgroundPosition = "top"
            divImg.style.backgroundSize = "cover"

            const projetos = document.createElement("div");
            projetos.classList.add('projetos', 'reveal'); // Adiciona a classe 'reveal' para que o IntersectionObserver funcione
            projetos.classList.add(posicao); // Isso pode ser alternado dependendo da posição

            const descProjeto = document.createElement('div');
            descProjeto.classList.add('descProjeto');

            const titulo = document.createElement('h3');
            titulo.innerHTML = projeto.nome;

            const desc = document.createElement('p');
            desc.innerHTML = projeto.descricao;

            const divDescProjeto_img = document.createElement('div');
            divDescProjeto_img.classList.add('descProjeto_img');
         

            if(projeto.tecnologias){
                projeto.tecnologias.forEach(image=>{
                    let imagem = document.createElement('img')
                    imagem.src = image
                    divDescProjeto_img.appendChild(imagem)
                })
            }

            const divButtons = document.createElement('div');
            divButtons.classList.add('buttons');

            const linkSite = document.createElement('a');
            linkSite.href = projeto.site;
            linkSite.innerHTML = 'Visite';

            const linkGithub = document.createElement('a');
            linkGithub.classList.add('gitHub');
            linkGithub.href = projeto.github;

            const gitImg = document.createElement('img');
            gitImg.src = imgGithub;

            linkGithub.appendChild(gitImg);
            divButtons.appendChild(linkSite);
            divButtons.appendChild(linkGithub);

           
            descProjeto.appendChild(titulo);
            descProjeto.appendChild(desc);
            descProjeto.appendChild(divDescProjeto_img)
            descProjeto.appendChild(divButtons);
            projetos.appendChild(descProjeto);
            projetos.appendChild(divImg);
            divContainer.appendChild(projetos);
            container.appendChild(divContainer);

            // Certifique-se de observar o projeto após ser adicionado
            observer.observe(projetos); // Observando o novo projeto
            count++
        }



    });
}

document.getElementById('contato').onclick = function() {
    document.getElementById('rodape').scrollIntoView({ behavior: 'smooth' });
};
