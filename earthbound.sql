-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-11-2022 a las 04:50:43
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `prueba`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `earthbound`
--

CREATE TABLE `earthbound` (
  `ID` int(11) NOT NULL,
  `Nombre` varchar(255) NOT NULL,
  `PV` varchar(255) NOT NULL,
  `PP` varchar(255) NOT NULL,
  `Curacion` varchar(255) NOT NULL,
  `Asistencia` varchar(255) NOT NULL,
  `Ataque` varchar(255) NOT NULL,
  `Velocidad` varchar(255) NOT NULL,
  `Agallas` varchar(255) NOT NULL,
  `Defensa` varchar(255) NOT NULL,
  `Estado` char(7) NOT NULL,
  `Creado` timestamp NOT NULL DEFAULT current_timestamp(),
  `Modificado` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `earthbound`
--

INSERT INTO `earthbound` (`ID`, `Nombre`, `PV`, `PP`, `Curacion`, `Asistencia`, `Ataque`, `Velocidad`, `Agallas`, `Defensa`, `Estado`, `Creado`, `Modificado`) VALUES
(1, 'Ness', '6333', '134', 'Si', 'Si', '302', '665', '600', '1000', 'Vivo\r\n', '2022-11-13 05:09:13', '2022-11-17 03:12:03'),
(2, 'Paula', '498', '786', 'Si', 'Si', '234', '775', '121', '059', 'Viva\r\n', '2022-11-14 13:44:04', '2022-11-17 03:11:41'),
(3, 'Jeff', '134', '100', 'Si', 'Si', '43', '304', '1', '0', 'Vivo\r\n', '2022-11-16 13:52:35', '2022-11-17 03:12:55'),
(4, 'Poo', '1000', '345', 'Si', 'Si', '5424', '999', '884', '249', 'Vivo\r\n', '2022-11-14 13:56:33', '2022-11-17 03:13:54'),
(5, 'Gygas', '30000', '999', 'Si', 'No', '255', '80', '5', '255', 'Muerto\n', '2022-11-14 14:05:28', '2022-11-17 03:14:52'),
(6, 'Starmen', '545', '98', 'Si', 'Si', '103', '24', '25', '126', 'Muerto\n', '2022-11-14 14:10:28', '2022-11-17 03:15:38'),
(7, 'Perro Fugitivo', '125', 'No', 'No', 'Si', '25', '12', '63', '18', 'Vivo\r\n', '2022-11-14 14:14:25', '2022-11-17 03:16:42'),
(8, 'Serpiente Espiral', '231', 'No', 'No', 'Si', '48', '94', '86', '34', 'Vivo\r\n', '2022-11-14 14:17:22', '2022-11-17 03:17:54'),
(9, 'Patinador Punk', '44', 'No', 'No', 'Si', '24', '12', '4', '73', 'Vivo\r\n', '2022-11-14 14:18:37', '2022-11-17 03:19:23'),
(10, 'Ovni', '342', '245', 'No', 'No', '145', '48', '3', '32', 'Muerto\n', '2022-11-14 14:20:04', '2022-11-17 03:20:10'),
(11, 'Robotico Giratorio', '6575', '123', 'No', 'No', '22', '135', '87', '62', 'Muerto\n', '2022-11-16 16:18:58', '2022-11-17 03:21:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `earthbound`
--
ALTER TABLE `earthbound`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `earthbound`
--
ALTER TABLE `earthbound`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
