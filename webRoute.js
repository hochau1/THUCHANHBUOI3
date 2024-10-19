// routes/webRoute.js
const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/HomeController');
const AboutController = require('../controllers/AboutController');
const ContactController = require('../controllers/ContactController');
const UserController = require('../controllers/UserController');

// Route cho trang chủ
router.get('/', HomeController.index);

// Route cho trang About
router.get('/about', AboutController.index);

// Route cho trang Contact
router.get('/contact', ContactController.index);

// Route cho trang quản lý Users
router.get('/users', UserController.index);  // Hiển thị danh sách người dùng
router.get('/users/add', UserController.add);  // Hiển thị form thêm người dùng
router.post('/users/add', UserController.create);  // Xử lý thêm người dùng mới
router.get('/users/edit/:id', UserController.edit);  // Hiển thị form sửa người dùng
router.post('/users/edit/:id', UserController.update);  // Xử lý cập nhật người dùng
router.get('/users/delete/:id', UserController.delete);  // Xóa người dùng

module.exports = router;
