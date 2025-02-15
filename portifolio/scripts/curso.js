document.addEventListener("DOMContentLoaded", function () {
  
  const cursosJs =[
    {
      nome:'Alura',
      descricao:'Praticando Logica de Programação',
      horas:'8 horas',
      imagem:'./img/icones/alura.jpeg'
    },
    {
      nome: "Alura",
      descricao: "Iniciante em programação",
      horas: "70 horas.",
      imagem: "./img/icones/alura.jpeg"
    },
    {
      nome: "Curso em Video",
      descricao: "JavaScript",
      horas: "40 horas.",
      imagem: "./img/icones/curso-em-video.png"
    }
  ]
  const cursosHtml =[
    {
      nome: "Curso em Video",
      descricao: "JavaScript",
      horas: "40 horas.",
      imagem: "./img/icones/curso-em-video.png"
    },{
      nome: "Curso em Video",
      descricao: "JavaScript",
      horas: "40 horas.",
      imagem: "./img/icones/curso-em-video.png"
    },{
      nome: "Curso em Video",
      descricao: "JavaScript",
      horas: "40 horas.",
      imagem: "./img/icones/curso-em-video.png"
    }
  ]
  const cursosPhp =[
    {
      nome: "Hcode",
      descricao: "curso completo de php 7",
      horas: "33 horas.",
      imagem: "./img/icones/unnamed.jpg"
    }
  ]
  const cursosPython =[
    {
      nome: "Curso em video",
      descricao: "PYTHON 3 - MUNDO 1",
      horas: "40 horas.",
      imagem: "./img/icones/curso-em-video.png"
    },
    {
      nome: "Curso em Video",
      descricao: "PYTHON 3 - MUNDO 2",
      horas: "40 horas.",
      imagem: "./img/icones/curso-em-video.png"
    }
  ]
  const cursosGitGithub=[
    {
      nome: "Alura",
      descricao: "Git e Github",
      horas: "8 horas.",
      imagem: "./img/icones/alura.jpeg"
    }
  ]

  // Adicionar cursos dinamicamente
 
  adicionarCursosJs();
  adicionarCursosHtml();
  adicionarCursosPhp();
  adicionarCursosPython();
  adicionarCursosGitGithub();

  
  function adicionarCursosJs() {
    const conteiner = document.getElementById("js");

    cursosJs.forEach(curso => {
      // Criação dos elementos para cada curso
      const divCurso = document.createElement("div");
      divCurso.classList.add("curso");

      const imagem = document.createElement("img");
      imagem.src = curso.imagem;
      imagem.alt = curso.nome;

      const info = document.createElement("div");

      const titulo = document.createElement("h3");
      titulo.textContent = curso.nome;
      

      const descricao = document.createElement("p");
      descricao.textContent = curso.descricao;

      const horas = document.createElement("p");
      horas.textContent = curso.horas;

      // Montando a estrutura do curso
      info.appendChild(titulo);
      info.appendChild(descricao);
      info.appendChild(horas);
      divCurso.appendChild(imagem);
      divCurso.appendChild(info);
     

      // Adicionando o curso ao container
      conteiner.appendChild(divCurso);
    });
  }
  function adicionarCursosPhp() {
    const conteiner = document.getElementById("php");

    cursosPhp.forEach(curso => {
      // Criação dos elementos para cada curso
      const divCurso = document.createElement("div");
      divCurso.classList.add("curso");

      const imagem = document.createElement("img");
      imagem.src = curso.imagem;
      imagem.alt = curso.nome;

      const info = document.createElement("div");

      const titulo = document.createElement("h3");
      titulo.textContent = curso.nome;

      const descricao = document.createElement("p");
      descricao.textContent = curso.descricao;

      const horas = document.createElement("p");
      horas.textContent = curso.horas;

      // Montando a estrutura do curso
      info.appendChild(titulo);
      info.appendChild(descricao);
      info.appendChild(horas);
      divCurso.appendChild(imagem);
      divCurso.appendChild(info);

      // Adicionando o curso ao container
      conteiner.appendChild(divCurso);
    });
  }
  function adicionarCursosHtml() {
    const conteiner = document.getElementById("htmlCss");

    cursosHtml.forEach(curso => {
      // Criação dos elementos para cada curso
      const divCurso = document.createElement("div");
      divCurso.classList.add("curso");

      const imagem = document.createElement("img");
      imagem.src = curso.imagem;
      imagem.alt = curso.nome;

      const info = document.createElement("div");

      const titulo = document.createElement("h3");
      titulo.textContent = curso.nome;

      const descricao = document.createElement("p");
      descricao.textContent = curso.descricao;

      const horas = document.createElement("p");
      horas.textContent = curso.horas;

      // Montando a estrutura do curso
      info.appendChild(titulo);
      info.appendChild(descricao);
      info.appendChild(horas);
      divCurso.appendChild(imagem);
      divCurso.appendChild(info);

      // Adicionando o curso ao container
      conteiner.appendChild(divCurso);
    });
  }
  function adicionarCursosPython() {
    const conteiner = document.getElementById("python");

    cursosPython.forEach(curso => {
      // Criação dos elementos para cada curso
      const divCurso = document.createElement("div");
      divCurso.classList.add("curso");

      const imagem = document.createElement("img");
      imagem.src = curso.imagem;
      imagem.alt = curso.nome;

      const info = document.createElement("div");

      const titulo = document.createElement("h3");
      titulo.textContent = curso.nome;

      const descricao = document.createElement("p");
      descricao.textContent = curso.descricao;

      const horas = document.createElement("p");
      horas.textContent = curso.horas;

      // Montando a estrutura do curso
      info.appendChild(titulo);
      info.appendChild(descricao);
      info.appendChild(horas);
      divCurso.appendChild(imagem);
      divCurso.appendChild(info);

      // Adicionando o curso ao container
      conteiner.appendChild(divCurso);
    });
  }
  function adicionarCursosGitGithub() {
    const conteiner = document.getElementById("gitGithub");

    cursosGitGithub.forEach(curso => {
      // Criação dos elementos para cada curso
      const divCurso = document.createElement("div");
      divCurso.classList.add("curso");

      const imagem = document.createElement("img");
      imagem.src = curso.imagem;
      imagem.alt = curso.nome;

      const info = document.createElement("div");

      const titulo = document.createElement("h3");
      titulo.textContent = curso.nome;

      const descricao = document.createElement("p");
      descricao.textContent = curso.descricao;

      const horas = document.createElement("p");
      horas.textContent = curso.horas;

      // Montando a estrutura do curso
      info.appendChild(titulo);
      info.appendChild(descricao);
      info.appendChild(horas);
      divCurso.appendChild(imagem);
      divCurso.appendChild(info);

      // Adicionando o curso ao container
      conteiner.appendChild(divCurso);
    });
  }

  // Função para alternar entre os conjuntos de cursos
  window.onload = function () {
    const cursosSet1 = document.querySelectorAll('.conteinerCursos .curso:nth-child(-n+4)'); // Primeiros 4 cursos
    const cursosSet2 = document.querySelectorAll('.conteinerCursos .curso:nth-child(n+5)'); // Próximos 4 cursos
  
    function alternarCursos() {
      cursosSet1.forEach(curso => {
        curso.classList.remove('visible');
        curso.classList.add('hidden');
      });
  
      setTimeout(() => {
        cursosSet2.forEach(curso => {
          curso.classList.remove('hidden');
          curso.classList.add('visible');
        });
      }, 50); // Um pequeno delay para garantir que a visibilidade seja aplicada
  
      setTimeout(() => {
        cursosSet2.forEach(curso => {
          curso.classList.remove('visible');
          curso.classList.add('hidden');
        });
  
        setTimeout(() => {
          cursosSet1.forEach(curso => {
            curso.classList.remove('hidden');
            curso.classList.add('visible');
          });
        }, 50);
      }, 5000);
    }
  
    alternarCursos();
    setInterval(alternarCursos, 10000); // Ajuste o intervalo para garantir que a alternância ocorra corretamente
  };

  let vitrine = document.querySelector('.vitrine');

  function vitrineHide() {
    vitrine.classList.remove('hidden');
  }

  function mostraVitrine() {
    setInterval(() => {
      if (vitrine.classList.contains('hidden')) {
        vitrineHide();
      }
    }, 1800);
  }

  // Exibe a vitrine suavemente após 1.5 segundos
  mostraVitrine();

  // Manipulação do menu
  const menuProjetos = document.querySelector(".menuProjetos");
  const closeBtn = document.querySelector(".closeBtn");

  menuProjetos.addEventListener("click", () => {
    const menu = document.getElementById('menu');
    if (!menu.classList.contains("open")) {
      menu.classList.add("open");
    }
  });

  closeBtn.addEventListener("click", () => {
    const menu = document.getElementById('menu');
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
    }
  });

  // Após 1 segundo, começa a adicionar a classe 'visible' para cada curso já presente
  let cursoElements = document.querySelectorAll('.curso');
  setTimeout(() => {
    cursoElements.forEach((curso, index) => {
      setTimeout(() => {
        curso.classList.add('visible');
      }, index * 100);
    });
  }, 100);





  // Seleciona todos os elementos com a classe .curso
  const cursoss = document.querySelectorAll('.curso');

  // Configuração do IntersectionObserver
  const options = {
    root: null, // Observa a viewport
    threshold: 0.5 // A animação acontece quando 50% do curso estiver visível
  };

  // Criando o IntersectionObserver
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Adiciona a classe 'show' quando o curso entrar na viewport
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // Para de observar esse curso após a animação
      }
    });
  }, options);

  // Inicia a observação para cada curso
  cursoss.forEach(curso => {
    observer.observe(curso);
  });






  // Seletor do pop-up e do botão de fechamento
  const popup = document.querySelector(".popup");
  const exitPopup = popup.querySelector(".exit"); // Selecionando o "X" dentro do pop-up


  // Mostrar o pop-up com informações do curso


  // Evento para exibir o pop-up
  cursoss.forEach(curso => {
    curso.addEventListener('click', () => {
      const title = curso.querySelector('h3').innerText;
      const description = curso.querySelector('p').innerText;
      const duration = curso.querySelector('p:nth-child(2)').innerText;
      const imageUrl = curso.querySelector('img').src;

      // Gerar o caminho da imagem do certificado (se necessário)
      const certificadoImageUrl = `./img/certificados/${encodeURIComponent(description)}.png`;

      // Atualizando o conteúdo do pop-up
      popup.querySelector('.popup-title').innerText = title;
      popup.querySelector('.popup-description').innerText = description;
      popup.querySelector('.popup-duration').innerText = duration;
      popup.querySelector('.popup-image').src = imageUrl;
      popup.querySelector('.certificado-img').src = certificadoImageUrl;

      // Exibe o pop-up
      popup.classList.remove('hide');
      console.log("Popup exibido!");
    });
  });

  // Evento para fechar o pop-up ao clicar no botão "X"
  exitPopup.addEventListener('click', () => {
    popup.classList.add('hide');
    console.log("Popup fechado!");
  });

});


document.getElementById('contato').onclick = function() {
  document.getElementById('rodape').scrollIntoView({ behavior: 'smooth' });
};








