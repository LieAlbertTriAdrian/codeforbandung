-- MySQL dump 10.13  Distrib 5.6.28, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: codeforbandung
-- ------------------------------------------------------
-- Server version	5.6.28-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `logins`
--

DROP TABLE IF EXISTS `logins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `logins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(128) NOT NULL,
  `token` varchar(128) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logins`
--

LOCK TABLES `logins` WRITE;
/*!40000 ALTER TABLE `logins` DISABLE KEYS */;
/*!40000 ALTER TABLE `logins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `notifications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `message` varchar(200) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projectmembers`
--

DROP TABLE IF EXISTS `projectmembers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `projectmembers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `project_position` varchar(100) NOT NULL,
  `job_description` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projectmembers`
--

LOCK TABLES `projectmembers` WRITE;
/*!40000 ALTER TABLE `projectmembers` DISABLE KEYS */;
/*!40000 ALTER TABLE `projectmembers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projectposts`
--

DROP TABLE IF EXISTS `projectposts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `projectposts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `project_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `message` varchar(200) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projectposts`
--

LOCK TABLES `projectposts` WRITE;
/*!40000 ALTER TABLE `projectposts` DISABLE KEYS */;
/*!40000 ALTER TABLE `projectposts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `description` varchar(250) NOT NULL,
  `projectManager` varchar(100) NOT NULL,
  `memberCount` int(11) NOT NULL DEFAULT '0',
  `deadline` datetime NOT NULL,
  `tag` varchar(50) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES (2,'Scrapathon','Project for scraping the data','Dwina Apriyani',0,'2015-12-22 00:00:00','','2016-04-14 14:37:29','2016-04-14 14:37:29'),(3,'Scrapathon','Project for scraping the data','Dwina Apriyani',0,'2015-12-22 00:00:00','','2016-04-14 16:01:33','2016-04-14 16:01:33'),(4,'albert','albert','albert',0,'0000-00-00 00:00:00','','2016-04-14 17:20:22','2016-04-14 17:20:22');
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `timelines`
--

DROP TABLE IF EXISTS `timelines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `timelines` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `activity` varchar(100) NOT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `project_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `timelines`
--

LOCK TABLES `timelines` WRITE;
/*!40000 ALTER TABLE `timelines` DISABLE KEYS */;
INSERT INTO `timelines` VALUES (1,'First Meeting Edited 3','2015-12-22 00:00:00','2015-12-22 00:00:00','2016-04-14 15:17:22','2016-04-14 15:17:22',1);
/*!40000 ALTER TABLE `timelines` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `position` varchar(100) NOT NULL,
  `handphone` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'alberttriadrian','external manager','081901596260','alberttri_9e_17@yahoo.com','','2016-04-14 18:37:34','2016-04-14 18:37:34'),(3,'','','','a','$2a$10$uXSCgoRmL1GMU6rDMzI56O0JIPXiyyGS4dDeu9uG4rsKhhRbEp732','2016-04-14 21:00:02','2016-04-14 21:00:02'),(4,'','','','haha@gmail.com','$2a$10$jsSmlbFqaPerSlEPIfLpeOyUga/wg4UHS/ob84QwsJxtLTH3OCZMW','2016-04-14 21:00:57','2016-04-14 21:00:57'),(5,'','','','albert@gmail.com','$2a$10$RAe5zsEzozt0ytRJJe8gv.6AKhlGWgkinao/5qai4zu748wt59rVC','2016-04-14 21:01:48','2016-04-14 21:01:48'),(6,'','','','albert','$2a$10$NYnvxypiOjHawDlKX6ZNw.M1Ld8MldcMTOAG97lwg.4R/zBHLzrWK','2016-04-14 21:04:18','2016-04-14 21:04:18'),(7,'','','','alberttri23@gmail.com','$2a$10$jNa7FsredQGW008ldRQ.NuBX/niBHt.LSX7UdsOMwJIT0GXZdZUk2','2016-04-14 21:09:58','2016-04-14 21:09:58');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-04-15 14:06:56
