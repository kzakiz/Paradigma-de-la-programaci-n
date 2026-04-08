Mini taller

1. ¿Qué significa status 201 created y en donde aparece?
2. ¿Como verifico la actualizacion de los datos por medio de la terminal?
3. ¿Cuales son los status existentes y comunes?
4. ¿Cuando hacer una peticion tipo PATCH?
5. ¿Que es SOAP y cuales son sus diferencias con REST?
6. ¿Qué es graphQL, cuales son las diferencias con REST?

Solución

1R= El 201 Created indica que la solicitud fue exitosa y que se creó un nuevo recurso en el servidor. Aparece normalmente cuando se hace una petición POST, por ejemplo al registrar un usuario.

2R= Se puede usar curl. Primero haces la petición de actualización (PUT o PATCH) y luego una petición GET al mismo recurso. Si los datos cambiaron en la respuesta, significa que sí se actualizó correctamente.

3R= Algunos de los más usados son:

- 200 OK: todo salió bien
- 201 Created: recurso creado
- 204 No Content: éxito sin respuesta
- 400 Bad Request: error en la solicitud
- 401 Unauthorized: falta autenticación
- 403 Forbidden: sin permisos
- 404 Not Found: no existe
- 500 Internal Server Error: error del servidor

4R= Se usa PATCH cuando solo quieres modificar una parte del recurso, no todo. A diferencia de PUT, que reemplaza toda la información.

5R= SOAP es un protocolo que usa XML y es más estricto y pesado.
REST es un estilo de arquitectura que usa HTTP y normalmente JSON, por lo que es más simple y rápido.

6R= GraphQL es un lenguaje de consultas creado por Meta que permite pedir solo los datos necesarios.

La diferencia con REST es que REST devuelve información más fija y usa varios endpoints, mientras que GraphQL es más flexible y usa generalmente uno solo.