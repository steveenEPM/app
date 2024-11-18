const consejosSeguridad = [
    {
        titulo: `Usa Contraseñas Fuertes y Únicas`,
        descripcion: `Evita contraseñas fáciles como "123456" o "password". Las contraseñas fuertes deben tener al menos 12 caracteres e incluir una mezcla de letras, números y símbolos. Además, no uses la misma contraseña para varias cuentas. Si tienes dificultades para recordarlas, un gestor de contraseñas puede ayudarte a mantenerlas seguras y organizadas.`
    },
    {
        titulo: `Activa la Autenticación en Dos Pasos (2FA)`,
        descripcion: `La autenticación en dos pasos añade una capa extra de seguridad a tus cuentas en línea. Además de tu contraseña, necesitarás un segundo factor, como un código enviado a tu teléfono o una aplicación de autenticación. Esto hace que, incluso si alguien consigue tu contraseña, no podrá acceder a tu cuenta sin ese segundo código.`
    },
    {
        titulo: `Ten Cuidado con los Correos Phishing`,
        descripcion: `El phishing es una técnica utilizada por ciberdelincuentes para robar información personal a través de correos electrónicos falsos. Siempre verifica el remitente antes de hacer clic en enlaces o abrir archivos adjuntos. Si recibes un correo sospechoso, no respondas ni hagas clic en los enlaces, y asegúrate de que la dirección web sea legítima.`
    },
    {
        titulo: `Mantén Tus Dispositivos y Apps Actualizados`,
        descripcion: `Las actualizaciones de software no solo agregan nuevas características, sino que también corrigen vulnerabilidades de seguridad. Asegúrate de mantener tu sistema operativo, aplicaciones y navegadores actualizados con los últimos parches de seguridad. Las actualizaciones automáticas son una excelente opción para mantener todo al día sin tener que pensarlo.`
    },
    {
        titulo: `Usa Redes Wi-Fi Seguras`,
        descripcion: `Evita conectarte a redes Wi-Fi públicas no protegidas, ya que pueden ser un riesgo para tu privacidad y seguridad. Si necesitas usar una red pública, considera usar una VPN (Red Privada Virtual) para proteger tu información personal. Una VPN cifra tus datos, lo que hace más difícil para los atacantes interceptarlos.`
    }
];

function obtenerConsejoAleatorio() {
    // Seleccionar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * consejosSeguridad.length);

    // Obtener el consejo correspondiente al índice aleatorio
    const consejoAleatorio = consejosSeguridad[indiceAleatorio];

    // Retornar el consejo con su título y descripción
    return {
        titulo: consejoAleatorio.titulo,
        descripcion: consejoAleatorio.descripcion
    };
}

function formatearFecha(fecha) {
    // Dividir la fecha en partes: año, mes y día
    const [año, mes, dia] = fecha.split("-");

    // Crear un objeto Date con la fecha correcta sin afectar el día
    const date = new Date(año, mes - 1, dia); // El mes empieza desde 0

    // Definir un array de los meses en español
    const meses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];

    // Obtener el día, mes y año
    const diaFormateado = date.getDate();
    const mesFormateado = meses[date.getMonth()];
    const añoFormateado = date.getFullYear();

    // Retornar la fecha en el formato deseado
    return `${diaFormateado} de ${mesFormateado} ${añoFormateado}`;
}


function formatDate() {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }
  

  
// Ejemplo de uso

function innerHTML(dateStr) {
    let { titulo, descripcion } = obtenerConsejoAleatorio()

    return `
        <h2>${formatearFecha(dateStr)}</h2>
        <div>
            <h3>${titulo}</h3>
            <p>
                ${descripcion}
            </p>
        </div>
    `
}

document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var eventDiv = document.querySelector(".event")
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'es', // Establece el idioma a español
        dateClick: function (info) {

            let dateStr = info.dateStr
            eventDiv.innerHTML = innerHTML(dateStr)
         

        }
    });
    calendar.render();
    console.log(new Date());
    
    eventDiv.innerHTML=innerHTML(formatDate())

  
});
