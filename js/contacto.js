$(document).ready(function(){
    $("#btnContacto").click(function(){
        var nombre = $('#InputName').val();
        var correo = $('#InputEmail').val();
        var mensaje = $('#TextAreaMessage').val();
        if(nombre.length > 0){
            if(correo.length > 0){
                if(mensaje.length > 0){
                    var datos = '{' +
                            '"nombre":"' + nombre + '",' +
                            '"correo":"' + correo + '",' +
                            '"mensaje":"' + mensaje + '"' +
                            '}';
                            console.log(getServidor());
                    $.ajax({
                        type: "POST",
                        url: getServidor()+'index.php/Welcome/CreaContacto',
                        data: datos,
                        dataType: "JSON",
                        success: function(data, textStatus, request) {
                            alert(data.message);
                            window.location.href = window.location;
                        },
                        error: function(request, textStatus, errorThrown) {
                            alert(request.message);
                            window.location.href = window.location;
                        }
                    });
                    $('#InputName').val("");
                    $('#InputEmail').val("");
                    $('#TextAreaMessage').val("");
                }
            }
        }
   });
});
function getServidor(){
    var s = document.cookie.replace(/(?:(?:^|.*;\s*)server\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    //var s = getCookie("server");
    var slash = s.split('%2F');
    var puntos = s.split('%3A');
    for (let i = 0; i < slash.length; i++) {
        s = s.replace('%2F', '/');
    }
    for (let i = 0; i < puntos.length; i++) {
        s = s.replace('%3A', ':');
    }
    return s;
}