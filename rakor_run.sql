-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.14-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table rakor_run.muser
DROP TABLE IF EXISTS `muser`;
CREATE TABLE IF NOT EXISTS `muser` (
  `txtId` varchar(150) NOT NULL DEFAULT '',
  `txtNik` varchar(50) NOT NULL DEFAULT '',
  `txtFullname` varchar(150) NOT NULL DEFAULT '',
  `txtPassword` varchar(150) NOT NULL DEFAULT '',
  `txtGroup` varchar(50) NOT NULL DEFAULT '',
  `floatWalk` float NOT NULL DEFAULT 0,
  `floatRun` float NOT NULL DEFAULT 0,
  `floatSepeda` float NOT NULL DEFAULT 0,
  `txtRole` varchar(50) NOT NULL,
  PRIMARY KEY (`txtId`),
  UNIQUE KEY `txtId` (`txtId`),
  UNIQUE KEY `UXtxtNik` (`txtNik`),
  KEY `txtNik` (`txtNik`),
  KEY `txtRole` (`txtRole`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table rakor_run.muser: ~2 rows (approximately)
/*!40000 ALTER TABLE `muser` DISABLE KEYS */;
REPLACE INTO `muser` (`txtId`, `txtNik`, `txtFullname`, `txtPassword`, `txtGroup`, `floatWalk`, `floatRun`, `floatSepeda`, `txtRole`) VALUES
	('4b02e4d9-ec1c-4b3e-8057-9eabac472216', '140792916', 'Pamil', '$2a$10$MOH5mNv4loDEQCVra40DA.tWt1DPzgnflU1OI7ol/IXOsFBKGkAE.', 'TEST', 20, 24, 4, 'ADMIN'),
	('67f6efff-8893-4747-96a3-20db58b07e64', 'K191100415', 'Asep Sopiyan', '$2a$10$luUsWC57lvX3VMaVCRRw7uR180wnY0G/pCrdPuLI4/gEllyhOto.6', 'TEST', 4.39, 4.74, 22.66, 'ADMIN');
/*!40000 ALTER TABLE `muser` ENABLE KEYS */;

-- Dumping structure for table rakor_run.trdata
DROP TABLE IF EXISTS `trdata`;
CREATE TABLE IF NOT EXISTS `trdata` (
  `txtId` varchar(150) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `txtIdUser` varchar(150) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `txtTipe` varchar(50) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `txtGroup` varchar(50) COLLATE latin1_general_ci NOT NULL DEFAULT '',
  `floatData` float NOT NULL DEFAULT 0,
  `dtnInsertedDate` datetime NOT NULL DEFAULT sysdate(),
  PRIMARY KEY (`txtId`),
  UNIQUE KEY `txtId` (`txtId`),
  KEY `txtIdUser` (`txtIdUser`),
  KEY `txtTipe` (`txtTipe`),
  KEY `txtGroup` (`txtGroup`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- Dumping data for table rakor_run.trdata: ~4 rows (approximately)
/*!40000 ALTER TABLE `trdata` DISABLE KEYS */;
REPLACE INTO `trdata` (`txtId`, `txtIdUser`, `txtTipe`, `txtGroup`, `floatData`, `dtnInsertedDate`) VALUES
	('01be3f7b-0cb5-4c5a-ac55-f75e0625d332', '67f6efff-8893-4747-96a3-20db58b07e64', 'WALK', 'TEST', 2.19, '2021-12-18 21:11:31'),
	('06a284f4-6456-40fa-a5d7-5019eade61f9', '67f6efff-8893-4747-96a3-20db58b07e64', 'SEPEDA', 'TEST', 4.28, '2021-12-18 21:07:02'),
	('46585b39-3986-4ac6-bbfc-cbf7d1d77dd3', '67f6efff-8893-4747-96a3-20db58b07e64', 'WALK', 'TEST', 1.69, '2021-12-18 21:10:54'),
	('9e0a3cc3-8306-4947-9088-6f2fadf17257', '67f6efff-8893-4747-96a3-20db58b07e64', 'RUN', 'TEST', 2.54, '2021-12-18 21:12:32');
/*!40000 ALTER TABLE `trdata` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
