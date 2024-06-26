
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
