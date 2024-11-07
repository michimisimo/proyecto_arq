
# Gestión de Envío Masivo de Campañas de Email y SMS

Este proyecto es un sistema para la **gestión y envío masivo de correos electrónicos en campañas de difusión**. La aplicación organiza campañas de marketing, administra destinatarios y difusiones, y permite realizar un seguimiento detallado de cada campaña mediante reportes. Su arquitectura basada en microservicios asegura escalabilidad y eficiencia, mientras que las bases de datos distribuidas permiten una mejor organización y consulta de la información de cada envío.

### Características principales

* Gestión de campañas: Creación, edición y eliminación de campañas de email.
* Gestión de destinatarios: Creación, edición y eliminación de destinatarios.
* Control de destinatarios y difusiones: Selección de destinatarios para añadirlos a una campaña.
* Envío y monitoreo: Ejecución y estado de los envíos en tiempo real.
* Reportes de rendimiento: Generación de estadísticas de envíos y resultados.

## Prerrequisitos

* Tener Docker Desktop instalado.
* Conexión a internet.
* Abrir el navegador en modo oscuro.



## Instalación

**1.-** Descargar el proyecto "proyecto_arq.zip" desde el repositorio de GitHub.

**2.-** Extraer archivos de proyecto_arq.zip

**3.-** Abrir Docker Desktop

**4.-** Abrir terminal   
Windows: Windows PowerShell    
    Linux: Shell

**5.-** Posicionarse sobre la carpeta del proyecto

**6.-** Ejecutar comando:   

```bash
  docker-compose up --build
```

## Navegación Inicial

* Abrir el navegador con la ruta:   
```bash
  http://localhost:8080/
```
* En la vista home:   
  **-** Hacer clic en el botón "LogIn" para abrir el formulario.   
  **-** Dejar los campos vacíos y presionar el botón "Ingresar".

* Ahora puedes disfrutar de las características del proyecto.
## Tecnologías

**Cliente:** Angular, Node.js

**Servidor:** Node.js, Express.js, Nginx

**Externos:** Docker, RabbitMQ, MailSender, Supabase


## Autores

- [@FelipeUrbina 🦁](https://www.github.com/michimisimo)
- [@MariaJoseCalderon 🦁](https://www.github.com/mariajosecq)

