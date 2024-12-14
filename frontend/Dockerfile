# Dockerfile для Next.js с Yarn
FROM node:20-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и yarn.lock
COPY package.json yarn.lock ./

# Устанавливаем зависимости с использованием Yarn
RUN yarn install

# Копируем исходный код
COPY . .

# Билдим проект с помощью Yarn
RUN yarn build

# Экспонируем порт для Next.js
EXPOSE 3000

# Запускаем сервер с помощью Yarn
CMD ["yarn", "start"]
