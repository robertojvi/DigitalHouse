-- CATEGORIAS Y PRODUCTOS

SELECT * FROM Categorias; -- Punto 1. Listado de todas las categorías

SELECT CategoriaNombre, Descripcion FROM Categorias; -- Punto 2

SELECT * FROM Productos; -- Punto 3, listado de productos

SELECT * FROM Productos 
WHERE Discontinuado = 1; -- Punto 4, productos discontinuados
-- no existen productos discontinuados

SELECT ProductoNombre FROM Productos
WHERE ProveedorID = 8; -- Punto 5

SELECT * FROM Productos
WHERE PrecioUnitario BETWEEN 10 AND 22; -- PUNTO 6

SELECT * FROM Productos
WHERE UnidadesStock < NivelReorden; -- Punto 7

SELECT * FROM Productos
WHERE UnidadesStock < NivelReorden AND UnidadesPedidas = 0; -- Punto 8

-- CLIENTES

SELECT Contacto, Compania, Titulo, Pais FROM Clientes
ORDER BY Pais; -- Punto 1

SELECT Contacto, Compania, Titulo, Pais FROM Clientes
WHERE Titulo = 'Owner'
ORDER BY Pais; -- Punto 2

SELECT * FROM Clientes
WHERE Contacto LIKE 'C%'; -- Punto 3

-- FACTURAS

SELECT * FROM Facturas
ORDER BY FechaFactura ASC; -- Punto 1

SELECT * FROM Facturas 
WHERE PaisEnvio = 'USA' AND EnvioVia != 3; -- Punto 2

SELECT * FROM Facturas
WHERE ClienteID = 'GOURL'; -- Punto 3

SELECT * FROM Facturas
WHERE EmpleadoID IN (2,3,5,8,9); -- Punto 4

-- SEGUNDA PARTE

-- PORDUCTOS

SELECT * FROM Productos
ORDER BY PrecioUnitario DESC; -- Punto 1

SELECT * FROM Productos
ORDER BY PrecioUnitario DESC
LIMIT 5; -- Punto 2

SELECT * FROM Productos
ORDER BY UnidadesStock DESC 
LIMIT 10; -- Punto 3

-- FACTURA DETALLE

SELECT FacturaID, ProductoID, Cantidad FROM FacturaDetalle; -- Punto 1

SELECT FacturaID, ProductoID, Cantidad FROM FacturaDetalle
ORDER BY Cantidad DESC; -- Punto 2

SELECT FacturaID, ProductoID, Cantidad FROM FacturaDetalle
WHERE Cantidad BETWEEN 50 AND 100
ORDER BY Cantidad DESC; -- Punto 3

SELECT FacturaID AS NroFactura, ProductoID AS Producto, (PrecioUnitario * Cantidad) AS Total
FROM FacturaDetalle; -- Punto 4

-- EXTRAS

SELECT  * FROM Clientes
WHERE Pais = 'Brazil' OR Pais = 'Mexico' OR Titulo LIKE 'Sales%'; -- Punto 1

SELECT * FROM Clientes
WHERE Compania LIKE 'A%'; -- Punto 2

SELECT Ciudad, Contacto AS 'Apellido y Nombre', Titulo AS Puesto FROM Clientes
WHERE Ciudad = 'Madrid'; -- PUnto 3

SELECT * FROM Facturas
WHERE FacturaID BETWEEN 10000 AND 10500; -- Punto 4

SELECT * FROM Facturas
WHERE FacturaID BETWEEN 10000 AND 10500 OR ClienteID LIKE 'B%'; -- Punto 5

SELECT * FROM Facturas
WHERE CiudadEnvio = 'Vancouver' OR EnvioVia = 3; -- Punto 6

SELECT * FROM Empleados 
WHERE Apellido = 'Buchanan'; -- Punto 7

SELECT * FROM Facturas
WHERE EmpleadoID = 5; -- Punto 8




-- Queries XL Primera Parte ACTIVIDAD 9 NOVIEMBRE 2023

-- CLIENTES

SELECT COUNT( * ) FROM Clientes; -- Punto 1

SELECT Ciudad, COUNT( ClienteID ) AS cantidadClientes FROM Clientes
GROUP BY Ciudad; -- Punto 2

-- FACTURAS

SELECT SUM( Transporte ) FROM Facturas; -- Punto 1

SELECT SUM(transporte) AS "Total", EnvioVia FROM facturas
GROUP BY EnvioVia; -- Punto 2

SELECT ClienteID, COUNT( FacturaID ) AS cantidadFacturas FROM Facturas
GROUP BY ClienteID
ORDER BY cantidadFacturas DESC; -- Punto 3

SELECT ClienteID, COUNT( FacturaID ) AS cantidadFacturas FROM Facturas
GROUP BY ClienteID
ORDER BY cantidadFacturas DESC LIMIT 5; -- Punto 4

SELECT PaisEnvio, COUNT( FacturaID ) AS Cantidad FROM Facturas
GROUP BY PaisEnvio ORDER BY Cantidad ASC LIMIT 1; -- Punto 5

SELECT EmpleadoID, COUNT( FacturaID ) AS CantidadOperaciones FROM Facturas
GROUP BY EmpleadoID ORDER BY CantidadOperaciones DESC LIMIT 1; -- Punto 6

-- FACTURA DETALLE

SELECT ProductoID, COUNT( * ) AS cantidad FROM FacturaDetalle
GROUP BY ProductoID ORDER BY cantidad DESC LIMIT 1; -- Punto 1

SELECT SUM(Cantidad * PrecioUnitario) FROM FacturaDetalle; -- Punto 2

SELECT SUM(Cantidad * PrecioUnitario) FROM FacturaDetalle WHERE ProductoID BETWEEN 30 AND 50; -- Punto 3

SELECT ProductoID, AVG(PrecioUnitario) FROM FacturaDetalle
GROUP BY ProductoID; -- Punto 4

SELECT MAX(PrecioUnitario) FROM FacturaDetalle; -- Punto 5

-- Consultas queries XL parte II - JOIN

SELECT Facturas.FacturaID, Empleados.Apellido FROM Facturas
JOIN Empleados ON Facturas.EmpleadoID = Empleados.EmpleadoID
WHERE Empleados.Apellido = 'Buchanan'; -- Punto 1

SELECT * FROM Facturas
JOIN Correos ON Facturas.EnvioVia = Correos.CorreoID
WHERE Correos.Compania = 'Speedy Express'; -- Punto 2

SELECT Empleados.Nombre, Empleados.Apellido, Facturas.FacturaID FROM Empleados
JOIN Facturas ON Empleados.EmpleadoID = Facturas.EmpleadoID; -- Punto 3

SELECT * FROM facturas f 
JOIN clientes c ON f.ClienteID = c.ClienteID 
WHERE f.PaisEnvio = 'USA' AND c.Titulo = 'Owner'; -- Punto 4

SELECT * FROM Facturas
JOIN Empleados ON Facturas.EmpleadoID = Empleados.EmpleadoID
JOIN FacturaDetalle ON FacturaDetalle.FacturaID = Facturas.FacturaID
WHERE Empleados.Apellido = 'Leverling' OR FacturaDetalle.ProductoID = 42; -- Punto 5

SELECT * FROM Facturas
JOIN Empleados ON Facturas.EmpleadoID = Empleados.EmpleadoID
JOIN FacturaDetalle ON FacturaDetalle.FacturaID = Facturas.FacturaID
WHERE Empleados.Apellido = 'Leverling' AND (FacturaDetalle.ProductoID = 42 OR FacturaDetalle.ProductoID = 80); -- Punto 6

SELECT f.FacturaID, f.ClienteID, f.EmpleadoID, f.FechaFactura, f.FechaRegistro,
f.FechaEnvio, f.EnvioVia, f.Transporte, f.NombreEnvio, f.DireccionEnvio,
f.CiudadEnvio, f.RegionEnvio, f.CodigoPostalEnvio, f.PaisEnvio
FROM facturas f 
JOIN empleados e ON f.EmpleadoId = e.EmpleadoID 
JOIN facturadetalle fd ON f.FacturaID = fd.FacturaID
WHERE e.Apellido = 'Leverling' AND (fd.ProductoID=80 OR fd.ProductoID=42); -- Punto 6


SELECT Clientes.ClienteID, SUM(FacturaDetalle.Cantidad * FacturaDetalle.PrecioUnitario) AS importe FROM Clientes
JOIN Facturas ON Clientes.ClienteID = Facturas.ClienteID
JOIN FacturaDetalle ON Facturas.FacturaID = FacturaDetalle.FacturaID
GROUP BY Clientes.ClienteID ORDER BY importe DESC; -- Punto 7

SELECT Facturas.FacturaID, Clientes.ClienteID, Clientes.Contacto, Facturas.FechaFactura, Facturas.PaisEnvio, SUM(FacturaDetalle.Cantidad * FacturaDetalle.PrecioUnitario) AS total FROM Facturas
JOIN Clientes ON Facturas.ClienteID = Clientes.ClienteID
JOIN FacturaDetalle ON Facturas.FacturaID = FacturaDetalle.FacturaID
GROUP BY Facturas.FacturaID ORDER BY Facturas.FechaFactura DESC LIMIT 10; -- Punto 8