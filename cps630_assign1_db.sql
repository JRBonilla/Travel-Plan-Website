-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 27, 2020 at 11:10 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cps630_assign1_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_attractions`
--

CREATE TABLE `tbl_attractions` (
  `attract_id` mediumint(9) NOT NULL,
  `attraction_name` varchar(50) NOT NULL,
  `country_id` int(11) NOT NULL,
  `type_id` int(11) NOT NULL,
  `date-of-creation` text NOT NULL,
  `dimensions` text NOT NULL,
  `founder` text NOT NULL,
  `location` text NOT NULL,
  `image_path_1` text NOT NULL,
  `image_path_2` text NOT NULL,
  `image_alt_1` text NOT NULL,
  `image_alt_2` text NOT NULL,
  `user_1` text NOT NULL,
  `user_date_1` text NOT NULL,
  `comment_1` text NOT NULL,
  `user_2` text NOT NULL,
  `user_date_2` text NOT NULL,
  `comment_2` text NOT NULL,
  `distance` int(11) NOT NULL,
  `price` int(255) NOT NULL DEFAULT 1,
  `rank` int(25) NOT NULL DEFAULT 5
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_attractions`
--

INSERT INTO `tbl_attractions` (`attract_id`, `attraction_name`, `country_id`, `type_id`, `date-of-creation`, `dimensions`, `founder`, `location`, `image_path_1`, `image_path_2`, `image_alt_1`, `image_alt_2`, `user_1`, `user_date_1`, `comment_1`, `user_2`, `user_date_2`, `comment_2`, `distance`, `price`, `rank`) VALUES
(0, 'Yankari National Park', 10, 6, '1991', 'Area = 2,250 km2.', 'Government of Nigeria', 'Bauchi State, Nigeria', '../../assets/img/readMorePics/yankari1.jpg', '../../assets/img/readMorePics/yankari2.jpg', 'Yankari 1', 'Yankari 2', 'PepeHands', '2/6/2020 7:05PM', 'Wow! Mandela said great things about this place and I agree.', 'FF7R', '2/1/2020 7:00PM', 'Meh. it was alright, I\'m more hyped for other things.', 778, 5465, 5),
(1, 'White House', 1, 3, 'October 13, 1792', 'The White House is 168 feet (51.2 meters) long. The White House is 85 feet 6 inches (26.1 meters) wide without porticoes; 152 feet wide with porticoes.', 'James Hoban', '1600 Pennsylvania Ave NW, Washington, DC 20500, United States', '../../assets/img/readMorePics/whiteHouse1.jpg', '../../assets/img/readMorePics/whiteHouse2.jpg', 'White House 1', 'White House 2', 'ThatoneGuy', '12/6/2040 99:99PM', 'I\'M FROM THE FUTURE AND CAN CONFIRM THIS PLACE IS OKAY', 'Thatotherguy', '2/3/2020 6:03PM', 'great aesthetic', 100, 124, 5),
(2, 'Grand Canyon', 1, 5, '7th Century BC - 1878', 'Height: 16-26 feet (5-8m). Width: 20 feet at bottom, 16 feet at top (6 - 5m). Length: 3,890 miles (6,259 km) of wall; 5,500 miles (8,851 km) including other types of barriers.', 'Qin Shi Huang', 'Huairou, China', '../../assets/img/readMorePics/greatWoC1.jpg', '../../assets/img/readMorePics/greatWoC2.jpg', 'Great Wall of China 1', 'Great Wall of China 2', 'osdkaodasd', '1/20/2020 1:13PM', 'Beautiful.', 'Username3r23232', '2/1/2020 7:00PM', 'Meh. it was alright', 234, 1233, 5),
(3, 'Niagara Falls', 2, 5, 'October 24, 1901 (Date first person went over)', 'Area: 209.7 km²', 'Father Louis Hennepin', 'Ontario', '../../assets/img/readMorePics/niagaraF1.jpg', '../../assets/img/readMorePics/niagraF2.jpg', 'Niagra Falls 1', 'Niagra Falls 2', 'uɐW‾ʇxǝ┴‾uʍop‾ǝpᴉsd∩', '1/1/2020 7:05PM', 'ʇᴉ ɥʇᴉʍ ɯɐ I puɐ \'ʇuǝɹǝɟɟᴉp sᴉ sᴉɥʇ \'looɔ sᴉ sᴉɥʇ \'dᴉɥ sᴉ sᴉɥ┴', 'DryMan', '2/13/020 7:00PM', 'Too wet.', 645, 435, 5),
(4, 'CN Tower', 2, 1, 'February 6, 1973', 'Circumference - 109.1m (358ft.) * Radius - 33.2m (109.2 ft.) * Diameter - 66.6m (218.4 ft.) Thickness of The Glass Floor: 2 1/2', 'Canada Lands Company', 'Toronto ON', '../../assets/img/readMorePics/cnTower1.jpg', '../../assets/img/readMorePics/cnTower2.jpg', 'CN Tower 1', 'CN Tower 2', 'Username1111', '2/6/2020 7:05PM', 'Wow! Great place! very neat! would come again.', 'Username1112', '2/1/2020 7:00PM', 'Meh. it was alright', 99, 1543, 5),
(5, 'Stonehenge', 3, 4, 'February 6, 1973', '13 feet (4.0 m) high, seven feet (2.1 m) wide, and weighing around 25 tons (per stone)', 'Unclear', 'Wiltshire‎, England', '../../assets/img/readMorePics/stoneH1.jpg', '../../assets/img/readMorePics/stoneH2.jpg', 'CN Tower 1', 'CN Tower 2', 'stoneHEnthusist', '1/2/2020 7:05PM', 'DREAM COME TRUE VISITNG HERE HOLY COW!', 'hawtRaps228', '1/1/2010 3:24AM', 'Check out my soundcloud!!!!', 321, 543, 5),
(6, 'Tower of London', 3, 1, '1066', 'The white tower has a rectangular palm of 36m long by 32.5 wide, its height is 27.5m', 'Robert Vertue', 'St Katharine\'s & Wapping, London EC3N 4AB, United Kingdom', '../../assets/img/readMorePics/towerL1.jpg', '../../assets/img/readMorePics/towerL2.jpg', 'Tower of London 1', 'Tower of London 2', 'ltifidimfs', '1/10/2019 9:10PM', 'You\'re not a real tower of london superfan unless you figure out the acronym of my username', 'realToLsuperfan', '2/1/2020 7:00PM', 'Commenter above me is a fraud and a sham. Downvote him to hell!', 432, 245, 5),
(7, 'Eiffel Tower', 4, 1, 'January 28, 1887', '300 meters high, which is 984 feet (approximately 90 stories); it is 328 feet wide at its base.', 'Stephen Sauvestre', ' Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France', '../../assets/img/readMorePics/eiffelT1.jpg', '../../assets/img/readMorePics/eiffelT2.jpg', 'Eiffel Tower 1', 'Eiffel Tower 2', 'Username2', '1/1/2020 1:11PM', 'Hou la la! Bel endroit! très propre! reviendrait.', 'Username1', '2/4/2020 4:44AM<', 'Quelqu\'un prendra-t-il la peine de traduire cela? DÉCOUVRONS-LE!', 575, 586, 5),
(8, 'Louvre Museum', 4, 2, 'February 6, 1973', 'It has a height of about 22 meters (72ft) and at its base measures just over 35 meters (116ft)', 'Philippe Auguste', 'Rue de Rivoli, 75001 Paris, France', '../../assets/img/readMorePics/louvreM1.jpg', '../../assets/img/readMorePics/louvreM2.jpg', 'Louvre Museum 1', 'Louvre Museum 2', 'LeLoremIspumExperte', '2/4/2020 1:23PM', 'Lorem Ipsum est simplement un texte factice de l\'industrie de l\'impression et de la composition.', 'StevenTrevor', '2/1/2020 5:20PM', 'J\'ai vu cet endroit dans une femme merveilleuse et j\'ai pensé que cet endroit avait l\'air plutôt dope', 999, 5578, 5),
(9, 'Mount Fuji', 5, 5, 'N/A', '78 miles (125 km) in circumference and has a diameter of some 25 to 30 miles (40 to 50 km)', 'Tokugawa Ieyasu', 'Chūbu region, Honshu, Japan', '../../assets/img/readMorePics/fuji1.jpg', '../../assets/img/readMorePics/fuji2.jpg', 'Mount Fuji 1', 'Mount Fuji 2', 'fromthefuture', '2/22/2022 2:22PM', 'Wow!', 'oklahomaguy', '1/12/2020 12:00PM', 'pretty cash money if you ask me', 2435, 346, 5),
(10, 'Imperial Tokyo', 5, 4, '1890', '115 hectares (280 acres) in size and encircled by moats', '???', '1 Chome-1-1 Uchisaiwaichō, Chiyoda City, Tokyo 100-8558, Japan', '../../assets/img/readMorePics/imperialT1.jpg', '../../assets/img/readMorePics/imperialT2.jpg', 'Imperial Tokyo 1', 'Imperial Tokyo 2', 'Klark Cent', '1/11/2019 11:09PM', 'Lovely place.', 'Wruce Bayne', '2/1/2020 3:14PM', 'Bad place. Bad you.', 2435, 999, 5),
(11, 'Great Wall of China', 6, 4, '7th Century BC - 1878', 'Height: 16-26 feet (5-8m). Width: 20 feet at bottom, 16 feet at top (6 - 5m). Length: 3,890 miles (6,259 km) of wall; 5,500 miles (8,851 km) including other types of barriers.', 'Qin Shi Huang', 'Huairou, China', '../../assets/img/readMorePics/greatWoC1.jpg', '../../assets/img/readMorePics/greatWoC2.jpg', 'Great Wall of China 1', 'Great Wall of China 2', 'osdkaodasd', '1/20/2020 1:13PM', 'Beautiful.', 'Username3r23232', '2/1/2020 7:00PM', 'Meh. it was alright', 1234, 6354, 5),
(12, 'Terracotta Army', 6, 2, '246 BC to 208 BC', '5 feet 11 inches to 6 foot 7 inches.', 'Zhao Kangmin', 'Shaanxi province, China', '../../assets/img/readMorePics/terracotta1.jpg', '../../assets/img/readMorePics/terracotta2.jpg', 'CN Tower 1', 'CN Tower 2', 'curiousgeorge', '2/3/2020 4:05PM', 'I wonder who built these, and why.', 'mango-man', '2/12/2020 7:00PM', 'SOOOOOO COOOOOOOL', 324, 2435, 5),
(13, 'Great Barrier Reef', 7, 5, '40,000 years (First encounter with humans)', '2,900 individual reefs and 900 islands stretching for over 2,300 kilometres over an area of approximately 344,400 square kilometres.', 'Captain James Cook', 'Off the east coast of the Queensland mainland, Australia', '../../assets/img/readMorePics/reef1.jpg', '../../assets/img/readMorePics/reef2.jpg', '', 'Great Barrier Reef 2', 'ArthurCurry', '1/15/2020 11:05PM', 'Beautiful piece of nature that needs to be protected', 'DavidKane', '2/11/2020 7:00PM<', 'The oceans suck.', 4325, 111, 5),
(14, 'Uluru', 7, 5, '500 million years', '', 'Sir Henry Ayers', 'Geographically located near the centre of Australia', '../../assets/img/readMorePics/uluru1.jpg', '../../assets/img/readMorePics/uluru2.jpg', 'Uluru 1', 'Uluru 2', 'socool', '1/12/2020 11:05PM', 'so cool', 'HalJordan', '2/11/2020 8:00PM', 'Bet the view from space is rad.', 356, 827, 5),
(15, 'Milford Sound', 8, 5, 'N/A', 'Length = 15.1km, Width = 1.94km, Surface Area = 25 square km, Depth = 291m.', 'N/A', 'Fiordland, New Zealand', '../../assets/img/readMorePics/milford1.jpg', '../../assets/img/readMorePics/milford2.jpg', 'Milford Sound 1', 'Milford Sound 2', 'F!Byleth', '2/6/2020 7:05PM', 'Beautiful place, in beautiful country.', 'BLDimitri', '2/1/2020 7:00PM', 'Very disappointing place. I was trapped as a tourist, but I will have my revenge.', 8643, 4321, 5),
(16, 'Mount Cook', 8, 5, 'N/A', 'Elevation = 3,724m, Prominence = 3,724m, Isolation = 3,140km.', 'N/A', 'Canterbury, New Zealand', '../../assets/img/readMorePics/cook1.jpg', '../../assets/img/readMorePics/cook2.jpg', 'Mount Cook 1', 'Mount Cook 2', 'ClaudeGD', '2/6/2020 7:05PM', 'Wow! Can\'t wait to fly over this place.', 'EdelguardCF', '2/1/2020 7:00PM', 'Great place, beautiful crest and plenty of stones.', 234, 2345, 5),
(17, 'Kruger National Park', 9, 6, '31 May 1926', 'Area = 19,485 km2.', 'South African National Parks', 'Limpopo & Mpumalanga, South Africa', '../../assets/img/readMorePics/kruger1.jpg', '../../assets/img/readMorePics/kruger2.jpg', 'Kruger National Park 1', 'Kruger National Park 2', 'POGGERS', '2/6/2020 7:05PM', 'Wow! Great place! very neat! would come again.', 'OmegaLUL', '2/1/2020 7:00PM', 'Very hot. Hopefully next time, it is warmer.', 111, 4746, 5),
(18, 'Cape of Good Hope', 9, 6, 'N/A', '7,750 hectares.', 'N/A', 'Cape Peninsula, South Africa', '../../assets/img/readMorePics/cape1.jpg', '../../assets/img/readMorePics/cape2.jpg', 'Cape of Good Hope 1', 'Cape of Good Hope 2', 'Cyberpunk7777', '2/6/2020 7:05PM', 'Wow! Great place! I hope the setting is here.', 'Pepega', '2/1/2020 7:00PM', 'Very beautiful, I hope I see it on mars.', 222, 1342, 5),
(20, 'Zuma Rock', 10, 5, 'N/A', 'Elevation = 1,125m, Prominence = 725m.', 'N/A', 'Niger State, Nigeria', '../../assets/img/readMorePics/zuma1.jpg', '../../assets/img/readMorePics/zuma2.jpg', 'Zuma Rock 1', 'Zuma Rock 2', 'BibleThump', '2/6/2020 7:05PM', 'Wow! I saw Kobe here and he said it was a great place.', 'Kobe4Smash', '2/1/2020 7:00PM', 'Decent place, I\'d give it 5/7. NINTENDO PLS.', 342, 7654, 5),
(21, 'In N Out', 1, 2, '2020', 'sick', 'me', 'somewhere in the US', '../../assets/img/readMorePics/ino.jpg', '../../assets/img/readMorePics/ino.jpg', 'ino', 'ino', 'asdsdas', '1/11/2020 1:13PM', 'gfdsjk', 'fgds', '1/11/2020 1:13PM', 'jhgfds', 678, 5673, 5),
(22, 'Victoria Street Injection Site', 2, 4, '1997', '100m', 'The Mayor', 'Toronto Victoria Street', '../../assets/img/readMorePics/vsis.jpg', '../../assets/img/readMorePics/vsis.jpg', 'vsis', 'vsis', 'df', '1/11/2020 1:13PM', 'sdafsadf', 'dsfsdf', '1/11/2020 1:13PM', 'sdfsdfsd', 99, 1433, 5),
(23, 'Big Ben', 3, 1, '1800', 'Tall', 'Ben', 'London', '../../assets/img/readMorePics/bigB.jpg\r\n', '../../assets/img/readMorePics/bigB.jpg\r\n', 'Big Ben', 'Big Ben', 'fgdsa', '1/11/2020 1:13PM', 'DFSA', 'FDSA', '1/11/2020 1:13PM', 'gfdfsgfg', 100, 9999, 5),
(24, 'Notre Dame', 4, 4, '1700', 'Big', 'Notre Dame themselves', 'France', '../../assets/img/readMorePics/notre.jpg\r\n', '../../assets/img/readMorePics/notre.jpg\r\n', 'Notre', 'Dame', 'afdb', '1/11/2020 1:13PM', 'qwdasff', 'dfewqfew', '1/11/2020 1:13PM', 'asdasdsa', 200, 3563, 5),
(25, 'Akihabara', 5, 6, '1990', 'Kinda like a block', 'Aki themselves', 'Japan', '../../assets/img/readMorePics/aki.jpg\r\n', '../../assets/img/readMorePics/aki.jpg\r\n', 'Aki', 'Aki', 'Ryuji', '', 'For real?!', 'sadfgh', '1/11/2020 1:13PM', 'asdfghjk', 12, 1345, 5),
(26, 'Summer Palace', 6, 4, 'long time ago', 'pretty darn palace sized', 'sommmor', 'China', '../../assets/img/readMorePics/summerp.jpg\r\n', '../../assets/img/readMorePics/summerp.jpg\r\n', 'Summer Palace', 'Summer Palace', 'dasfghjk', '1/11/2020 1:13PM', 'sadfghj', 'esrdtfhjk', '1/11/2020 1:13PM', 'sdafghj', 0, 1, 5),
(27, 'Sydney Harbour Bridge', 7, 3, 'within the last 100 years', 'long enough to cross the harbour', 'Sydney themselves', 'Sydney', '../../assets/img/readMorePics/sydneyB.jpg\r\n', '../../assets/img/readMorePics/sydneyB.jpg\r\n', 'asdfghjk', 'asdfgsaddd', 'asdfgbhjgfdsa', '1/11/2020 1:13PM', 'sdafghfd gfdss', 'dfrghjgfd', '1/11/2020 1:13PM', 'sdafghjkliyu7t6yrtgfvcxfdrtg fvgthryjghftr', 0, 1, 5),
(28, 'Waitomo', 8, 5, 'Old', 'cave sized', 'Wai?', 'NZ', '../../assets/img/readMorePics/waitomo.jpg\r\n', '../../assets/img/readMorePics/waitomo.jpg\r\n', 'Waitomo', 'Waitomo', 'sdafgh', '1/11/2020 1:13PM', 'asdfgbn', 'sadfg', '1/11/2020 1:13PM', 'sdafgn', 0, 1, 5),
(29, 'Robben Island', 9, 6, 'dont know', 'Island sized', 'Shockingly, not Robben', 'South area of Africa', '../../assets/img/readMorePics/robben.jpg', '../../assets/img/readMorePics/robben.jpg', 'dasfgn', 'dsafgh', 'asdfgn', '1/11/2020 1:13PM', 'sdafghb', 'dsfb', '1/11/2020 1:13PM', 'fdsb', 0, 1, 5),
(30, 'Olumo', 10, 5, 'very very very old', 'rock sized', 'Olumo, maybe', 'Nigeria', '../../assets/img/readMorePics/olumo.jpg\r\n', '../../assets/img/readMorePics/olumo.jpg', 'sdafg', 'asdfghj', 'dsafb', '1/11/2020 1:13PM', 'asdfgh', 'dsfghj', '1/11/2020 1:13PM', 'dsfghj', 0, 1, 5);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_attract_type`
--

CREATE TABLE `tbl_attract_type` (
  `type_id` mediumint(9) NOT NULL,
  `type_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_attract_type`
--

INSERT INTO `tbl_attract_type` (`type_id`, `type_name`) VALUES
(1, 'tower'),
(2, 'musuem'),
(3, 'building'),
(4, 'ancient buildings'),
(5, 'nature sites'),
(6, 'National parks');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_continent`
--

CREATE TABLE `tbl_continent` (
  `continent_id` mediumint(9) NOT NULL,
  `continent` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_continent`
--

INSERT INTO `tbl_continent` (`continent_id`, `continent`) VALUES
(1, 'North America'),
(2, 'Europe'),
(3, 'Asia'),
(4, 'Australia'),
(5, 'Africa'),
(10, 'SOUTH America'),
(11, 'South America');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_country`
--

CREATE TABLE `tbl_country` (
  `country_id` int(11) NOT NULL,
  `continent_id` int(11) NOT NULL,
  `country` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_country`
--

INSERT INTO `tbl_country` (`country_id`, `continent_id`, `country`) VALUES
(1, 1, 'USA'),
(2, 1, 'Canada'),
(3, 2, 'United Kingdom'),
(4, 2, 'France'),
(5, 3, 'Japan'),
(6, 3, 'China'),
(7, 4, 'Australia'),
(8, 4, 'New Zealand'),
(9, 5, 'South Africa'),
(10, 5, 'Nigeria');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE `tbl_users` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `telno` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `admin` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`username`, `password`, `fname`, `lname`, `address`, `telno`, `email`, `admin`) VALUES
('cseow', 'password', 'Christopher', 'Seow', 'Ahhhhhh', '9999999', 'cseow@ryerson.ca', 1),
('admin', 'root', 'admin', 'admin', 'admin', '999999', 'admin', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_attractions`
--
ALTER TABLE `tbl_attractions`
  ADD PRIMARY KEY (`attract_id`);

--
-- Indexes for table `tbl_attract_type`
--
ALTER TABLE `tbl_attract_type`
  ADD PRIMARY KEY (`type_id`);

--
-- Indexes for table `tbl_continent`
--
ALTER TABLE `tbl_continent`
  ADD PRIMARY KEY (`continent_id`);

--
-- Indexes for table `tbl_country`
--
ALTER TABLE `tbl_country`
  ADD PRIMARY KEY (`country_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_attractions`
--
ALTER TABLE `tbl_attractions`
  MODIFY `attract_id` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `tbl_attract_type`
--
ALTER TABLE `tbl_attract_type`
  MODIFY `type_id` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_continent`
--
ALTER TABLE `tbl_continent`
  MODIFY `continent_id` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `tbl_country`
--
ALTER TABLE `tbl_country`
  MODIFY `country_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
