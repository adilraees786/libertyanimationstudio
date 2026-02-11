-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 12, 2026 at 12:22 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `liberaty-animation-studio`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact_messages`
--

CREATE TABLE `contact_messages` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `social` varchar(255) DEFAULT NULL,
  `brand_description` text DEFAULT NULL,
  `package_type` varchar(100) DEFAULT NULL,
  `challenge` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact_messages`
--

INSERT INTO `contact_messages` (`id`, `name`, `email`, `phone`, `social`, `brand_description`, `package_type`, `challenge`, `created_at`) VALUES
(1, 'Mara Valdez', 'gomocy@mailinator.com', '+1 (301) 859-3346', 'https://www.pepatajoniku.cm', 'Eiusmod ipsam conseq', 'Pro Package', 'Aperiam consequatur ', '2026-02-11 21:14:13'),
(2, 'Bree Callahan', 'mibohajopa@mailinator.com', '+1 (794) 518-2741', 'https://www.tany.me', 'Est aut iste atque e', 'Essentials Package', 'Autem omnis voluptas', '2026-02-11 21:16:25'),
(3, 'Juliet Barron', 'adilraeesdev@gmail.com', '+1 (631) 745-1719', 'https://www.ficilazyhofypeg.com.au', 'Excepteur sapiente m', 'Custom Plan', 'Officiis tempora est', '2026-02-11 21:49:02'),
(4, 'Martena Wallace', 'adilraeesdev@gmail.com', '+1 (419) 609-5168', 'https://www.nizelikexu.co.uk', 'Ad voluptates culpa', 'Essentials Package', 'Qui consectetur esse', '2026-02-11 22:03:11'),
(5, 'Adil', 'adilraeesdev@gmail.com', '+1 (644) 987-1397', 'https://www.bil.org.uk', 'Ullamco deserunt obc', 'Custom Plan', 'Vel quos pariatur S', '2026-02-11 23:00:09'),
(6, 'Katell Cobb', 'byqil@mailinator.com', '+1 (768) 213-6103', 'https://www.qujiqocezebyne.ws', 'Dolorum molestiae te', 'Essentials Package', 'Possimus culpa et ', '2026-02-11 23:02:24'),
(7, 'Daphne Lindsey', 'fuke@mailinator.com', '+1 (737) 188-4675', 'https://www.bybizecijy.org.uk', 'Accusantium duis tem', 'Essentials Package', 'Mollitia ut quia har', '2026-02-11 23:13:09');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact_messages`
--
ALTER TABLE `contact_messages`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact_messages`
--
ALTER TABLE `contact_messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
