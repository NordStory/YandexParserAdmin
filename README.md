# Yandex Parser Admin

## Описание проекта

**Yandex Admin Employee Parser** — это расширение для Chrome, предназначенное для парсинга данных о сотрудниках с панели администратора Yandex (admin.yandex.ru). Расширение собирает информацию о пользователях организации, включая логин, ФИО и должность, и автоматически преобразует её в таблицу. Полученная таблица отображается в интерфейсе расширения и автоматически копируется в буфер обмена для удобного использования в других системах компании, например, для аудита доступа и синхронизации с другими корпоративными сервисами.

## Основные возможности

- **Парсинг данных сотрудников** с панели администратора Yandex, включая логин, ФИО и должность.
- **Форматирование данных** в удобную таблицу для последующего анализа.
- **Автоматическое копирование таблицы в буфер обмена**, что позволяет использовать данные сразу после их получения.
- **Интуитивный интерфейс** в popup для отображения и быстрого копирования данных.

## Установка

1. Скачайте или клонируйте репозиторий:

   ```bash
   git clone https://github.com/your-username/YandexAdminEmployeeParser.git
   ```

2. Перейдите в [chrome://extensions/](chrome://extensions/) в Chrome.

3. Включите **Режим разработчика** (Developer mode).

4. Нажмите **Загрузить распакованное** и выберите папку с проектом.

5. После успешной загрузки иконка расширения появится на панели инструментов браузера.

## Использование

1. Откройте [admin.yandex.ru/users](https://admin.yandex.ru/users).
2. Нажмите на иконку расширения на панели браузера.
3. В popup расширения появится таблица со списком сотрудников, содержащая:
   - **Логин**
   - **ФИО**
   - **Должность**
4. Таблица автоматически копируется в буфер обмена, и вы сможете сразу вставить её в нужное приложение (например, в таблицу или текстовый документ) для дальнейшей работы.

## Пример использования

После запуска расширения вы получите данные в следующем формате, готовом для вставки:

```
Логин        ФИО               Должность
user1        Иванов Иван       Менеджер
user2        Петрова Анна      Бухгалтер
user3        Сидоров Алексей   Разработчик
```

## Важные замечания

- Данное расширение предназначено для использования в рамках организации. Используйте его только в соответствии с корпоративными политиками и не передавайте полученные данные третьим лицам.
- Обработка данных происходит исключительно на локальном устройстве, и информация о сотрудниках не передается сторонним сервисам.

## Возможности для развития

- **Расширение функционала копирования**, включая экспорт данных в различные форматы (CSV, Excel).

## Контрибьюция

Приветствуются ваши предложения по улучшению! Открывайте задачи (issues) или отправляйте запросы на изменения (pull requests).

## Лицензия

Этот проект лицензируется на условиях MIT License — см. файл [LICENSE](LICENSE) для подробностей.