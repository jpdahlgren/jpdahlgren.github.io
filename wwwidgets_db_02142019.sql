-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 14, 2019 at 08:02 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wwwidgets_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `customer_id` int(10) NOT NULL,
  `first_name` varchar(15) NOT NULL,
  `last_name` varchar(15) NOT NULL,
  `1st_address` varchar(50) DEFAULT NULL,
  `2nd_address` varchar(25) DEFAULT NULL,
  `city` varchar(25) DEFAULT NULL,
  `state` varchar(2) DEFAULT NULL COMMENT 'abbreviation',
  `zipcode` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=hp8;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`customer_id`, `first_name`, `last_name`, `1st_address`, `2nd_address`, `city`, `state`, `zipcode`) VALUES
(1, 'Jim', 'Neighbors', NULL, NULL, NULL, NULL, NULL),
(2, 'Joe', 'Brooks', NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `employee_id` int(10) NOT NULL,
  `first_name` varchar(15) NOT NULL,
  `last_name` varchar(15) NOT NULL,
  `date_stamp` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=hp8;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`employee_id`, `first_name`, `last_name`, `date_stamp`) VALUES
(1, 'Pete', 'Dahlgren', '2019-01-12'),
(3, 'Nettie', 'Dahlgren', '2019-01-12'),
(5, 'Amy', 'Anderson', '2019-01-12'),
(6, 'John', 'Doe', '0000-00-00'),
(9, 'joe', 'whatsit', '2019-01-30'),
(10, 'Mark', 'Priest', '2019-02-07'),
(11, 'Mark', 'Priest', '2019-02-07'),
(12, 'Mark', 'Priest', '2019-02-12'),
(13, 'Test', 'Save', '2019-02-13');

-- --------------------------------------------------------

--
-- Table structure for table `relationships`
--

CREATE TABLE `relationships` (
  `relationship_id` int(10) NOT NULL,
  `employee_id` int(10) DEFAULT NULL,
  `customer_id` int(10) DEFAULT NULL,
  `widget_id` int(10) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=hp8;

--
-- Dumping data for table `relationships`
--

INSERT INTO `relationships` (`relationship_id`, `employee_id`, `customer_id`, `widget_id`, `start_date`, `end_date`) VALUES
(1, 1, 1, NULL, '2019-02-13', NULL),
(3, 10, NULL, 1, '2019-02-13', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `widgets`
--

CREATE TABLE `widgets` (
  `widget_id` int(10) NOT NULL,
  `widget_name` varchar(35) NOT NULL,
  `widget_description` varchar(5000) DEFAULT NULL,
  `widget_type` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=hp8;

--
-- Dumping data for table `widgets`
--

INSERT INTO `widgets` (`widget_id`, `widget_name`, `widget_description`, `widget_type`) VALUES
(1, 'log interpretation project', 'pick logs and build cross-sections', 'geologic');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`employee_id`);

--
-- Indexes for table `relationships`
--
ALTER TABLE `relationships`
  ADD PRIMARY KEY (`relationship_id`),
  ADD KEY `relationships_ibfk_1` (`customer_id`),
  ADD KEY `relationships_ibfk_2` (`employee_id`),
  ADD KEY `relationships_ibfk_3` (`widget_id`);

--
-- Indexes for table `widgets`
--
ALTER TABLE `widgets`
  ADD PRIMARY KEY (`widget_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `customer_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `employee_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `relationships`
--
ALTER TABLE `relationships`
  MODIFY `relationship_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `widgets`
--
ALTER TABLE `widgets`
  MODIFY `widget_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `relationships`
--
ALTER TABLE `relationships`
  ADD CONSTRAINT `relationships_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `relationships_ibfk_2` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`employee_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `relationships_ibfk_3` FOREIGN KEY (`widget_id`) REFERENCES `widgets` (`widget_id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
