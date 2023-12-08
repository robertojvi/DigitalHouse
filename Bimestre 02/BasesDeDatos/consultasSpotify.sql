/*
1) ¿Cuál es la diferencia entre LEFT y RIGHT JOIN en bases de datos?

La operación LEFT JOIN devuelve todas las filas de la tabla a la izquierda del JOIN y 
las filas coincidentes de la tabla a la derecha del JOIN, es decir le da prioridad a la 
tabla izquierda y busca información en la derecha
La operación RIGHT JOIN devuelve todas las filas de la tabla a la derecha del JOIN y 
las filas coincidentes de la tabla a la izquierda del JOIN, es decir como su nombre lo 
dice le dará prioridad a la tabla derecha y buscará información en la izquierda

2) ¿Qué función podríamos utilizar si quisiéramos traer el promedio de likes de todas las 
canciones? 
La función AVG()
SELECT AVG(cantlikes) AS promedio_likes
FROM cancion;

3) ¿Cuál es el orden en el que se procesan las queries SELECT, FROM, WHERE, GROUP BY, HAVING 
y ORDER BY?
FROM, WHERE, GROUP BY, HAVING, SELECT y finalmente ORDER BY

4) Si tenemos una query que trae un listado ordenado por el ID de usuarios la cual
cuenta con un LIMIT 20 OFFSET 27, ¿cuál sería el primer ID de los registros y cuál
el último?
Dado el OFFSET de 27, el primer ID de los registros sería el número 28, 
y el último sería el 47, ya que LIMIT 20 indica que se seleccionan 20 registros 
a partir del OFFSET especificado.

5) ¿Por qué no se recomienda utilizar en exceso DISTINCT, ORDER BY y GROUP BY?
No se recomienda utilizar en exceso DISTINCT, ORDER BY y GROUP BY porque pueden tener 
un impacto significativo en el rendimiento de las consultas SQL.
* DISTINCT: Requiere la eliminación de duplicados, lo que puede ser costoso en términos de 
tiempo de ejecución, especialmente en conjuntos de datos grandes.
* ORDER BY: Ordenar los resultados implica un procesamiento adicional para organizar los 
datos según la columna especificada, lo que puede ralentizar la consulta, especialmente si 
se trabaja con grandes conjuntos de datos.
* GROUP BY: Agrupar datos según ciertas columnas también implica un procesamiento adicional. 
Además, al utilizar GROUP BY, es común utilizar funciones de agregación como COUNT, SUM, AVG, lo que agrega complejidad a la consulta.
En resumen, si bien estas cláusulas son herramientas valiosas, es importante usarlas con 
moderación y entender su impacto en el rendimiento de la consulta. Un uso excesivo puede llevar a consultas más lentas y menos eficientes.

*/


-- 1
SELECT genero.Genero, COUNT( cancion.idCancion ) FROM genero
JOIN generoxcancion ON genero.idGenero = generoxcancion.IdGenero
JOIN cancion ON generoxcancion.IdCancion = cancion.idCancion
WHERE cancion.titulo LIKE ('%m%') AND (genero.Genero = 'Rock' OR genero.Genero = 'Pop')
GROUP BY genero.Genero;

-- 2
SELECT cancion.titulo, cancion.idCancion, COUNT( playlist.idPlaylist ) AS CantidadPlaylists FROM cancion
JOIN playlistxcancion ON cancion.idCancion = playlistxcancion.Idcancion
JOIN playlist ON playlistxcancion.IdPlaylist = playlist.idPlaylist
GROUP BY idCancion, titulo;

-- 3
SELECT artista.Nombre, cancion.titulo, playlist.titulo AS playlist FROM artista
LEFT JOIN album ON artista.idArtista = album.idArtista
LEFT JOIN cancion ON album.idAlbum = cancion.IdAlbum
LEFT JOIN playlistxcancion ON cancion.idCancion = playlistxcancion.Idcancion
LEFT JOIN playlist ON playlistxcancion.IdPlaylist = playlist.idPlaylist
WHERE playlist.titulo IS NULL AND cancion.titulo IS NOT NULL
ORDER BY Nombre;

-- 4
UPDATE `usuario` SET
	`Pais_idPais` = 1
WHERE `CP` = '7600';
	         
-- 5	         
SELECT album.titulo, cancion.titulo, COUNT( genero.idGenero ) AS CantidadGeneros FROM album
JOIN cancion ON album.idAlbum = cancion.IdAlbum
JOIN generoxcancion ON cancion.idCancion = generoxcancion.IdCancion
JOIN genero ON generoxcancion.IdGenero = genero.idGenero
GROUP BY album.titulo, cancion.titulo
HAVING COUNT( genero.idGenero) > 1;

-- 6
-- CREATE INDEX "idCancion_idx" --------------------------------
CREATE INDEX `idCancion_idx` ON `cancion`( `idCancion` );
-- -------------------------------------------------------------
