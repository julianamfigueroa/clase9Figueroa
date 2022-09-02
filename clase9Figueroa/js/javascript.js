let l_id; 
let l_index;
let l_nrocd;
let l_p;
let l_titulo;
let ul;
let li;
let l_album;
let l_tema;

// CONTENEDOR DE LAS TAPAS DE DISCOS
let l_container = document.getElementById("contenedor-img");

// OCULTO EL DIV DE DISCOS/TEMAS
let l_divalbum = document.getElementById("album");
let l_divalbum_c = document.getElementById("album_canciones");
l_divalbum.classList.add("div_hide");

// Hago un array con los divs para identificar en cual estoy parado
let arr_idcd = ["cd01", "cd02", "cd03", "cd04", "cd05", "cd06", "cd07", "cd08", "cd09", "cd10"];


function fn_showalbum(_album){
// Esta sería la función en la que recibo qué album voy a mostrar 
// Segun qué div (disco) clickeó yo ya se qué nro es y puedo ir a buscar sus datos donde esten almacenados
    // Aca iría a buscar el titulo para completar el h3
    l_titulo = document.createElement("h3");
    l_titulo.innerText = "Nombre del Album";
    l_titulo.className = "album-titulo";
    l_divalbum.innerHTML = "";
    l_divalbum.className = 'discos'
    l_divalbum.append(l_titulo);
    // Creo el div con la lista de temas - Por ahora es un UL - Simulo que tiene 13 temas 
    ul = document.createElement("ul");
    for (let z = 0; z < 13; z++) {
        l_tema = 'Nombre de la Cancion'; 
        li = document.createElement("li");
        li.innerText = l_tema;
        ul.append(li); 
    }
    ul.className = "discos-p";
    l_divalbum_c.innerHTML = "";
    l_divalbum_c.appendChild(ul);
    l_divalbum.appendChild(l_divalbum_c);
}


function fn_overalbum(){
    console.log('over');
    document.getElementById(l_album).style.backgroundImage = `url('./img/albums/ts${l_nrocd}.jpg')`;
    document.getElementById(l_album).style.transitionDuration = "0.5s";
    l_p  = document.getElementById(`p${l_nrocd}`);
    l_p.style.color = "#dfdde5"; 
}

function fn_outalbum(){
    console.log('out');
    document.getElementById(l_album).style.backgroundImage = `url('./img/albums/ts${l_nrocd}b.jpg')`;
    document.getElementById(l_album).style.transitionDuration = "0.5s";
    l_p.style.color = "#8f899c";
}


// SI ELIGE UN DISCO, SE MUESTRA EL CLICEKADO
l_container.addEventListener("mousedown", function(e){
    l_divalbum.classList.add("div_hide");  
    // Si clickeó en un disco, habilito el div
    if (e.target.className == "cont-img"){
        l_divalbum.classList.remove("div_hide"); 
    };
    // Lo relleno con los datos del disco
    l_id = e.target.id; 
    if ( (arr_idcd.includes)(l_id) ){
        l_index = arr_idcd.indexOf(l_id);
        l_album = arr_idcd[l_index];
        document.getElementById(l_album).addEventListener("click", fn_showalbum(l_index));
    };
})


// MOUSEOVER SOBRE LAS IMG
l_container.addEventListener("mouseover", function(e){
    // Si se paró con el mouse sobre un disco, muestro la imagen que corresponde
    l_cd = e.target.id; 
    if ( (arr_idcd.includes)(l_cd) ){
        l_nrocd = arr_idcd.indexOf(l_cd);
        l_album = arr_idcd[l_nrocd];
        l_nrocd = l_nrocd + 1; 
        document.getElementById(l_album).addEventListener("mouseover", fn_overalbum());
    }else{
        if (l_album != null){ document.getElementById(l_album).addEventListener("mouseout", fn_outalbum()); }
    };
})

