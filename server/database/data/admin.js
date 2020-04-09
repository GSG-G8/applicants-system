const Admin = require('../models/admin');

module.exports = async () => {
  const admin = [
    {
      email: 'a.ahmad.salah@gmail.com',
      password: '$2b$10$xlhF9buzqfqLR/sEI/jrGu.Vm2K6GgbSri09PW8qM.vLkl2OC1fsC',
      userName: 'ahmad salah',
    },
    {
      email: 'a.ali.salah@gmail.com',
      password: '$2b$10$xlhF9buzqfqLR/sEI/jrGu.Vm2K6GgbSri09PW8qM.vLkl2OC1fsC',
      userName: 'ali',
    },
  ];
  await Admin.create(admin);
};
