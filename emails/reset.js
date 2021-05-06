const keys = require('../keys');

module.exports = function (email, token) {
  return {
    to: email,
    from: 'Магазин курсов by Vitaly <blabla@gmail.com>',
    subject: 'Восстановление доступа',
    html: `
  <h1>Вы забыли пароль?</h1>
  <p>Если нет, то проигнорируйте данное писмьо</p>
  <p>Иначе нажмите на ссылку ниже</p>
  <p><a href="${keys.BASE_URL}auth/password/${token}">Восстановить доступ</a></p>
  <hr/>
  <a href='${keys.BASE_URL}'>Магазин</a>
  `,
  };
};
