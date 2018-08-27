/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : epet

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-08-27 19:58:16
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `size` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `sale` decimal(10,2) NOT NULL,
  `color` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `type` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '外销Squ出口品牌 发声补丁破靴 10cm', 'img/goods1.png', null, '4.80', '0.96', null, null, 'sale');
INSERT INTO `goods` VALUES ('2', '宠友友 口哨响片二合一训犬器 咖啡色 ', 'img/goods2.png', null, '49.00', '14.70', null, null, 'sale');
INSERT INTO `goods` VALUES ('3', '瑞丝 波纹塑柄宠物钢丝刷 M号', 'img/goods3.png', null, '18.00', '3.60', null, null, 'sale');
INSERT INTO `goods` VALUES ('4', '瑞丝 犬猫用塑柄直排梳 45针2.7*20.5cm', 'img/goods4.png', null, '30.00', '6.00', null, null, 'sale');
INSERT INTO `goods` VALUES ('5', '加拿大原装进口 原始猎食渴望 全肉配方全猫粮 1.8kg', 'img/maoliang1.png', null, '285.00', '0.00', null, null, 'zhuliangjinkou');
INSERT INTO `goods` VALUES ('6', '加拿大原装进口 原始猎食渴望 全肉配方全猫粮 1.8kg', 'img/maoliang1.png', null, '285.00', '0.00', null, null, 'zhuliangjinkou');
INSERT INTO `goods` VALUES ('7', '加拿大原装进口 原始猎食渴望 全肉配方全猫粮 1.8kg', 'img/maoliang1.png', null, '285.00', '0.00', null, null, 'zhuliangjinkou');
INSERT INTO `goods` VALUES ('8', '加拿大原装进口 原始猎食渴望 全肉配方全猫粮 1.8kg', 'img/maoliang1.png', null, '285.00', '0.00', null, null, 'zhuliangjinkou');
INSERT INTO `goods` VALUES ('9', '麦富迪', 'img/myfudi.jpg', null, '130.80', '109.00', null, '天然食材 均衡搭配', 'remenmaoliang');
INSERT INTO `goods` VALUES ('10', '发育宝安全粮', 'img/safefood.jpg', null, '78.90', '58.00', null, '营养性价比高', 'remenmaoliang');
INSERT INTO `goods` VALUES ('11', '发育宝安全粮', 'img/safefood.jpg', null, '78.90', '58.00', null, '营养性价比高', 'remenmaoliang');
INSERT INTO `goods` VALUES ('12', '海瑞特 鲜肉粮', 'img/hairuite.jpg', null, '99.80', '78.00', null, '鲜肉定向酶解 更易吸收', 'remenmaoliang');
INSERT INTO `goods` VALUES ('13', '海瑞特 鲜肉粮', 'img/hairuite.jpg', null, '99.80', '78.00', null, '鲜肉定向酶解 更易吸收', 'remenmaoliang');
INSERT INTO `goods` VALUES ('14', '海瑞特 鲜肉粮', 'img/hairuite.jpg', null, '99.80', '78.00', null, '鲜肉定向酶解 更易吸收', 'remenmaoliang');
INSERT INTO `goods` VALUES ('15', '加拿大原装进口 原始猎食渴望 全肉配方全猫粮 1.8kg', 'img/maoliang1.png', null, '285.00', '0.00', null, null, 'zhuliangjinkou');
INSERT INTO `goods` VALUES ('16', '加拿大原装进口 原始猎食渴望 全肉配方全猫粮 1.8kg', 'img/maoliang1.png', null, '285.00', '0.00', null, null, 'zhuliangjinkou');
INSERT INTO `goods` VALUES ('17', '加拿大原装进口 原始猎食渴望 全肉配方全猫粮 1.8kg', 'img/maoliang1.png', null, '285.00', '0.00', null, null, 'zhuliangjinkou');
INSERT INTO `goods` VALUES ('18', '加拿大原装进口 原始猎食渴望 全肉配方全猫粮 1.8kg', 'img/maoliang1.png', null, '285.00', '0.00', null, null, 'zhuliangjinkou');

-- ----------------------------
-- Table structure for promotion
-- ----------------------------
DROP TABLE IF EXISTS `promotion`;
CREATE TABLE `promotion` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `rushtime` datetime NOT NULL,
  `off` varchar(255) NOT NULL,
  `good_id` int(10) NOT NULL,
  `amount` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of promotion
-- ----------------------------
INSERT INTO `promotion` VALUES ('1', '2018-08-24 10:00:00', '16.00', '1', '0');
INSERT INTO `promotion` VALUES ('2', '2018-08-24 10:00:00', '26:00', '2', '0');
INSERT INTO `promotion` VALUES ('3', '2018-08-24 10:00:00', '一折起', '3', '0');
INSERT INTO `promotion` VALUES ('4', '2018-08-24 10:00:00', '36.00', '4', '0');
INSERT INTO `promotion` VALUES ('5', '2018-08-24 12:00:00', '16.00', '4', '0');
INSERT INTO `promotion` VALUES ('6', '2018-08-24 12:00:00', '36.00', '3', '0');
INSERT INTO `promotion` VALUES ('7', '2018-08-24 12:00:00', '36.00', '2', '0');
INSERT INTO `promotion` VALUES ('8', '2018-08-24 12:00:00', '36.00', '1', '0');

-- ----------------------------
-- Table structure for threetype
-- ----------------------------
DROP TABLE IF EXISTS `threetype`;
CREATE TABLE `threetype` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `threetype_name` varchar(255) NOT NULL,
  `twotype` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of threetype
-- ----------------------------

-- ----------------------------
-- Table structure for twotype
-- ----------------------------
DROP TABLE IF EXISTS `twotype`;
CREATE TABLE `twotype` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  `onetype` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of twotype
-- ----------------------------

-- ----------------------------
-- Table structure for type
-- ----------------------------
DROP TABLE IF EXISTS `type`;
CREATE TABLE `type` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of type
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `regtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=62 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'yiyii', '13456788900', '11111111', '2018-08-27 08:43:58');
INSERT INTO `user` VALUES ('2', 'ererr', '14678900987', '22222222', '2018-08-27 08:44:01');
INSERT INTO `user` VALUES ('61', 'sisisi', '14324554543', '4444444444444', '2018-08-27 13:48:34');

-- ----------------------------
-- View structure for salegoods
-- ----------------------------
DROP VIEW IF EXISTS `salegoods`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `salegoods` AS select `goods`.`name` AS `name`,`goods`.`price` AS `price`,`goods`.`sale` AS `sale`,`goods`.`imgurl` AS `imgurl`,`promotion`.`id` AS `id`,`promotion`.`rushtime` AS `rushtime`,`promotion`.`off` AS `off`,`promotion`.`good_id` AS `good_id`,`promotion`.`amount` AS `amount` from (`goods` join `promotion`) where (`goods`.`id` = `promotion`.`good_id`) ;
SET FOREIGN_KEY_CHECKS=1;
