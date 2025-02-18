
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector(".menuBtn");
    const menu = document.querySelector("#menu");
    const closeBtn = document.querySelector(".closeBtn");
    
    menuBtn.addEventListener('click',(e)=>{
        
        if(!menu.classList.contains("open")){
            menu.classList.add("open");
        }
    })
    closeBtn.addEventListener("click",(e)=>{
        if(menu.classList.contains("open")){
            menu.classList.remove("open")
          
        }
    })
    
    
    
    
    // Seleciona todos os elementos com a classe .curso
    const cursos = document.querySelectorAll('.curso');
    
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
    cursos.forEach(curso => {
        observer.observe(curso);
    });
    
    
    const tecnologiasSection = document.querySelector('.tecnologias');
    const icones = document.querySelector('.icones');
    
    //tecnologias
    // Função que será chamada quando a seção se tornar visível
    const observar = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // Quando a seção 'tecnologias' entra na tela
            if (entry.isIntersecting) {
                // Adiciona a classe 'animate' para disparar a animação
                icones.classList.add('animate');
            }
        });
    }, {
        threshold: 0.5  // Dispara quando 50% da seção estiver visível
    });
    
    // Observar a seção de Tecnologias
    observar.observe(tecnologiasSection);
    
    
    
    
    
    // Seletor do pop-up e do botão de fechamento
    const popup = document.querySelector(".popup");
    const exitPopup = popup.querySelector(".exit"); // Selecionando o "X" dentro do pop-up
    
    
    // Mostrar o pop-up com informações do curso
    
    
    // Evento para exibir o pop-up
    cursos.forEach(curso => {
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
    
    document.getElementById('contato').onclick = function() {
        document.getElementById('rodape').scrollIntoView({ behavior: 'smooth' });
    };

})

