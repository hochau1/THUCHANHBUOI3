// controllers/UserController.js

let users = [
    { id: 1, username: 'john_doe', fullname: 'John Doe', address: '123 Street', email: 'john@example.com' },
    { id: 2, username: 'jane_doe', fullname: 'Jane Doe', address: '456 Street', email: 'jane@example.com' }
  ];
  
  // Hiển thị danh sách người dùng
  exports.index = (req, res) => {
    res.render('users', {
      title: 'Users List',
      users: users
    });
  };
  
  // Thêm người dùng mới
  exports.add = (req, res) => {
    res.render('addUser', { title: 'Add New User' });
  };
  
  // Xử lý thêm người dùng mới
  exports.create = (req, res) => {
    const { username, fullname, address, email } = req.body;
    const newUser = { id: users.length + 1, username, fullname, address, email };
    users.push(newUser);
    res.redirect('/users');
  };
  
  // Hiển thị form sửa người dùng
  exports.edit = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
      res.render('editUser', { title: 'Edit User', user });
    } else {
      res.status(404).send('User not found');
    }
  };
  
  // Xử lý cập nhật người dùng
  exports.update = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
      user.username = req.body.username;
      user.fullname = req.body.fullname;
      user.address = req.body.address;
      user.email = req.body.email;
      res.redirect('/users');
    } else {
      res.status(404).send('User not found');
    }
  };
  
  // Xóa người dùng
  exports.delete = (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.redirect('/users');
  };
  