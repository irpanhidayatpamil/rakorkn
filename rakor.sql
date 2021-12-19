-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.6.5-MariaDB-1:10.6.5+maria~focal - mariadb.org binary distribution
-- Server OS:                    debian-linux-gnu
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table rakor_run.mUser
CREATE TABLE IF NOT EXISTS `mUser` (
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

-- Dumping data for table rakor_run.mUser: ~0 rows (approximately)
/*!40000 ALTER TABLE `mUser` DISABLE KEYS */;
REPLACE INTO `mUser` (`txtId`, `txtNik`, `txtFullname`, `txtPassword`, `txtGroup`, `floatWalk`, `floatRun`, `floatSepeda`, `txtRole`) VALUES
	('4b02e4d9-ec1c-4b3e-8057-9eabac472216', '140792916', 'Pamil', '$2a$10$MOH5mNv4loDEQCVra40DA.tWt1DPzgnflU1OI7ol/IXOsFBKGkAE.', 'TEST', 20, 24, 4, 'ADMIN'),
	('67f6efff-8893-4747-96a3-20db58b07e64', 'K191100415', 'Asep Sopiyan', '$2a$10$luUsWC57lvX3VMaVCRRw7uR180wnY0G/pCrdPuLI4/gEllyhOto.6', 'TEST', 0, 0, 0, 'ADMIN');
/*!40000 ALTER TABLE `mUser` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
