const datos = [
    {
        title: "Verifica los remitentes",
        descripcion: " Los correos de phishing a menudo utilizan direcciones similares, pero con ligeras diferencias (por ejemplo, 'soporte@tu-banco.com' en lugar de 'soporte@tubanco.com')."
    },
    {
        title: "No hagas clic en enlaces sospechosos",
        descripcion: "Si un correo te pide que hagas clic en un enlace para 'verificar' o 'actualizar' tu información, evita hacerlo. En su lugar, visita directamente el sitio web oficial escribiendo la dirección en tu navegador."
    },
    {
        title: "Busca señales de alarma",
        descripcion: "Los errores ortográficos, un tono excesivamente urgente o contenido demasiado bueno para ser verdad (como ganar un premio inesperado) son señales comunes de que un mensaje podría ser fraudulento."
    },

]

function createElement1() {
    const contenedor = document.querySelector('.Consejos');

    datos.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `
        <h3>${item.title}</h3>
        <span>${item.descripcion}</span>
      `;
        contenedor.appendChild(div);
    });

}


document.addEventListener('DOMContentLoaded', function () {
    createElement1()
});
