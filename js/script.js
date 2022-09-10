//Seleção dos elementos
const afazeresForm = document.querySelector("#afazeres-form");
const afazeresInput = document.querySelector("#afazeres-input");
const afazeresLista = document.querySelector("#lista-afazeres");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelarEdicao = document.querySelector("#cancel-edit-btn");

let outroInputValue;


//Funções
const salvarAfazer = (texto) =>{
    const afazer = document.createElement("div"); 
    afazer.classList.add("afazer"); 
    
    
    const afazerTitulo = document.createElement("h3");
    afazerTitulo.innerText = texto; 
    afazer.appendChild(afazerTitulo);

    const feitoBtn = document.createElement("button");
    feitoBtn.classList.add("finalizar-afazer")
    feitoBtn.innerHTML = '<i class="fa-solid fa-check">'; 
    afazer.appendChild(feitoBtn);
    
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-afazer")
    editBtn.innerHTML = '<i class="fa-solid fa-pen">';
    afazer.appendChild(editBtn);
    
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remover-afazer")
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark">';
    afazer.appendChild(deleteBtn);

    afazeresLista.appendChild(afazer); 
    afazeresInput.value = ""; 
    afazeresInput.focus(); 

};

const mostrarApenasEditar = () => { //adicionar e remover classe hide para ocultar elementos
    afazeresForm.classList.toggle("hide"); 
    afazeresLista.classList.toggle("hide");
    editForm.classList.toggle("hide"); 
}

const atualizarAfazer = (editInputValue) => {
    const afazeres = document.querySelectorAll(".afazer");
    afazeres.forEach((afazer) => {  
        let afazerTitulo = afazer.querySelector("h3"); 
        if(afazerTitulo.innerText === outroInputValue){ 
            afazerTitulo.innerText = editInputValue; 
        }
    })
}

//Eventos 
    afazeresForm.addEventListener("submit", (e) => {
        e.preventDefault(); //enviar formulario sem recarregar a pagina
        
        const inputValue = afazeresInput.value;
        if(inputValue){
            salvarAfazer(inputValue); 
        }

       
    });

    document.addEventListener("click", (e) => {
        const targetEl = e.target ; //evento clicado
        const parentEl = targetEl.closest("div"); //verifica elemento <div> mais proximo de targetEl
        let tarefaTitulo;

        if(parentEl && parentEl.querySelector("h3")){ 
            tarefaTitulo = parentEl.querySelector("h3").innerText; 
        }


        if(targetEl.classList.contains("finalizar-afazer")){ 
            console.log("clicou em finalizar");
            parentEl.classList.toggle("feitos"); 
        }

        if(targetEl.classList.contains("remover-afazer")){
            console.log("clicou em remover")
            parentEl.remove(); 
        }

        if(targetEl.classList.contains("edit-afazer")){
            mostrarApenasEditar();
            editInput.value = tarefaTitulo; 
            outroInputValue = tarefaTitulo; 
        }

    });

    cancelarEdicao.addEventListener("click", (e) => {
        e.preventDefault(); 
        mostrarApenasEditar(); 
    });

    editForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const editInputValue  =  editInput.value; 
        if(editInputValue){ 
            atualizarAfazer(editInputValue); 
        }
        
        mostrarApenasEditar(); 
    })


    
    

