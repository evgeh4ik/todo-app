
# Todo App Backend

Простое бэкенд-приложение для управления списком задач (todo list), реализованное на Node.js и Express.

## Функциональность

Приложение предоставляет REST API для выполнения основных операций CRUD (создание, чтение, обновление, удаление) над задачами.

### Операции API

- **Получение всех задач**: `GET /tasks`
- **Добавление новой задачи**: `POST /tasks`
- **Получение задачи по ID**: `GET /tasks/:id`
- **Обновление задачи**: `PUT /tasks/:id`
- **Удаление задачи**: `DELETE /tasks/:id`

## Технологии

- Node.js
- Express

## Установка

1. **Клонирование репозитория**
   ```
   git clone <url-репозитория>
   cd todo-app-backend
   ```

2. **Установка зависимостей**
   ```
   npm install
   ```

3. **Запуск сервера**
   ```
   node server.js
   ```

## API Endpoints

**Получение всех задач**
```
GET http://localhost:3000/tasks
```

**Добавление новой задачи**
```
POST http://localhost:3000/tasks
Content-Type: application/json

{
  "title": "Название задачи"
}
```

**Получение задачи по ID**
```
GET http://localhost:3000/tasks/123
```

**Обновление задачи**
```
PUT http://localhost:3000/tasks/123
Content-Type: application/json

{
  "title": "Обновленное название задачи"
}
```

**Удаление задачи**
```
DELETE http://localhost:3000/tasks/123
```
