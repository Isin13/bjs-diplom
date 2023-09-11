class LogoutButton {
  constructor() {
    this.action = () => {
      logoutRequest((response) => {
        if (response.status === 'success') {
          location.reload();
        }
      });
    };
  }
}

function logoutRequest(callback) {
  const response = {
    status: 'success',
    message: 'Logout successful'
  };
  callback(response);
}

const logoutButton = new LogoutButton();
console.log(logoutButton.action); 

class RatesBoard {
  constructor() {
    this.tableElement = document.getElementById('rates-table');
  }

  clearTable() {
    this.tableElement.innerHTML = '';
  }

  fillTable(data) {
    for (const currency in data) {
      const rate = data[currency];
      const row = document.createElement('tr');
      const currencyCell = document.createElement('td');
      currencyCell.textContent = currency;
      const rateCell = document.createElement('td');
      rateCell.textContent = rate;
      row.appendChild(currencyCell);
      row.appendChild(rateCell);
      this.tableElement.appendChild(row);
    }
  }
}

function getRates() {
  const data = {
    USD: 74.99,
    EUR: 88.12,
    GBP: 103.53
  };
  ratesBoard.clearTable();
  ratesBoard.fillTable(data);
}

const ratesBoard = new RatesBoard();
getRates(); // Получение текущих валют

setInterval(getRates, 60000); // Выполнение каждую минуту

class MoneyManager {
  constructor() {
    this.addMoneyCallback = (data) => {
      addMoneyRequest(data, (response) => {
        if (response.status === 'success') {
          profile.showProfile(response.data);
          message.setMessage('Balance added successfully', 'success');
        } else {
          message.setMessage(response.message, 'error');
        }
      });
    };

    this.conversionMoneyCallback = (data) => {
      conversionMoneyRequest(data, (response) => {
        if (response.status === 'success') {
          profile.showProfile(response.data);
          message.setMessage('Money converted successfully', 'success');
        } else {
          message.setMessage(response.message, 'error');
        }
      });
    };

    this.sendMoneyCallback = (data) => {
      sendMoneyRequest(data, (response) => {
        if (response.status === 'success') {
          profile.showProfile(response.data);
          message.setMessage('Money transferred successfully', 'success');
        } else {
          message.setMessage(response.message, 'error');
        }
      });
    };
  }
}

function addMoneyRequest(data, callback) {
  // Ваш код для выполнения запроса на пополнение баланса
  // ...
  // Если запрос выполнился успешно, вызывайте callback с объектом response
  const response = {
    status: 'success',
    message: 'Balance added successfully',
    data: {
      balance: data.amount
    }
  };
  callback(response);
}

function conversionMoneyRequest(data, callback) {
  // Ваш код для выполнения запроса на конвертацию валюты
  // ...
  // Если запрос выполнился успешно, вызывайте callback с объектом response
  const response = {
    status: 'success',
    message: 'Money converted successfully',
    data: {
      balance: data.convertedAmount
    }
  };
  callback(response);
}

function sendMoneyRequest(data, callback) {
  const response = {
    status: 'success',
    message: 'Money transferred successfully',
    data: {
      balance: data.balance
    }
  };
  callback(response);
}

const moneyManager = new MoneyManager();
console.log(moneyManager.addMoneyCallback); 
console.log(moneyManager.conversionMoneyCallback); 
console.log(moneyManager.sendMoneyCallback); 

class FavoritesWidget {
  constructor() {
    this.addUserCallback = (user) => {
      addUserToFavoritesRequest(user, (response) => {
        if (response.status === 'success') {
          this.getFavorites();
          message.setMessage('User added to favorites successfully', 'success');
        } else {
          message.setMessage(response.message, 'error');
        }
      });
    };

    this.removeUserCallback = (user) => {
      removeUserFromFavoritesRequest(user, (response) => {
        if (response.status === 'success') {
          this.getFavorites();
          message.setMessage('User removed from favorites successfully', 'success');
        } else {
          message.setMessage(response.message, 'error');
        }
      });
    };
  }

  getFavorites() {
    getFavoritesRequest((response) => {
      if (response.status === 'success') {
        this.clearTable();
        this.fillTable(response.data);
        this.updateUsersList(response.data);
      }
    });
  }

  clearTable() {
    // Очистка списка избранного
  }

  fillTable(favorites) {
    // Отрисовка списка избранного
  }

  updateUsersList(favorites) {
    // Обновление выпадающего списка для перевода денег
  }
}

function getFavoritesRequest(callback) {
  // Ваш код для выполнения запроса на получение списка избранного
  // ...
  // Если запрос выполнился успешно, вызывайте callback с объектом response
  const response = {
    status: 'success',
    data: {
      favorites: []
    }
  };
  callback(response);
}

function addUserToFavoritesRequest(user, callback) {
  // Ваш код для выполнения запроса на добавление пользователя в избранное
  // ...
  // Если запрос выполнился успешно, вызывайте callback с объектом response
  const response = {
    status: 'success',
    message: 'User added to favorites successfully',
    data: {
      favorites: []
    }
  };
  callback(response);
}

function removeUserFromFavoritesRequest(user, callback) {

  const response = {
    status: 'success',
    message: 'User removed from favorites successfully',
    data: {
      favorites: []
    }
  };
  callback(response);
}

const favoritesWidget = new FavoritesWidget();
console.log(favoritesWidget.addUserCallback); // Выведет: (user) => { ... }
console.log(favoritesWidget.removeUserCallback); // Выведет: (user) => { ... }
favoritesWidget.getFavorites(); // Запрос начального списка избранного