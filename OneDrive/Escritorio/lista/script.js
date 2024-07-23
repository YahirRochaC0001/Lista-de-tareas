$(document).ready(function(){
    // Función para ajustar el tamaño del textarea automáticamente
    function ajustarTextarea(textarea) {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
    }

    // Función para agregar una nueva tarea
    $("#tareaForm").submit(function(event){
        event.preventDefault();
        
        const tareaTexto = $("#tareaInput").val().trim();
        if(tareaTexto) {
            const nuevaTarea = `<div class="tarea">
                                    <textarea class="tarea-texto form-control" readonly>${tareaTexto}</textarea>
                                    <div class="botones">
                                        <button class="btn btn-success completar">Completar</button>
                                        <button class="btn btn-danger eliminar">Eliminar</button>
                                    </div>
                                </div>`;
            $("#listaTareas").append(nuevaTarea);
            $("#tareaInput").val(''); // Limpiar el campo de tarea
            
            // Ajustar el tamaño del nuevo textarea
            const nuevoTextarea = $("#listaTareas").find("textarea").last()[0];
            ajustarTextarea(nuevoTextarea);
        }
    });

    // Delegar eventos para completar y eliminar tareas
    $("#listaTareas").on("click", ".completar", function(){
        $(this).closest(".tarea").toggleClass("tarea-completada");
    });

    $("#listaTareas").on("click", ".eliminar", function(){
        $(this).closest(".tarea").remove();
    });

    // Ajustar el tamaño del textarea cuando se inserta texto
    $("#listaTareas").on("input", ".tarea-texto", function(){
        ajustarTextarea(this);
    });
});
