const { body } = require('express-validator');
const user = require('../models/user');

const User = require('../models/user');
exports.registerValidators = [
  body('email')
    .isEmail()
    .withMessage('Введите корректный email')
    .custom(async (value, { req }) => {
      try {
        user = await User.findOne({ email: value });
        if (user) {
          return Promise.reject('Такой email уже используется');
        }
      } catch (error) {
        console.log(error);
      }
    })
    .normalizeEmail(),
  body('password', 'Пароль должен быть мин 6 символов')
    .isLength({ min: 6, max: 56 })
    .isAlphanumeric(),
  body('confirm')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Пароли должны совпадать');
      }
      return true;
    })
    .trim(),
  body('name')
    .isLength({ min: 2 })
    .withMessage('Имя должно иметь минимум 2 символа')
    .trim(),
];
exports.courseValidators = [
  body('title')
    .isLength({ min: 3 })
    .withMessage('Минимальная длина 3 символа')
    .trim(),
  body('price').isNumeric().withMessage('Введите корректную цену'),
  body('img', 'Введите корректный url картинки').isURL(),
];
