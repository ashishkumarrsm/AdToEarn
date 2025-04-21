-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 17, 2025 at 02:36 AM
-- Server version: 10.6.21-MariaDB-cll-lve-log
-- PHP Version: 8.3.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `huvwzopi_adtofuture`
--

-- --------------------------------------------------------

--
-- Table structure for table `achivers`
--

CREATE TABLE `achivers` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `adminsettings`
--

CREATE TABLE `adminsettings` (
  `setlevel` int(11) NOT NULL DEFAULT 1,
  `setdirect` int(11) DEFAULT 1,
  `setreward` int(11) DEFAULT 1,
  `setregister` int(11) DEFAULT 1,
  `setlogin` int(11) DEFAULT 1,
  `setwithdrawal` int(11) DEFAULT 1,
  `setdeposite` int(11) DEFAULT 1,
  `setroi` int(11) DEFAULT 1,
  `setsupport` int(11) DEFAULT 1,
  `settopup` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_general_ci;

--
-- Dumping data for table `adminsettings`
--

INSERT INTO `adminsettings` (`setlevel`, `setdirect`, `setreward`, `setregister`, `setlogin`, `setwithdrawal`, `setdeposite`, `setroi`, `setsupport`, `settopup`) VALUES
(1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `bonuses`
--

CREATE TABLE `bonuses` (
  `id` int(11) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `bonus_type` varchar(50) NOT NULL,
  `status` varchar(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bonuses`
--

INSERT INTO `bonuses` (`id`, `amount`, `bonus_type`, `status`, `created_at`) VALUES
(1, 3.00, 'roi_income', 'approved', '2025-04-09 07:58:58'),
(2, 2.00, 'sponsor_income', 'approved', '2025-04-09 08:00:19'),
(3, 1.00, 'add_income', 'approved', '2025-04-09 08:00:19'),
(4, 1.00, 'telegram_income', 'approved', '2025-04-09 08:00:19'),
(5, 1.00, 'insta_income', 'approved', '2025-04-09 08:00:19');

-- --------------------------------------------------------

--
-- Table structure for table `cto`
--

CREATE TABLE `cto` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `paid` varchar(45) DEFAULT 'unpaid',
  `amount` float DEFAULT 0,
  `gift` varchar(255) DEFAULT 'unpaid',
  `paid_at` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT 'qualified',
  `category` varchar(45) DEFAULT NULL,
  `monthly_amount` float DEFAULT 10
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cto_transaction`
--

CREATE TABLE `cto_transaction` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `amount` float DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `direct_transaction`
--

CREATE TABLE `direct_transaction` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `amount` float DEFAULT NULL,
  `userby_id` int(11) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT current_timestamp(),
  `percent` float DEFAULT NULL,
  `onamount` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_general_ci;

--
-- Dumping data for table `direct_transaction`
--

INSERT INTO `direct_transaction` (`id`, `user_id`, `amount`, `userby_id`, `createdAt`, `percent`, `onamount`) VALUES
(1, 1, 4, 92, '2025-03-19 11:09:05', 4, 100),
(2, 1, 22, 92, '2025-04-07 09:50:12', 4, 550),
(3, 92, 2.5, 93, '2025-04-07 11:15:36', 5, 50),
(4, 92, 27.5, 93, '2025-04-07 11:15:41', 5, 550);

-- --------------------------------------------------------

--
-- Table structure for table `invest_level`
--

CREATE TABLE `invest_level` (
  `id` int(11) NOT NULL,
  `level_1` float DEFAULT 0,
  `level_2` float DEFAULT 0,
  `level_3` float DEFAULT 0,
  `level_4` float DEFAULT 0,
  `level_5` float DEFAULT 0,
  `level_6` float DEFAULT 0,
  `level_7` float DEFAULT 0,
  `level_8` float DEFAULT 0,
  `level_9` float DEFAULT 0,
  `level_10` float DEFAULT 0,
  `level_11` float DEFAULT 0,
  `level_12` float DEFAULT 0,
  `level_13` float DEFAULT 0,
  `level_14` float DEFAULT 0,
  `level_15` float DEFAULT 0,
  `level_16` float DEFAULT 0,
  `level_17` float DEFAULT 0,
  `level_18` float DEFAULT 0,
  `level_19` float DEFAULT 0,
  `level_20` float DEFAULT 0,
  `level_21` float DEFAULT 0,
  `level_22` float DEFAULT 0,
  `level_23` float DEFAULT 0,
  `level_24` float DEFAULT 0,
  `level_25` float DEFAULT 0,
  `level_26` float DEFAULT 0,
  `level_27` float DEFAULT 0,
  `level_28` float DEFAULT 0,
  `level_29` float DEFAULT 0,
  `level_30` float DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_general_ci;

--
-- Dumping data for table `invest_level`
--

INSERT INTO `invest_level` (`id`, `level_1`, `level_2`, `level_3`, `level_4`, `level_5`, `level_6`, `level_7`, `level_8`, `level_9`, `level_10`, `level_11`, `level_12`, `level_13`, `level_14`, `level_15`, `level_16`, `level_17`, `level_18`, `level_19`, `level_20`, `level_21`, `level_22`, `level_23`, `level_24`, `level_25`, `level_26`, `level_27`, `level_28`, `level_29`, `level_30`) VALUES
(1, 10, 5, 4, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `invest_level_transaction`
--

CREATE TABLE `invest_level_transaction` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `amount` float DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  `onamount` float DEFAULT NULL,
  `percent` float DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT current_timestamp(),
  `userby_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` varchar(100) NOT NULL DEFAULT 'pending',
  `type` varchar(100) NOT NULL DEFAULT 'notification',
  `users` int(11) NOT NULL DEFAULT 0,
  `image` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `notification_recipients`
--

CREATE TABLE `notification_recipients` (
  `recipient_id` int(11) NOT NULL,
  `notification_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `seen` int(11) NOT NULL DEFAULT 0,
  `seen_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `otp_requests`
--

CREATE TABLE `otp_requests` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `otp` varchar(6) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `expires_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `plans`
--

CREATE TABLE `plans` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `monthly_price` float DEFAULT NULL,
  `description` text DEFAULT NULL,
  `ROI_day` float DEFAULT NULL,
  `ROI_overall` float DEFAULT NULL,
  `Sponser_bonus` float DEFAULT NULL,
  `plan_period` int(11) DEFAULT NULL,
  `max` int(11) DEFAULT NULL,
  `min` int(11) DEFAULT NULL,
  `working_max` int(11) DEFAULT NULL,
  `roi_max` int(11) DEFAULT NULL,
  `gigs` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_general_ci;

--
-- Dumping data for table `plans`
--

INSERT INTO `plans` (`id`, `name`, `monthly_price`, `description`, `ROI_day`, `ROI_overall`, `Sponser_bonus`, `plan_period`, `max`, `min`, `working_max`, `roi_max`, `gigs`) VALUES
(1, 'bronze', 2000, '$2000-4999', 2, 2, 5, 24, 4999, 2000, 3, 2, 10),
(2, 'silver', 5000, '$5000-9999', 4, 4, 5, 24, 9999, 5000, 4, 2, 20),
(3, 'gold', 10000, '$10000-above', 8, 8, 5, 24, 10000000, 10000, 5, 2, 50);

-- --------------------------------------------------------

--
-- Table structure for table `qr`
--

CREATE TABLE `qr` (
  `id` int(11) NOT NULL,
  `BEB20` text DEFAULT NULL,
  `TRC20` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `resetpass`
--

CREATE TABLE `resetpass` (
  `id` int(11) NOT NULL,
  `token` text DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reward_transaction`
--

CREATE TABLE `reward_transaction` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `amount` float DEFAULT 0,
  `createdAt` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roi_transaction`
--

CREATE TABLE `roi_transaction` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `amount` float DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT current_timestamp(),
  `onamount` float DEFAULT NULL,
  `percent` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `salary_transaction`
--

CREATE TABLE `salary_transaction` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `type` varchar(45) NOT NULL,
  `createdAt` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `support`
--

CREATE TABLE `support` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `title` text DEFAULT NULL,
  `message` text DEFAULT NULL,
  `status` varchar(10) DEFAULT 'pending',
  `createdAt` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `topup`
--

CREATE TABLE `topup` (
  `id` int(11) NOT NULL,
  `userby_id` int(11) DEFAULT NULL,
  `userto_id` int(11) DEFAULT NULL,
  `amount` float DEFAULT 0,
  `createdAT` timestamp NULL DEFAULT current_timestamp(),
  `status` varchar(45) DEFAULT 'complete'
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_general_ci;

--
-- Dumping data for table `topup`
--

INSERT INTO `topup` (`id`, `userby_id`, `userto_id`, `amount`, `createdAT`, `status`) VALUES
(1, 92, 92, 100, '2025-03-19 11:09:05', 'complete'),
(2, 92, 92, 550, '2025-04-07 09:50:12', 'complete'),
(3, 93, 93, 50, '2025-04-07 11:15:36', 'complete'),
(4, 93, 93, 550, '2025-04-07 11:15:41', 'complete');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `transaction_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `amount` double DEFAULT NULL,
  `transaction_type` text DEFAULT NULL,
  `source` text DEFAULT NULL,
  `status` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`transaction_id`, `user_id`, `amount`, `transaction_type`, `source`, `status`, `created_at`, `updated_at`) VALUES
(1, 3, 200, 'credit', 'sponsor_income', 'completed', '2025-04-04 14:52:31', '2025-04-04 14:52:31'),
(2, 3, 500, 'credit', 'telegram_income', 'completed', '2025-04-04 14:54:19', '2025-04-04 14:54:19'),
(3, 3, 100, 'credit', 'add_income', 'completed', '2025-04-04 14:55:17', '2025-04-04 14:55:17'),
(4, 3, 1.5, 'credit', 'roi_income', 'completed', '2025-04-04 14:55:17', '2025-04-04 14:55:17'),
(5, 3, 20, 'credit', 'sponsor_income', 'completed', '2025-04-04 16:10:13', '2025-04-04 16:10:13'),
(6, 3, 20, 'credit', 'telegram_income', 'completed', '2025-04-04 16:12:41', '2025-04-04 16:12:41'),
(7, 3, 20, 'credit', 'telegram_income', 'completed', '2025-04-04 16:13:11', '2025-04-04 16:13:11'),
(8, 3, 100, 'credit', 'add_income', 'completed', '2025-04-04 16:13:51', '2025-04-04 16:13:51'),
(9, 3, 20, 'credit', 'sponsor_income', 'completed', '2025-04-04 16:17:47', '2025-04-04 16:17:47'),
(10, 3, 20, 'credit', 'sponsor_income', 'completed', '2025-04-04 18:35:49', '2025-04-04 18:35:49'),
(11, 3, 100, 'credit', 'add_income', 'completed', '2025-04-04 18:36:05', '2025-04-04 18:36:05'),
(12, 2, 100, 'credit', 'add_income', 'completed', '2025-04-04 21:04:47', '2025-04-04 21:04:47'),
(13, 2, 100, 'credit', 'add_income', 'completed', '2025-04-04 21:06:34', '2025-04-04 21:06:34'),
(14, 2, 50, 'credit', 'roi_income', 'completed', '2025-04-05 16:58:35', '2025-04-05 16:58:35'),
(15, 2, 20, 'credit', 'sponsor_income', 'completed', '2025-04-05 18:54:12', '2025-04-05 18:54:12'),
(16, 2, 20, 'credit', 'sponsor_income', 'completed', '2025-04-05 18:59:00', '2025-04-05 18:59:00'),
(17, 92, 20, 'credit', 'telegram_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(18, 92, 100, 'credit', 'add_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(19, 92, 100, 'credit', 'add_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(20, 92, 50, 'credit', 'roi_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(21, 92, 20, 'credit', 'sponsor_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(22, 92, 50, 'credit', 'roi_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(23, 92, 100, 'credit', 'add_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(24, 92, 20, 'credit', 'sponsor_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(25, 94, 20, 'credit', 'roi_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(26, 94, 100, 'credit', 'add_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(27, 94, 20, 'credit', 'telegram_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(28, 94, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(29, 94, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(30, 96, 3, 'credit', 'telegram_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(31, 96, 2, 'credit', 'add_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(32, 96, 3, 'credit', 'insta_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(33, 96, 3, 'credit', 'roi_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(34, 94, 3, 'credit', 'roi_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(35, 93, 3, 'credit', 'roi_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(36, 93, 3, 'credit', 'roi_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(37, 93, 3, 'credit', 'roi_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(38, 93, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(39, 97, 3, 'credit', 'roi_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(40, 97, 3, 'credit', 'insta_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(41, 97, 3, 'credit', 'telegram_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(42, 94, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(43, 98, 1, 'credit', 'insta_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(44, 98, 1, 'credit', 'telegram_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(45, 98, 3, 'credit', 'roi_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(46, 1, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(47, 2, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(48, 3, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(49, 4, 3, 'credit', 'roi_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(50, 2, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(51, 4, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(52, 3, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(53, 6, 3, 'credit', 'roi_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(54, 7, 3, 'credit', 'roi_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(55, 4, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(56, 8, 3, 'credit', 'roi_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(57, 3, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(58, 7, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(59, 7, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(60, 11, 3, 'credit', 'roi_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(61, 7, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(62, 12, 3, 'credit', 'roi_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(63, 10, 3, 'credit', 'roi_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(64, 10, 3, 'credit', 'roi_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(65, 2, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(66, 12, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(67, 7, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(68, 14, 3, 'credit', 'roi_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(69, 7, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(70, 7, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(71, 17, 3, 'credit', 'roi_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(72, 16, 3, 'credit', 'roi_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(73, 7, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(74, 18, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(75, 16, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(76, 20, 3, 'credit', 'roi_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(77, 20, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(78, 21, 1, 'credit', 'insta_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(79, 21, 3, 'credit', 'roi_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(80, 12, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(81, 21, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(82, 12, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(83, 24, 3, 'credit', 'roi_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(84, 15, 3, 'credit', 'roi_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(85, 2, 1, 'credit', 'telegram_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(86, 21, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(87, 25, 1, 'credit', 'insta_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(88, 25, 3, 'credit', 'roi_income', 'completed', '2025-04-15 09:23:40', '2025-04-15 09:23:40'),
(113, 22, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 09:28:32', '2025-04-15 09:28:32'),
(114, 2, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 09:35:05', '2025-04-15 09:35:05'),
(115, 27, 3, 'credit', 'roi_income', 'completed', '2025-04-15 09:35:27', '2025-04-15 09:35:27'),
(116, 27, 1, 'credit', 'telegram_income', 'completed', '2025-04-15 09:36:03', '2025-04-15 09:36:03'),
(117, 25, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 09:48:05', '2025-04-15 09:48:05'),
(118, 28, 3, 'credit', 'roi_income', 'completed', '2025-04-15 09:49:37', '2025-04-15 09:49:37'),
(119, 5, 3, 'credit', 'roi_income', 'completed', '2025-04-15 09:51:20', '2025-04-15 09:51:20'),
(120, 5, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 09:53:52', '2025-04-15 09:53:52'),
(121, 5, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 10:06:54', '2025-04-15 10:06:54'),
(122, 30, 3, 'credit', 'roi_income', 'completed', '2025-04-15 10:17:38', '2025-04-15 10:17:38'),
(123, 3, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 10:21:29', '2025-04-15 10:21:29'),
(124, 31, 1, 'credit', 'insta_income', 'completed', '2025-04-15 10:21:49', '2025-04-15 10:21:49'),
(125, 31, 1, 'credit', 'telegram_income', 'completed', '2025-04-15 10:22:13', '2025-04-15 10:22:13'),
(126, 31, 3, 'credit', 'roi_income', 'completed', '2025-04-15 10:22:33', '2025-04-15 10:22:33'),
(127, 31, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 10:24:13', '2025-04-15 10:24:13'),
(128, 16, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 10:40:35', '2025-04-15 10:40:35'),
(129, 33, 3, 'credit', 'roi_income', 'completed', '2025-04-15 10:42:06', '2025-04-15 10:42:06'),
(130, 23, 3, 'credit', 'roi_income', 'completed', '2025-04-15 11:31:14', '2025-04-15 11:31:14'),
(131, 3, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 11:35:29', '2025-04-15 11:35:29'),
(132, 9, 3, 'credit', 'roi_income', 'completed', '2025-04-15 11:57:20', '2025-04-15 11:57:20'),
(133, 7, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 12:00:55', '2025-04-15 12:00:55'),
(134, 9, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 12:06:07', '2025-04-15 12:06:07'),
(135, 36, 3, 'credit', 'roi_income', 'completed', '2025-04-15 12:07:21', '2025-04-15 12:07:21'),
(136, 36, 1, 'credit', 'insta_income', 'completed', '2025-04-15 12:08:36', '2025-04-15 12:08:36'),
(137, 36, 1, 'credit', 'telegram_income', 'completed', '2025-04-15 12:09:25', '2025-04-15 12:09:25'),
(138, 6, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 12:36:00', '2025-04-15 12:36:00'),
(139, 6, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 12:36:14', '2025-04-15 12:36:14'),
(140, 37, 3, 'credit', 'roi_income', 'completed', '2025-04-15 12:36:41', '2025-04-15 12:36:41'),
(141, 38, 3, 'credit', 'roi_income', 'completed', '2025-04-15 12:37:19', '2025-04-15 12:37:19'),
(142, 38, 3, 'credit', 'roi_income', 'completed', '2025-04-15 12:37:31', '2025-04-15 12:37:31'),
(143, 7, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 12:48:51', '2025-04-15 12:48:51'),
(144, 35, 3, 'credit', 'roi_income', 'completed', '2025-04-15 13:48:23', '2025-04-15 13:48:23'),
(145, 35, 1, 'credit', 'insta_income', 'completed', '2025-04-15 13:56:05', '2025-04-15 13:56:05'),
(146, 35, 1, 'credit', 'insta_income', 'completed', '2025-04-15 13:56:17', '2025-04-15 13:56:17'),
(147, 7, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 14:07:38', '2025-04-15 14:07:38'),
(148, 40, 3, 'credit', 'roi_income', 'completed', '2025-04-15 14:09:53', '2025-04-15 14:09:53'),
(149, 35, 1, 'credit', 'telegram_income', 'completed', '2025-04-15 14:22:02', '2025-04-15 14:22:02'),
(150, 22, 3, 'credit', 'roi_income', 'completed', '2025-04-15 16:10:34', '2025-04-15 16:10:34'),
(151, 4, 1, 'credit', 'insta_income', 'completed', '2025-04-15 16:23:37', '2025-04-15 16:23:37'),
(152, 4, 1, 'credit', 'telegram_income', 'completed', '2025-04-15 16:24:22', '2025-04-15 16:24:22'),
(153, 26, 3, 'credit', 'roi_income', 'completed', '2025-04-15 16:37:33', '2025-04-15 16:37:33'),
(154, 7, 1, 'credit', 'telegram_income', 'completed', '2025-04-15 16:44:39', '2025-04-15 16:44:39'),
(155, 7, 1, 'credit', 'insta_income', 'completed', '2025-04-15 16:45:10', '2025-04-15 16:45:10'),
(156, 12, 2, 'credit', 'sponsor_income', 'completed', '2025-04-15 18:07:28', '2025-04-15 18:07:28'),
(157, 41, 1, 'credit', 'insta_income', 'completed', '2025-04-15 18:08:39', '2025-04-15 18:08:39'),
(158, 41, 1, 'credit', 'telegram_income', 'completed', '2025-04-15 18:09:49', '2025-04-15 18:09:49'),
(159, 41, 3, 'credit', 'roi_income', 'completed', '2025-04-15 18:10:30', '2025-04-15 18:10:30'),
(160, 9, 1, 'credit', 'insta_income', 'completed', '2025-04-16 03:06:02', '2025-04-16 03:06:02'),
(161, 35, 2, 'credit', 'sponsor_income', 'completed', '2025-04-16 04:02:59', '2025-04-16 04:02:59'),
(162, 42, 1, 'credit', 'insta_income', 'completed', '2025-04-16 04:03:48', '2025-04-16 04:03:48'),
(163, 42, 1, 'credit', 'telegram_income', 'completed', '2025-04-16 04:05:32', '2025-04-16 04:05:32'),
(164, 42, 3, 'credit', 'roi_income', 'completed', '2025-04-16 04:11:27', '2025-04-16 04:11:27'),
(165, 12, 1, 'credit', 'insta_income', 'completed', '2025-04-16 04:25:35', '2025-04-16 04:25:35'),
(166, 12, 2, 'credit', 'sponsor_income', 'completed', '2025-04-16 04:51:23', '2025-04-16 04:51:23'),
(167, 43, 3, 'credit', 'roi_income', 'completed', '2025-04-16 04:52:02', '2025-04-16 04:52:02'),
(168, 43, 1, 'credit', 'telegram_income', 'completed', '2025-04-16 04:52:57', '2025-04-16 04:52:57'),
(169, 43, 1, 'credit', 'insta_income', 'completed', '2025-04-16 04:53:56', '2025-04-16 04:53:56'),
(170, 4, 2, 'credit', 'sponsor_income', 'completed', '2025-04-16 05:10:24', '2025-04-16 05:10:24'),
(171, 4, 2, 'credit', 'sponsor_income', 'completed', '2025-04-16 05:12:18', '2025-04-16 05:12:18'),
(172, 4, 2, 'credit', 'sponsor_income', 'completed', '2025-04-16 05:14:14', '2025-04-16 05:14:14'),
(173, 4, 2, 'credit', 'sponsor_income', 'completed', '2025-04-16 05:14:57', '2025-04-16 05:14:57'),
(174, 4, 2, 'credit', 'sponsor_income', 'completed', '2025-04-16 05:15:40', '2025-04-16 05:15:40'),
(175, 4, 2, 'credit', 'sponsor_income', 'completed', '2025-04-16 05:19:57', '2025-04-16 05:19:57'),
(176, 2, 2, 'credit', 'sponsor_income', 'completed', '2025-04-16 07:22:02', '2025-04-16 07:22:02'),
(177, 7, 2, 'credit', 'sponsor_income', 'completed', '2025-04-16 10:04:11', '2025-04-16 10:04:11'),
(178, 51, 3, 'credit', 'roi_income', 'completed', '2025-04-16 10:05:05', '2025-04-16 10:05:05'),
(179, 51, 1, 'credit', 'insta_income', 'completed', '2025-04-16 15:18:26', '2025-04-16 15:18:26'),
(180, 51, 2, 'credit', 'sponsor_income', 'completed', '2025-04-16 16:39:19', '2025-04-16 16:39:19'),
(181, 52, 3, 'credit', 'roi_income', 'completed', '2025-04-16 16:40:10', '2025-04-16 16:40:10'),
(182, 51, 2, 'credit', 'sponsor_income', 'completed', '2025-04-17 01:42:40', '2025-04-17 01:42:40'),
(183, 53, 1, 'credit', 'insta_income', 'completed', '2025-04-17 02:18:16', '2025-04-17 02:18:16'),
(184, 53, 3, 'credit', 'roi_income', 'completed', '2025-04-17 02:19:21', '2025-04-17 02:19:21'),
(185, 53, 1, 'credit', 'telegram_income', 'completed', '2025-04-17 02:21:06', '2025-04-17 02:21:06'),
(186, 9, 1, 'credit', 'telegram_income', 'completed', '2025-04-17 03:11:45', '2025-04-17 03:11:45'),
(187, 9, 1, 'credit', 'telegram_income', 'completed', '2025-04-17 03:11:57', '2025-04-17 03:11:57'),
(188, 35, 2, 'credit', 'sponsor_income', 'completed', '2025-04-17 03:48:04', '2025-04-17 03:48:04'),
(189, 54, 1, 'credit', 'insta_income', 'completed', '2025-04-17 03:48:41', '2025-04-17 03:48:41'),
(190, 53, 2, 'credit', 'sponsor_income', 'completed', '2025-04-17 03:49:04', '2025-04-17 03:49:04'),
(191, 54, 1, 'credit', 'telegram_income', 'completed', '2025-04-17 03:49:31', '2025-04-17 03:49:31'),
(192, 54, 3, 'credit', 'roi_income', 'completed', '2025-04-17 03:50:09', '2025-04-17 03:50:09'),
(193, 55, 2, 'credit', 'sponsor_income', 'completed', '2025-04-17 04:38:29', '2025-04-17 04:38:29'),
(194, 56, 3, 'credit', 'roi_income', 'completed', '2025-04-17 04:40:49', '2025-04-17 04:40:49'),
(195, 17, 1, 'credit', 'telegram_income', 'completed', '2025-04-17 05:39:01', '2025-04-17 05:39:01'),
(196, 17, 1, 'credit', 'insta_income', 'completed', '2025-04-17 05:39:41', '2025-04-17 05:39:41'),
(197, 9, 2, 'credit', 'sponsor_income', 'completed', '2025-04-17 05:51:29', '2025-04-17 05:51:29'),
(198, 57, 2, 'credit', 'sponsor_income', 'completed', '2025-04-17 06:02:55', '2025-04-17 06:02:55'),
(199, 16, 2, 'credit', 'sponsor_income', 'completed', '2025-04-17 06:05:16', '2025-04-17 06:05:16'),
(200, 59, 1, 'credit', 'insta_income', 'completed', '2025-04-17 06:07:05', '2025-04-17 06:07:05'),
(201, 59, 3, 'credit', 'roi_income', 'completed', '2025-04-17 06:07:46', '2025-04-17 06:07:46'),
(202, 16, 2, 'credit', 'sponsor_income', 'completed', '2025-04-17 06:16:13', '2025-04-17 06:16:13'),
(203, 60, 3, 'credit', 'roi_income', 'completed', '2025-04-17 06:19:55', '2025-04-17 06:19:55');

-- --------------------------------------------------------

--
-- Table structure for table `transfer`
--

CREATE TABLE `transfer` (
  `id` int(11) NOT NULL,
  `userby_id` int(11) NOT NULL,
  `userto_id` int(11) NOT NULL,
  `amount` float NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `description` text NOT NULL COMMENT 'NA',
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(45) DEFAULT NULL,
  `fullname` varchar(255) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `phone` bigint(20) DEFAULT NULL,
  `role` varchar(10) DEFAULT 'user',
  `status` varchar(10) DEFAULT 'unblock',
  `is_active` varchar(10) DEFAULT 'inactive',
  `reffer_by` varchar(45) DEFAULT NULL,
  `refferal_code` varchar(45) DEFAULT NULL,
  `total_team` int(10) UNSIGNED DEFAULT 0,
  `plan_id` int(10) UNSIGNED DEFAULT 0,
  `active_plan` float UNSIGNED DEFAULT 0,
  `business` float UNSIGNED DEFAULT 0,
  `roi_income` float UNSIGNED DEFAULT 0,
  `roi_income_day` float UNSIGNED DEFAULT 0,
  `level_income_day` float UNSIGNED DEFAULT 0,
  `level_income` float UNSIGNED DEFAULT 0,
  `reward` float UNSIGNED DEFAULT 0,
  `reward_level` int(10) UNSIGNED DEFAULT 0,
  `activation_date` varchar(20) DEFAULT NULL,
  `last_login` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `bep20` varchar(255) DEFAULT NULL,
  `trc20` varchar(255) DEFAULT NULL,
  `roi_status` varchar(100) NOT NULL DEFAULT 'open',
  `level_status` varchar(45) NOT NULL DEFAULT 'open',
  `max_amount` float UNSIGNED NOT NULL DEFAULT 0,
  `updated_at` varchar(255) DEFAULT NULL,
  `month_salary` int(10) UNSIGNED DEFAULT 0,
  `total_salary` int(10) UNSIGNED DEFAULT 0,
  `month_duration` int(10) UNSIGNED DEFAULT 0,
  `salary_start` varchar(45) DEFAULT NULL,
  `salary_level` int(11) DEFAULT NULL,
  `working` float UNSIGNED DEFAULT 0,
  `non_working` float UNSIGNED DEFAULT 0,
  `cto` varchar(45) DEFAULT 'false',
  `entry_fees` varchar(45) DEFAULT '0',
  `max` int(11) DEFAULT 2,
  `tokens` varchar(255) DEFAULT '0',
  `roi_percentage` int(11) DEFAULT 10,
  `direct_income` float UNSIGNED DEFAULT 0,
  `roi_max` int(11) DEFAULT NULL,
  `wallet` float UNSIGNED DEFAULT 0,
  `sponsor_income` float UNSIGNED DEFAULT 0,
  `add_income` float UNSIGNED DEFAULT 0,
  `telegram_income` float UNSIGNED DEFAULT 0,
  `insta_income` float UNSIGNED DEFAULT 0,
  `total_gigs` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `fullname`, `email`, `password`, `phone`, `role`, `status`, `is_active`, `reffer_by`, `refferal_code`, `total_team`, `plan_id`, `active_plan`, `business`, `roi_income`, `roi_income_day`, `level_income_day`, `level_income`, `reward`, `reward_level`, `activation_date`, `last_login`, `created_at`, `bep20`, `trc20`, `roi_status`, `level_status`, `max_amount`, `updated_at`, `month_salary`, `total_salary`, `month_duration`, `salary_start`, `salary_level`, `working`, `non_working`, `cto`, `entry_fees`, `max`, `tokens`, `roi_percentage`, `direct_income`, `roi_max`, `wallet`, `sponsor_income`, `add_income`, `telegram_income`, `insta_income`, `total_gigs`) VALUES
(1, 'admin', '', 'admin@gmail.com', '123', 1234567890, 'admin', 'unblock', 'active', NULL, 'ABCDEF01', 11, 1, 100, 200, 2.582, 0.2, 0, 0.774, 0, 0, NULL, '2025-04-17 02:28:36', '2024-08-30 06:11:26', NULL, NULL, 'open', 'open', 65.495, NULL, 0, 0, 0, NULL, NULL, 4.562, 1.165, 'false', '0', 2, NULL, 0, 57, 2, 0, 2, 0, 0, 0, 0),
(2, 'ATF096370', 'demo', 'demo@yopmail.com', 'Demo@123', 1234567890, 'user', 'unblock', 'inactive', 'ABCDEF01', 'ATF096370', 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, '2025-04-17 02:31:07', '2025-04-14 07:27:21', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 5, 10, 0, 1, 0, 0),
(3, 'ATF402421', 'main', 'admin@yopmail.com', 'Ak@12345', 0, 'user', 'unblock', 'inactive', 'ATF096370', 'ATF402421', 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, '2025-04-16 09:08:00', '2025-04-14 11:45:11', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 4, 10, 0, 0, 0, 0),
(4, 'ATF797973', 'Sultan Singh Adiwal', 'sultansingh.adiwal@gmail.com', 'Ntnssk@123', 9820159915, 'user', 'unblock', 'inactive', 'ATF402421', 'ATF797973', 8, 0, 0, 0, 3, 0, 0, 0, 0, 0, NULL, '2025-04-16 07:32:34', '2025-04-14 11:51:03', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 17, 16, 0, 1, 1, 0),
(5, 'ATF092204', 'test1', 'test1@yopmail.com', 'Demo@123', 1234567890, 'user', 'unblock', 'inactive', 'ATF096370', 'ATF092204', 2, 0, 0, 0, 3, 0, 0, 0, 0, 0, NULL, '2025-04-16 09:10:27', '2025-04-14 11:59:54', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 7, 4, 0, 0, 0, 0),
(6, 'ATF990596', 'RITIK GEHLOT ', 'ritikgehlot2121@gmail.com', '@Ritik21', 9768880805, 'user', 'unblock', 'inactive', 'ATF797973', 'ATF990596', 2, 0, 0, 0, 3, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-14 12:09:09', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 7, 4, 0, 0, 0, 0),
(7, 'ATF828124', 'KAREN', 'Saiguruji18@gmail.com', 'Parveen@1968', 9034009615, 'user', 'unblock', 'inactive', 'ATF402421', 'ATF828124', 11, 0, 0, 0, 3, 0, 0, 0, 0, 0, NULL, '2025-04-17 02:36:12', '2025-04-14 12:13:22', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 13, 22, 0, 1, 1, 0),
(8, 'ATF046155', 'SUKHMEET SINGH RANA', 'sukhmeetrana.1@gmail.com', 'Sukhmeet@1993', 9996949436, 'user', 'unblock', 'inactive', 'ATF797973', 'ATF046155', 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, NULL, '2025-04-16 01:21:11', '2025-04-14 12:42:12', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 3, 0, 0, 0, 0, 0),
(9, 'ATF589638', 'Om parkash ', 'Sethiommi@gmail.com', 'Ommi@123', 9992333347, 'user', 'unblock', 'inactive', 'ATF402421', 'ATF589638', 2, 0, 0, 0, 3, 0, 0, 0, 0, 0, NULL, '2025-04-16 06:48:01', '2025-04-14 15:04:28', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 10, 4, 0, 2, 1, 0),
(10, 'ATF740656', 'Naresh Kumar ', 'nkjhajhari4567@gmail.com', 'Naresh@$1234', 9350968108, 'user', 'unblock', 'inactive', 'ATF828124', 'ATF740656', 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-15 05:16:22', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 6, 0, 0, 0, 0, 0),
(11, 'ATF997007', 'Praveen Kumar ', 'praveenjaat1034@gmail.com', 'Praveen@123', 7409127559, 'user', 'unblock', 'inactive', 'ATF828124', 'ATF997007', 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, NULL, '2025-04-17 00:37:39', '2025-04-15 05:30:27', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 3, 0, 0, 0, 0, 0),
(12, 'ATF139295', 'Tejinder pal Singh', 'tejinderpalsinghbhatia@gmail.com', 'Gurmeet@1969', 9034323275, 'user', 'unblock', 'inactive', 'ATF828124', 'ATF139295', 5, 0, 0, 0, 3, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-15 06:06:42', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 8, 10, 0, 0, 1, 0),
(13, 'ATF973776', 'demo2', 'demo2@gmail.com', 'Demo@123', 1234567890, 'user', 'unblock', 'inactive', 'ATF096370', 'ATF973776', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, '2025-04-16 06:25:29', '2025-04-15 07:12:53', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 0, 0, 0, 0, 0, 0),
(14, 'ATF290986', 'Renu Bala', 'Kamboirenu81@gmail.com', 'Renu@9467', 9467531785, 'user', 'unblock', 'inactive', 'ATF139295', 'ATF290986', 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-15 07:20:00', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 3, 0, 0, 0, 0, 0),
(15, 'ATF451721', 'KAMLESH KUMAR ', 'kamleshkaushlesh1986@gmail.com', 'Kamlesh@123', 9817601391, 'user', 'unblock', 'inactive', 'ATF828124', 'ATF451721', 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-15 07:20:29', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 3, 0, 0, 0, 0, 0),
(16, 'ATF743902', 'Dharambir', 'dharambir85719@gmail.com', 'Dharambir@123', 8571933204, 'user', 'unblock', 'inactive', 'ATF828124', 'ATF743902', 4, 0, 0, 0, 3, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-15 07:37:03', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 9, 8, 0, 0, 0, 0),
(17, 'ATF679678', 'Sahil Chopra', 'sahilchopra25594@gmail.com', 'Chopra@0007', 8222020007, 'user', 'unblock', 'inactive', 'ATF828124', 'ATF679678', 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, NULL, '2025-04-16 01:18:04', '2025-04-15 07:38:25', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 5, 0, 0, 1, 1, 0),
(18, 'ATF612604', 'Ajay thakur ', 'ajayplc2021@gmail.com', 'Ajay@3268', 8973299000, 'user', 'unblock', 'inactive', 'ATF828124', 'ATF612604', 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-15 07:54:25', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 0, 2, 0, 0, 0, 0),
(19, 'ATF436581', 'Ajay Kumar ', 'ajay.manu143@gmail.com', 'Ajay@1982', 9355599000, 'user', 'unblock', 'inactive', 'ATF612604', 'ATF436581', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-15 07:56:51', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 0, 0, 0, 0, 0, 0),
(20, 'ATF926388', 'Surender', 'skpingli291@gmail.com', 'Sk@123456', 9034103401, 'user', 'unblock', 'inactive', 'ATF743902', 'ATF926388', 1, 0, 0, 0, 3, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-15 07:59:05', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 3, 2, 0, 0, 0, 0),
(21, 'ATF594309', 'Ravinder ', 'ravinderkashyap86399@gmail.com', 'Ravi@1995', 8950109110, 'user', 'unblock', 'inactive', 'ATF926388', 'ATF594309', 2, 0, 0, 0, 3, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-15 08:06:48', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 6, 4, 0, 0, 1, 0),
(22, 'ATF492729', 'Gagan Bhatia', 'gaganbhatia483291@gmail.com', 'Harnidh@3291', 9896098299, 'user', 'unblock', 'inactive', 'ATF139295', 'ATF492729', 1, 0, 0, 0, 3, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-15 08:39:12', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 5, 2, 0, 0, 0, 0),
(23, 'ATF324022', 'Manjeet', 'mjeet2018@gmail.com', 'ManjeetKsp442@', 8708215358, 'user', 'unblock', 'inactive', 'ATF594309', 'ATF324022', 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-15 08:40:30', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 3, 0, 0, 0, 0, 0),
(24, 'ATF624969', 'Kirtijee ', 'kirtiman623@gmil.com', 'Kirti@123', 7988024751, 'user', 'unblock', 'inactive', 'ATF139295', 'ATF624969', 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-15 09:01:00', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 3, 0, 0, 0, 0, 0),
(25, 'ATF544616', 'Joginder', 'tarunkashyap29172917@gmail.com', 'Joginder@123', 9896414089, 'user', 'unblock', 'inactive', 'ATF594309', 'ATF544616', 1, 0, 0, 0, 3, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-15 09:16:20', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 6, 2, 0, 0, 1, 0),
(26, 'ATF223251', 'Puneet kaur ', 'puneetkaurynr92@gmail.com', 'Sidak@1285', 8572857838, 'user', 'unblock', 'inactive', 'ATF492729', 'ATF223251', 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-15 09:28:32', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 3, 0, 0, 0, 0, 0),
(27, 'ATF833544', 'Brody Kennedy', 'vusacodoge@mailinator.com', 'tagagyzi!4G@', 8445642266, 'user', 'unblock', 'inactive', 'ATF096370', 'ATF833544', 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, NULL, '2025-04-16 09:10:33', '2025-04-15 09:35:05', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 4, 0, 0, 1, 0, 0),
(28, 'ATF655471', 'Shankar Dass ', 'dassshankar105@gmail.com', '@Sapna1993', 7015849928, 'user', 'unblock', 'inactive', 'ATF544616', 'ATF655471', 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-15 09:48:05', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 3, 0, 0, 0, 0, 0),
(29, 'ATF382188', 'Rahim Morse', 'samanase@mailinator.com', 'kucepewu6@G', 2792031097, 'user', 'unblock', 'inactive', 'ATF092204', 'ATF382188', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, '2025-04-16 01:21:18', '2025-04-15 09:53:52', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 0, 0, 0, 0, 0, 0),
(30, 'ATF503891', 'Doris Navarro', 'john1@yopmail.com', 'qybuvuma@34G', 6014862553, 'user', 'unblock', 'inactive', 'ATF092204', 'ATF503891', 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-15 10:06:54', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 3, 0, 0, 0, 0, 0),
(31, 'ATF350662', 'test2', 'test2@yopmail.com', 'Ak!123456', 0, 'user', 'unblock', 'inactive', 'ATF402421', 'ATF350662', 1, 0, 0, 0, 3, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-15 10:21:29', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 7, 2, 0, 1, 1, 0),
(32, 'ATF609417', 'test3', 'test3@yopmail.com', 'Ak!123456', 0, 'user', 'unblock', 'inactive', 'ATF350662', 'ATF609417', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-15 10:24:13', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 0, 0, 0, 0, 0, 0),
(33, 'ATF527746', 'Ieshwer ', 'ieshwer@gmail.com', 'Ieshwer@123', 9896515189, 'user', 'unblock', 'inactive', 'ATF743902', 'ATF527746', 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-15 10:40:35', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 3, 0, 0, 0, 0, 0),
(34, 'ATF886889', 'Suraj Bhan', 'Sbhan1966@gmail.com', 'Suraj@123', 7015776081, 'user', 'unblock', 'inactive', 'ATF402421', 'ATF886889', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, '2025-04-16 01:22:00', '2025-04-15 11:35:29', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 0, 0, 0, 0, 0, 0),
(35, 'ATF583757', 'SANJEEV ', 'sanjeevgahlot001@gmail.com', 'Sanjeev@123', 9053000636, 'user', 'unblock', 'inactive', 'ATF828124', 'ATF583757', 2, 0, 0, 0, 3, 0, 0, 0, 0, 0, NULL, '2025-04-16 01:18:11', '2025-04-15 12:00:55', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 10, 4, 0, 1, 2, 0),
(36, 'ATF024667', 'SURAJ BHAN ', 'sbhan98130@gmail.com', 'Suraj@123', 7015927220, 'user', 'unblock', 'inactive', 'ATF589638', 'ATF024667', 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-15 12:06:07', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 5, 0, 0, 1, 1, 0),
(37, 'ATF470412', 'Ashish chawariya', 'ashishchawariya122@gmail.com', '@Ashish27', 8898965930, 'user', 'unblock', 'inactive', 'ATF990596', 'ATF470412', 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-15 12:36:00', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 3, 0, 0, 0, 0, 0),
(38, 'ATF925192', 'Anivesh59', 'aniveshathwal@gmail.com', '@Anivesh2001', 9833599492, 'user', 'unblock', 'inactive', 'ATF990596', 'ATF925192', 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-15 12:36:15', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 6, 0, 0, 0, 0, 0),
(39, 'ATF963075', 'Renudevi', 'renudevi6363@gmail.com', 'Renu@1234', 9817446063, 'user', 'unblock', 'inactive', 'ATF828124', 'ATF963075', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-15 12:48:51', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 0, 0, 0, 0, 0, 0),
(40, 'ATF188064', 'Rajat', 'rajatkumar82228@gmail.com', 'Rajat@12', 8222892177, 'user', 'unblock', 'inactive', 'ATF828124', 'ATF188064', 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-15 14:07:38', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 3, 0, 0, 0, 0, 0),
(41, 'ATF442439', 'Ajay kishor', 'ajaykishor83000@gmail.com', 'Ajay@1976', 9563183000, 'user', 'unblock', 'inactive', 'ATF139295', 'ATF442439', 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-15 18:07:28', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 5, 0, 0, 1, 1, 0),
(42, 'ATF451621', 'SAWAN ', 'kumaranil441978@gmail.com', 'Sawan@123', 9053000638, 'user', 'unblock', 'inactive', 'ATF583757', 'ATF451621', 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-16 04:02:59', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 5, 0, 0, 1, 1, 0),
(43, 'ATF694420', 'Supreet Singh', 'supreetsinghs1992@gmail.com', 'Supreet@123', 9034663623, 'user', 'unblock', 'inactive', 'ATF139295', 'ATF694420', 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, NULL, '2025-04-16 00:55:11', '2025-04-16 04:51:23', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 5, 0, 0, 1, 1, 0),
(44, 'ATF140315', '1111', '1@gmail.com', 'Vikas141199@', 1111111111, 'user', 'unblock', 'inactive', 'ATF797973', 'ATF140315', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-16 05:10:24', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 0, 0, 0, 0, 0, 0),
(45, 'ATF508068', '11112', '2@gmail.com', 'Vikas141199@', 1111111111, 'user', 'unblock', 'inactive', 'ATF797973', 'ATF508068', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-16 05:12:18', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 0, 0, 0, 0, 0, 0),
(46, 'ATF633419', '11113', '111@gmail.com', 'Vikas141199@', 1111111111, 'user', 'unblock', 'inactive', 'ATF797973', 'ATF633419', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-16 05:14:14', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 0, 0, 0, 0, 0, 0),
(47, 'ATF628673', '11114', '11112@gmail.com', 'Vikas141199@', 1111111111, 'user', 'unblock', 'inactive', 'ATF797973', 'ATF628673', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-16 05:14:57', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 0, 0, 0, 0, 0, 0),
(48, 'ATF888850', '11115', '11111@gmail.com', 'Vikas141199@', 1111111111, 'user', 'unblock', 'inactive', 'ATF797973', 'ATF888850', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-16 05:15:40', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 0, 0, 0, 0, 0, 0),
(49, 'ATF621932', '11111', '11@gmail.com', 'Vikas141199@', 1111111111, 'user', 'unblock', 'inactive', 'ATF797973', 'ATF621932', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-16 05:19:57', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 0, 0, 0, 0, 0, 0),
(50, 'ATF301565', 'Demo3', 'demo3@yopmail.com', 'Demo@123', 1234567890, 'user', 'unblock', 'inactive', 'ATF096370', 'ATF301565', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, '2025-04-16 04:02:02', '2025-04-16 07:22:02', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 0, 0, 0, 0, 0, 0),
(51, 'ATF430973', 'Ajay Gautam', 'ajayaappkl@gmail.com', 'Ajay@1973', 9872799966, 'user', 'unblock', 'inactive', 'ATF828124', 'ATF430973', 2, 0, 0, 0, 3, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-16 10:04:11', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 8, 4, 0, 0, 1, 0),
(52, 'ATF606411', 'Pankaj ', 'Pankajsaini90212@gmail.com', 'Pank@1993', 9138193462, 'user', 'unblock', 'inactive', 'ATF430973', 'ATF606411', 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-16 16:39:19', '0x6EFf5a9955DF080A24EFe420de7df45A28470C24', NULL, 'open', 'open', 0, '2025-04-16T16:43:01.956Z', 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 3, 0, 0, 0, 0, 0),
(53, 'ATF734024', 'Sonia ', 'soniagautam4094@gmail.com', 'Sonia@1975', 9888873443, 'user', 'unblock', 'inactive', 'ATF430973', 'ATF734024', 1, 0, 0, 0, 3, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-17 01:42:40', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 7, 2, 0, 1, 1, 0),
(54, 'ATF043143', 'Randhawa Kajal', 'randhawakajal956@Gmail.com', 'Rohan@2001', 8930746200, 'user', 'unblock', 'inactive', 'ATF583757', 'ATF043143', 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-17 03:48:04', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 5, 0, 0, 1, 1, 0),
(55, 'ATF304424', 'Ashok kumar', 'shoki2481@gmail.com', '@Ashok0707', 8557949755, 'user', 'unblock', 'inactive', 'ATF734024', 'ATF304424', 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-17 03:49:04', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 2, 2, 0, 0, 0, 0),
(56, 'ATF048232', 'BHUPINDER SINGH', 'bhupibajaj18@gmail.com', 'Bhupinder@123', 8264320590, 'user', 'unblock', 'inactive', 'ATF304424', 'ATF048232', 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-17 04:38:29', '0xD644884417657b9e56594437BA1E926dE454d893', NULL, 'open', 'open', 0, '2025-04-17T04:46:24.546Z', 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 3, 0, 0, 0, 0, 0),
(57, 'ATF481947', 'Harjinderpal', 'sharmaharjinder08@gmail.com', 'Harjinder@123', 9518561000, 'user', 'unblock', 'inactive', 'ATF589638', 'ATF481947', 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-17 05:51:29', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 2, 2, 0, 0, 0, 0),
(58, 'ATF018081', 'Shivam Sharma', 'sharma7140shii@gmail.com', 'Shivam@123', 9350967140, 'user', 'unblock', 'inactive', 'ATF481947', 'ATF018081', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-17 06:02:55', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 0, 0, 0, 0, 0, 0),
(59, 'ATF785060', 'Bittu', 'bittukashyap358@gmail.com', 'Bittu@12345', 8053628281, 'user', 'unblock', 'inactive', 'ATF743902', 'ATF785060', 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-17 06:05:16', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 4, 0, 0, 0, 1, 0),
(60, 'ATF440055', 'Sunil', 'ambeyglass351@gmail.com', 'Sunil@12345', 8053067004, 'user', 'unblock', 'inactive', 'ATF743902', 'ATF440055', 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, NULL, NULL, '2025-04-17 06:16:13', NULL, NULL, 'open', 'open', 0, NULL, 0, 0, 0, NULL, NULL, 0, 0, 'false', '0', 2, '0', 10, 0, NULL, 3, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `user_deposite`
--

CREATE TABLE `user_deposite` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `amount` float DEFAULT NULL,
  `status` varchar(10) DEFAULT 'complete',
  `createdAT` timestamp NULL DEFAULT current_timestamp(),
  `image_name` text DEFAULT NULL,
  `currency` varchar(45) DEFAULT NULL,
  `acceptat` varchar(45) DEFAULT NULL,
  `hash` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_general_ci;

--
-- Dumping data for table `user_deposite`
--

INSERT INTO `user_deposite` (`id`, `user_id`, `amount`, `status`, `createdAT`, `image_name`, `currency`, `acceptat`, `hash`) VALUES
(1, 92, 1000, 'TRN-ADM002', '2025-03-19 11:07:51', NULL, NULL, '2025-03-19 16:37:51', NULL),
(2, 92, 500, 'TRN-ADM002', '2025-04-07 10:50:11', NULL, NULL, '2025-04-07 16:20:11', NULL),
(3, 93, 1000, 'TRN-ADM002', '2025-04-07 11:15:23', NULL, NULL, '2025-04-07 16:45:23', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `withdrawal_request`
--

CREATE TABLE `withdrawal_request` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `amount` float DEFAULT NULL,
  `status` varchar(45) DEFAULT 'pending',
  `createdAT` timestamp NULL DEFAULT current_timestamp(),
  `acceptat` varchar(45) DEFAULT NULL,
  `type` varchar(50) NOT NULL,
  `deduction` float NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `achivers`
--
ALTER TABLE `achivers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `adminsettings`
--
ALTER TABLE `adminsettings`
  ADD PRIMARY KEY (`setlevel`);

--
-- Indexes for table `bonuses`
--
ALTER TABLE `bonuses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cto`
--
ALTER TABLE `cto`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cto_transaction`
--
ALTER TABLE `cto_transaction`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `direct_transaction`
--
ALTER TABLE `direct_transaction`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `invest_level`
--
ALTER TABLE `invest_level`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `invest_level_transaction`
--
ALTER TABLE `invest_level_transaction`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notification_recipients`
--
ALTER TABLE `notification_recipients`
  ADD PRIMARY KEY (`recipient_id`);

--
-- Indexes for table `otp_requests`
--
ALTER TABLE `otp_requests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `plans`
--
ALTER TABLE `plans`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `qr`
--
ALTER TABLE `qr`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `resetpass`
--
ALTER TABLE `resetpass`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reward_transaction`
--
ALTER TABLE `reward_transaction`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roi_transaction`
--
ALTER TABLE `roi_transaction`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `salary_transaction`
--
ALTER TABLE `salary_transaction`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `support`
--
ALTER TABLE `support`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `topup`
--
ALTER TABLE `topup`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`transaction_id`);

--
-- Indexes for table `transfer`
--
ALTER TABLE `transfer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`);

--
-- Indexes for table `user_deposite`
--
ALTER TABLE `user_deposite`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `withdrawal_request`
--
ALTER TABLE `withdrawal_request`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `achivers`
--
ALTER TABLE `achivers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `bonuses`
--
ALTER TABLE `bonuses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `cto`
--
ALTER TABLE `cto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cto_transaction`
--
ALTER TABLE `cto_transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `direct_transaction`
--
ALTER TABLE `direct_transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `invest_level`
--
ALTER TABLE `invest_level`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `invest_level_transaction`
--
ALTER TABLE `invest_level_transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `notification_recipients`
--
ALTER TABLE `notification_recipients`
  MODIFY `recipient_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `otp_requests`
--
ALTER TABLE `otp_requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `plans`
--
ALTER TABLE `plans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `qr`
--
ALTER TABLE `qr`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `resetpass`
--
ALTER TABLE `resetpass`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reward_transaction`
--
ALTER TABLE `reward_transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roi_transaction`
--
ALTER TABLE `roi_transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `salary_transaction`
--
ALTER TABLE `salary_transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `support`
--
ALTER TABLE `support`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `topup`
--
ALTER TABLE `topup`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `transaction_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=204;

--
-- AUTO_INCREMENT for table `transfer`
--
ALTER TABLE `transfer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `user_deposite`
--
ALTER TABLE `user_deposite`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `withdrawal_request`
--
ALTER TABLE `withdrawal_request`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
