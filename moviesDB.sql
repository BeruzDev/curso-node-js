-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: moviesdb
-- ------------------------------------------------------
-- Server version	8.4.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `genre`
--

DROP TABLE IF EXISTS `genre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genre` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genre`
--

LOCK TABLES `genre` WRITE;
/*!40000 ALTER TABLE `genre` DISABLE KEYS */;
INSERT INTO `genre` VALUES (2,'Action'),(4,'Adventure'),(8,'Animation'),(3,'Crime'),(1,'Drama'),(7,'Fantasy'),(6,'Romance'),(5,'Sci-Fi');
/*!40000 ALTER TABLE `genre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movie`
--

DROP TABLE IF EXISTS `movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movie` (
  `id` binary(16) NOT NULL DEFAULT (uuid_to_bin(uuid())),
  `title` varchar(255) NOT NULL,
  `year` int NOT NULL,
  `director` varchar(255) NOT NULL,
  `duration` int NOT NULL,
  `poster` text,
  `rate` decimal(2,1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie`
--

LOCK TABLES `movie` WRITE;
/*!40000 ALTER TABLE `movie` DISABLE KEYS */;
INSERT INTO `movie` VALUES (_binary '#ž9\îð\ï®^\0PVÀ\0','Bertus Movie',2024,'Taco Castrini',150,'https://m.media-amazon.com/images/I/91Rc8cAmnAL._AC_UF1000,1000_QL80_.jpg',8.5),(_binary '^l\é\Ê\î\ç\ï®^\0PVÀ\0','The Shawshank Redemption',1994,'Frank Darabont',142,'https://i.ebayimg.com/images/g/4goAAOSwMyBe7hnQ/s-l1200.webp',9.3),(_binary '^l\ë9\î\ç\ï®^\0PVÀ\0','The Dark Knight',2008,'Christopher Nolan',152,'https://i.ebayimg.com/images/g/yokAAOSw8w1YARbm/s-l1200.jpg',9.0),(_binary '^l\ë™\î\ç\ï®^\0PVÀ\0','Inception',2010,'Christopher Nolan',148,'https://m.media-amazon.com/images/I/91Rc8cAmnAL._AC_UF1000,1000_QL80_.jpg',8.8),(_binary '^l\ë\Ä\î\ç\ï®^\0PVÀ\0','Pulp Fiction',1994,'Quentin Tarantino',154,'https://www.themoviedb.org/t/p/original/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg',8.9),(_binary '^l\ëø\î\ç\ï®^\0PVÀ\0','Forrest Gump',1994,'Robert Zemeckis',142,'https://i.ebayimg.com/images/g/qR8AAOSwkvRZzuMD/s-l1600.jpg',8.8),(_binary '^l\ìF\î\ç\ï®^\0PVÀ\0','Gladiator',2000,'Ridley Scott',155,'https://img.fruugo.com/product/0/60/14417600_max.jpg',8.5),(_binary '^l\ì\Å\î\ç\ï®^\0PVÀ\0','The Matrix',1999,'Lana Wachowski',136,'https://i.ebayimg.com/images/g/QFQAAOSwAQpfjaA6/s-l1200.jpg',8.7),(_binary '^l\ì\é\î\ç\ï®^\0PVÀ\0','Interstellar',2014,'Christopher Nolan',169,'https://m.media-amazon.com/images/I/91obuWzA3XL._AC_UF1000,1000_QL80_.jpg',8.6),(_binary '^l\í\î\ç\ï®^\0PVÀ\0','The Lord of the Rings: The Return of the King',2003,'Peter Jackson',201,'https://i.ebayimg.com/images/g/0hoAAOSwe7peaMLW/s-l1600.jpg',8.9),(_binary '^l\í8\î\ç\ï®^\0PVÀ\0','The Lion King',1994,'Roger Allers, Rob Minkoff',88,'https://m.media-amazon.com/images/I/81BMmrwSFOL._AC_UF1000,1000_QL80_.jpg',8.5),(_binary '^l\í[\î\ç\ï®^\0PVÀ\0','The Avengers',2012,'Joss Whedon',143,'https://img.fruugo.com/product/7/41/14532417_max.jpg',8.0),(_binary '^l\í€\î\ç\ï®^\0PVÀ\0','Jurassic Park',1993,'Steven Spielberg',127,'https://vice-press.com/cdn/shop/products/Jurassic-Park-Editions-poster-florey.jpg?v=1654518755&width=1024',8.1),(_binary '^l\í¸\î\ç\ï®^\0PVÀ\0','Titanic',1997,'James Cameron',195,'https://i.pinimg.com/originals/42/42/65/4242658e6f1b0d6322a4a93e0383108b.png',7.8),(_binary '^l\í\Ý\î\ç\ï®^\0PVÀ\0','The Social Network',2010,'David Fincher',120,'https://i.pinimg.com/originals/7e/37/b9/7e37b994b613e94cba64f307b1983e39.jpg',7.7),(_binary '^l\î\0\î\ç\ï®^\0PVÀ\0','Avatar',2009,'James Cameron',162,'https://i.etsystatic.com/35681979/r/il/dfe3ba/3957859451/il_fullxfull.3957859451_h27r.jpg',7.8);
/*!40000 ALTER TABLE `movie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movie_genres`
--

DROP TABLE IF EXISTS `movie_genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movie_genres` (
  `movie_id` binary(16) NOT NULL,
  `genre_id` int NOT NULL,
  PRIMARY KEY (`movie_id`,`genre_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie_genres`
--

LOCK TABLES `movie_genres` WRITE;
/*!40000 ALTER TABLE `movie_genres` DISABLE KEYS */;
INSERT INTO `movie_genres` VALUES (_binary '^l\é\Ê\î\ç\ï®^\0PVÀ\0',1),(_binary '^l\ë9\î\ç\ï®^\0PVÀ\0',1),(_binary '^l\ë9\î\ç\ï®^\0PVÀ\0',2),(_binary '^l\ë9\î\ç\ï®^\0PVÀ\0',3),(_binary '^l\ë™\î\ç\ï®^\0PVÀ\0',2),(_binary '^l\ë™\î\ç\ï®^\0PVÀ\0',4),(_binary '^l\ë™\î\ç\ï®^\0PVÀ\0',5),(_binary '^l\ë\Ä\î\ç\ï®^\0PVÀ\0',1),(_binary '^l\ë\Ä\î\ç\ï®^\0PVÀ\0',3),(_binary '^l\ëø\î\ç\ï®^\0PVÀ\0',1),(_binary '^l\ëø\î\ç\ï®^\0PVÀ\0',6),(_binary '^l\ìF\î\ç\ï®^\0PVÀ\0',1),(_binary '^l\ìF\î\ç\ï®^\0PVÀ\0',2),(_binary '^l\ìF\î\ç\ï®^\0PVÀ\0',4),(_binary '^l\ì\Å\î\ç\ï®^\0PVÀ\0',2),(_binary '^l\ì\Å\î\ç\ï®^\0PVÀ\0',5),(_binary '^l\ì\é\î\ç\ï®^\0PVÀ\0',1),(_binary '^l\ì\é\î\ç\ï®^\0PVÀ\0',4),(_binary '^l\ì\é\î\ç\ï®^\0PVÀ\0',5),(_binary '^l\í8\î\ç\ï®^\0PVÀ\0',1),(_binary '^l\í8\î\ç\ï®^\0PVÀ\0',4),(_binary '^l\í8\î\ç\ï®^\0PVÀ\0',8),(_binary '^l\î\0\î\ç\ï®^\0PVÀ\0',2),(_binary '^l\î\0\î\ç\ï®^\0PVÀ\0',4),(_binary '^l\î\0\î\ç\ï®^\0PVÀ\0',7);
/*!40000 ALTER TABLE `movie_genres` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-20 19:43:55
