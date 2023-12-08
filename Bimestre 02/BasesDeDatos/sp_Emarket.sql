-- Punto 1

USE `EMarket`;
DROP procedure IF EXISTS `sp_lista_empleados`;

DELIMITER $$
USE `EMarket`$$
CREATE PROCEDURE `sp_lista_empleados` ()
BEGIN
	SELECT Empleados.Nombre, Empleados.Apellido FROM Empleados
    ORDER BY Empleados.Apellido;
END$$

DELIMITER ;

call sp_lista_empleados();


-- Punto 2

USE `EMarket`;
DROP procedure IF EXISTS `sp_empleados_ciudad`;

DELIMITER $$
USE `EMarket`$$
CREATE PROCEDURE `sp_empleados_ciudad` (IN nombre_ciudad VARCHAR(30))
BEGIN
	SELECT Empleados.Nombre, Empleados.Apellido FROM Empleados
    WHERE Empleados.Ciudad = nombre_ciudad;
END$$

DELIMITER ;


CALL sp_empleados_ciudad('Seattle');

-- Punto 3

USE `EMarket`;
DROP procedure IF EXISTS `sp_clientes_pais`;

DELIMITER $$
USE `EMarket`$$
CREATE PROCEDURE `sp_clientes_pais` (nombre_pais VARCHAR(30))
BEGIN
	SELECT Clientes.Contacto FROM Clientes
    WHERE Clientes.Pais = nombre_pais;
END$$

DELIMITER ;

CALL sp_clientes_pais('Portugal');

-- Punto 4

USE `EMarket`;
DROP procedure IF EXISTS `sp_productos_sin_stock`;

DELIMITER $$
USE `EMarket`$$
CREATE PROCEDURE `sp_productos_sin_stock` (IN stock INT)
BEGIN
	SELECT Productos.ProductoNombre, Productos.UnidadesStock, Categorias.CategoriaNombre FROM Productos
    JOIN Categorias ON Productos.CategoriaID = Categorias.CategoriaID
    WHERE Productos.UnidadesStock < stock;
END$$

DELIMITER ;

CALL sp_productos_sin_stock(10);

-- Punto 5

USE `EMarket`;
DROP procedure IF EXISTS `sp_ventas_con_descuento`;

DELIMITER $$
USE `EMarket`$$
CREATE PROCEDURE `sp_ventas_con_descuento` (IN porcentaje DEC)
BEGIN
	select Productos.ProductoNombre, FacturaDetalle.Descuento, Clientes.Contacto from Productos
	join FacturaDetalle ON Productos.ProductoID = FacturaDetalle.ProductoID
	JOIN Facturas ON FacturaDetalle.FacturaID = Facturas.FacturaID
	join Clientes ON Facturas.ClienteID = Clientes.ClienteID
	where FacturaDetalle.Descuento >= porcentaje/100;
END$$

DELIMITER ;


call sp_ventas_con_descuento(10);