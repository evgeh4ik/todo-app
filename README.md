# Todo App Backend

Простое бэкенд-приложение для управления списком задач (todo list), реализованное на Node.js и Express.

## Функциональность

Приложение предоставляет REST API для выполнения основных операций CRUD (создание, чтение, обновление, удаление) над задачами.

### Операции API

- **Получение всех задач**
- **Добавление новой задачи**
- **Получение задачи по ID**
- **Обновление задачи**
- **Удаление задачи**

## Технологии

- Node.js
- Express

## Установка

Для установки и запуска приложения выполните следующие шаги:

1. Клонируйте репозиторий:
   
   ```git clone <url-репозитория>```
   ```cd todo-app-backend```

Установите зависимости:

```npm install```
Запустите сервер:

```node server.js```
API Endpoints

GET /tasks
Возвращает список всех задач.

Пример запроса:

```GET http://localhost:3000/tasks```

POST /tasks
Создает новую задачу.

Тело запроса:

{
  "title": "Название задачи"
}
Пример запроса:


```POST http://localhost:3000/tasks```

GET /tasks/:id
Возвращает задачу по указанному ID.

Пример запроса:


```GET http://localhost:3000/tasks/123```


PUT /tasks/:id
Обновляет задачу по указанному ID.

Тело запроса:

json
Copy code
{
  "title": "Обновленное название задачи"
}
Пример запроса:


```PUT http://localhost:3000/tasks/123```

DELETE /tasks/:id
Удаляет задачу по указанному ID.

Пример запроса:

```DELETE http://localhost:3000/tasks/123```
