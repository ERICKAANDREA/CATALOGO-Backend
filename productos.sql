-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-12-2024 a las 00:35:03
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `catalogo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `imagen_producto` varchar(255) DEFAULT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `precio` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `imagen_producto`, `nombre`, `descripcion`, `precio`) VALUES
(2, 'https://megacomputer.com.co/wp-content/uploads/2021/03/MOUSE-G502-LIGHTSPEED-BLACK-INALAMBRICO.jpg', 'Mouse Logitech', 'Mouse inalámbrico Logitech con alta precisión y diseño ergonómico.', 50000.00),
(3, 'https://http2.mlstatic.com/D_NQ_NP_732055-MCO48286759131_112021-O.webp', 'Teclado Mecánico', 'Teclado mecánico retroiluminado RGB para gaming.', 80000.00),
(4, 'https://compubit.com.co/wp-content/uploads/2024/03/mas-productos-web-36.jpg', 'Monitor Samsung', 'Monitor LED Samsung de 27 pulgadas con resolución Full HD.', 350000.00),
(5, 'https://estaticos.elcolombiano.com/binrepository/780x461/0c-104/780d565/none/11101/WMAJ/ps5-pro_46022536_20240910102823.jpg', 'PlayStation 5', 'Consola de videojuegos Sony PlayStation 5, con 825GB de almacenamiento SSD y soporte para juegos en 4K.', 2500000.00),
(7, 'https://http2.mlstatic.com/D_NQ_NP_730662-MCO72181031967_102023-O.webp', 'Celular Iphone', 'Almacenamiento 256Gb 16Gb Ram', 5000000.00);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
