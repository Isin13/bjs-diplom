'use strict';

// Создание объекта класса UserForm
const userForm = new UserForm();

// Функция для выполнения запроса на сервер при попытке авторизации
const loginFormCallback = function(data) {
  // Вызов функции авторизации пользователя с передачей данных из формы
  ApiConnector.login(data, function(response) {
    // Вывод объекта, полученного от сервера, в консоль
    console.log(response);

    // Проверка успешности запроса
    if (response.success) {
      // Обновление страницы
      location.reload();
    } else {
      // Вывод ошибки в окно для ошибок
      userForm.setLoginErrorMessage(response.error);
    }
  });
};

// Присвоение значения свойству loginFormCallback
userForm.loginFormCallback = loginFormCallback;
