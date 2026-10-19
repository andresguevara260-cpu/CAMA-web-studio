# CAMA web studio — sitio web

Sitio estático responsive para presentar los servicios de CAMA web studio y recibir consultas de potenciales clientes.

## Archivos
- `index.html`: contenido y estructura.
- `styles.css`: diseño visual, responsive y estilos de interacción.
- `script.js`: menú móvil, año automático y formulario de contacto.
- `assets/`: carpeta reservada para imágenes propias si deseas añadirlas.

## Probar en tu computadora
1. Descarga y descomprime `cama-web-studio.zip`.
2. Abre la carpeta `cama-web-studio`.
3. Haz doble clic en `index.html` para abrirlo en el navegador.
4. Para editar, abre la carpeta con Visual Studio Code.

No necesitas instalar dependencias ni ejecutar un servidor para probar la versión inicial. La tipografía se carga desde Google Fonts; si no hay conexión, el sitio usa fuentes alternativas del sistema.

## Personalizar el contacto (importante)
Abre `script.js` y cambia:
```js
const CONFIG = {
  email: "hola@camaweb.studio",
  whatsapp: ""
};
```
- Cambia `email` por el correo real que quieras recibir.
- Para usar WhatsApp, rellena `whatsapp` con el número internacional sin `+`, espacios ni guiones (por ejemplo, `521234567890`). Al hacerlo, el formulario abrirá WhatsApp con el mensaje preparado en lugar del correo.
- Si dejas `whatsapp` vacío, el formulario usa `mailto:` y abre la aplicación de correo del visitante. Este formulario no guarda ni envía datos por sí solo; para recibir formularios directamente en una bandeja de entrada sin que el usuario abra su correo, integra después un servicio de formularios o backend.

## Publicar gratis con GitHub Pages
1. Crea una cuenta en https://github.com/ si todavía no tienes una.
2. Crea un repositorio nuevo, por ejemplo `cama-web-studio`.
3. Sube `index.html`, `styles.css`, `script.js` y la carpeta `assets` a la raíz del repositorio.
4. En el repositorio, abre **Settings → Pages**.
5. En **Build and deployment**, selecciona **Deploy from a branch**.
6. Selecciona la rama `main` y la carpeta `/ (root)`, guarda los cambios.
7. Espera a que termine la publicación. GitHub mostrará una dirección similar a `https://TU-USUARIO.github.io/cama-web-studio/`.

La disponibilidad de GitHub y sus funciones puede variar según la región o la red. Si no puedes usarlo, puedes publicar los mismos archivos en otro servicio de hosting estático compatible o en tu propio alojamiento web.

## Antes de anunciar el sitio
- [ ] Sustituir `hola@camaweb.studio` por un correo que exista y controles.
- [ ] Añadir tu WhatsApp si lo deseas.
- [ ] Revisar textos, servicios, precios y datos de contacto.
- [ ] Sustituir los conceptos visuales de muestra por proyectos reales cuando los tengas.
- [ ] Probar enlaces, formulario y diseño en un teléfono.
- [ ] Si compras un dominio, conectarlo en los ajustes del proveedor de hosting.

## Nota sobre los proyectos
Las tarjetas de la sección de proyectos son conceptos ilustrativos creados para mostrar posibles estilos. No deben presentarse como trabajos reales de clientes.
