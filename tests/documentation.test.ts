import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';
// Alternative import method:
// Use common Allure utilities for JavaScript integration from 'allure-js-commons' if 'allure-playwright' is not used
// import * as allure from 'allure-js-commons';

// Test #1

test('Должен отображаться логотип ТестОпс при посещении домашней страницы', async ({ page }) => {
  await allure.description('Проверяет, что логотип ТестОпс виден при посещении домашней страницы документации');
  await allure.epic('Документация ТестОпс');
  await allure.feature('Контент');
  await allure.story('Логотип');
  await allure.tags('Логотип', 'Домашняя страница', 'Интерфейс');

  await allure.step('Перейти на домашнюю страницу документации ТестОпс', async () => {
    await page.goto('https://docs.qameta.io/allure-testops/');
  });

  await allure.step('Проверить, что логотип ТестОпс виден', async () => {
    const logo = page.locator('img[alt="TestOps logo"]');
    await expect(logo).toBeVisible();
  });
});

// Test #2

test('Должен отображаться корректный заголовок на странице при посещении домашней страницы', async ({ page }) => {
  await allure.description('Проверяет, что заголовок на странице включает "О продукте" при посещении домашней страницы');
  await allure.epic('Документация ТестОпс');
  await allure.feature('Контент');
  await allure.story('Заголовок на странице');
  await allure.tags('Домашняя страница', 'Интерфейс');

  await allure.step('Перейти на домашнюю страницу документации ТестОпс', async () => {
    await page.goto('https://docs.qameta.io/allure-testops/');
  });

  await allure.step('Проверить, что заголовок на странице включает "О продукте"', async () => {
    await expect(page.locator('h1')).toContainText('Allure TestOps');
  });
});

// Test #3A - test uses 'allure.step' wrappers for steps

test('Должен отображаться корректный заголовок вкладки при посещении домашней страницы - с использованием обертки allure.step()', async ({ page }) => {
  await allure.description('Проверяет, что заголовок вкладки включает "ТестОпс" при посещении домашней страницы');
  await allure.epic('Документация ТестОпс');
  await allure.feature('Контент');
  await allure.story('Заголовок вкладки');
  await allure.tags('Домашняя страница', 'Интерфейс');

  await allure.step('Перейти на домашнюю страницу документации ТестОпс', async () => {
    await page.goto('https://docs.qameta.io/allure-testops/');
  });

  await allure.step('Проверить, что заголовок вкладки включает "ТестОпс"', async () => {
    await expect(page).toHaveTitle(/Allure TestOps/);
  });
});

// Test #3B - test uses 'test.step' wrappers for steps

test('Должен отображаться корректный заголовок вкладки при посещении домашней страницы - с использованием обертки test.step()', async ({ page }) => {
  await allure.description('Проверяет, что заголовок вкладки включает "ТестОпс" при посещении домашней страницы');
  await allure.epic('Документация ТестОпс');
  await allure.feature('Контент');
  await allure.story('Заголовок вкладки');
  await allure.tags('Домашняя страница', 'Интерфейс');

  await test.step('Перейти на домашнюю страницу документации ТестОпс', async () => {
    await page.goto('https://docs.qameta.io/allure-testops/');
  });

  await test.step('Проверить, что заголовок вкладки включает "ТестОпс"', async () => {
    await expect(page).toHaveTitle(/Allure TestOps/);
  });
});

// Test #3C - test has no 'test.step' or 'allure.step' wrappers for steps

test('Должен отображаться корректный заголовок вкладки при посещении домашней страницы - без использования обертки для шагов', async ({ page }) => {
  await allure.description('Проверяет, что заголовок вкладки включает "ТестОпс" при посещении домашней страницы');
  await allure.epic('Документация ТестОпс');
  await allure.feature('Контент');
  await allure.story('Заголовок вкладки');
  await allure.tags('Домашняя страница', 'Интерфейс');

  await page.goto('https://docs.qameta.io/allure-testops/');

  await expect(page).toHaveTitle(/Allure TestOps/);
});

// Test #4

test('Должен перейти на страницу "Информация о релизах ТестОпс" через боковую панель', async ({ page }) => {
  await allure.description('Проверяет, что пользователь может перейти на страницу "Информация о релизах ТестОпс" через боковую панель');
  await allure.epic('Документация ТестОпс');
  await allure.feature('Навигация');
  await allure.story('Боковая панель');
  await allure.tags('Боковая панель', 'Навигация', 'Интерфейс');

  await allure.step('Перейти на домашнюю страницу документации ТестОпс', async () => {
    await page.goto('https://docs.qameta.io/allure-testops/');
  });

  await allure.step('Нажать на ссылку "Информация о релизах" на боковой панели', async () => {
    await page.click('text=Release notes');
  });

  await allure.step('Проверить, что URL включает "release-notes"', async () => {
    await expect(page).toHaveURL(/.*release-notes/);
  });

  await allure.step('Проверить, что заголовок на странице "Информация о релизах ТестОпс"', async () => {
    await expect(page.locator('h1')).toContainText('Release Notes');
  });
});

// Test #5

test('Должен перейти на страницу "Часто задаваемые вопросы" через боковую панель', async ({ page }) => {
  await allure.description('Проверяет, что пользователь может перейти на страницу "Часто задаваемые вопросы" через боковую панель');
  await allure.epic('Документация ТестОпс');
  await allure.feature('Навигация');
  await allure.story('Боковая панель');
  await allure.tags('Боковая панель', 'Навигация', 'Интерфейс');

  await allure.step('Перейти на домашнюю страницу документации ТестОпс', async () => {
    await page.goto('https://docs.qameta.io/allure-testops/');
  });

  await allure.step('Нажать на ссылку "Часто задаваемые вопросы" на боковой панели', async () => {
    await page.click('text=FAQ');
  });

  await allure.step('Проверить, что URL включает "faq"', async () => {
    await expect(page).toHaveURL(/.*faq/);
  });

  await allure.step('Проверить, что заголовок на странице "Часто задаваемые вопросы"', async () => {
    await expect(page.locator('h1')).toContainText('Frequently Asked Questions');
  });
});

// Test #6

test('Должен перейти на страницу "Архитектура ТестОпс" через боковую панель', async ({ page }) => {
  await allure.description('Проверяет, что пользователь может перейти на страницу "Архитектура ТестОпс" через боковую панель');
  await allure.epic('Документация ТестОпс');
  await allure.feature('Навигация');
  await allure.story('Боковая панель');
  await allure.tags('Боковая панель', 'Навигация', 'Интерфейс');

  await allure.step('Перейти на домашнюю страницу документации ТестОпс', async () => {
    await page.goto('https://docs.qameta.io/allure-testops/');
  });

  await allure.step('Нажать на ссылку "Архитектура" на боковой панели', async () => {
    await page.click('text=Architecture');
  });

  await allure.step('Проверить, что URL включает "architecture"', async () => {
    await expect(page).toHaveURL(/.*architecture/);
  });

  await allure.step('Проверить, что заголовок на странице "Архитектура ТестОпс"', async () => {
    await expect(page.locator('h1')).toContainText('Allure TestOps architecture');
  });
});

// Test #7

test.skip('Должен перейти на страницу "Возможности ТестОпс" через боковую панель (намеренно пропущенный)', async ({ page }) => {
  await allure.description('Проверяет, что пользователь может перейти на страницу "Возможности ТестОпс" через боковую панель');
  await allure.epic('Документация ТестОпс');
  await allure.feature('Навигация');
  await allure.story('Боковая панель');
  await allure.tags('Боковая панель', 'Навигация', 'Интерфейс');

  await allure.step('Перейти на домашнюю страницу документации ТестОпс', async () => {
    await page.goto('https://docs.qameta.io/allure-testops/');
  });

  await allure.step('Нажать на ссылку "Возможности" на боковой панели', async () => {
    await page.click('text=Features');
  });

  await allure.step('Проверить, что URL включает "features"', async () => {
    await expect(page).toHaveURL(/.*features/);
  });

  await allure.step('Проверить, что заголовок на странице "Возможности ТестОпс"', async () => {
    await expect(page.locator('h1')).toContainText('Allure TestOps features');
  });
});

// Test #8

test('Должен перейти на страницу "Основные разделы интерфейса ТестОпс" через боковую панель (намеренно неуспешный)', async ({ page }) => {
  await allure.description('Проверяет, что пользователь может перейти на страницу "Основные разделы интерфейса ТестОпс" через боковую панель');
  await allure.epic('Документация ТестОпс');
  await allure.feature('Навигация');
  await allure.story('Боковая панель');
  await allure.tags('Ошибка', 'Боковая панель', 'Навигация', 'Интерфейс');

  await allure.step('Перейти на домашнюю страницу документации ТестОпс', async () => {
    await page.goto('https://docs.qameta.io/allure-testops/');
  });

  await allure.step('Нажать на ссылку "Обзор" на боковой панели', async () => {
    await page.click('text=Overview');
  });

  await allure.step('Проверить, что URL равен "https://qatools.ru/docs/overview/overview"', async () => {
    await expect(page).toHaveURL('https://intentionally-incorrect-url.com');
  });

  await allure.step('Проверить, что заголовок на странице "Основные разделы интерфейса ТестОпс"', async () => {
    await expect(page.locator('h1')).toContainText('Allure TestOps interface');
  });
});

// Test #9

test('Должны отображаться боковая панель и раздел "Начало работы" при посещении домашней страницы', async ({ page }) => {
  await allure.description('Проверяет, что боковая панель и раздел "Начало работы" видны на домашней странице');
  await allure.epic('Документация ТестОпс');
  await allure.feature('Навигация');
  await allure.story('Боковая панель');
  await allure.tags('Боковая панель', 'Навигация', 'Интерфейс');

  await allure.step('Перейти на домашнюю страницу документации ТестОпс', async () => {
    await page.goto('https://docs.qameta.io/allure-testops/');
  });

  await allure.step('Проверить, что боковая панель видна', async () => {
    await expect(page.locator('nav')).toBeVisible();
  });

  await allure.step('Проверить, что боковая панель содержит "Начало работы"', async () => {
    await expect(page.locator('nav')).toContainText('Getting started');
  });

  await allure.step('Проверить, что боковая панель содержит "Создайте проект"', async () => {
    await expect(page.locator('nav')).toContainText('Create a project');
  });

  await allure.step('Проверить, что боковая панель содержит "Запустите ручной тест"', async () => {
    await expect(page.locator('nav')).toContainText('Run a manual test case');
  });

  await allure.step('Проверить, что боковая панель содержит "Запустите автотест"', async () => {
    await expect(page.locator('nav')).toContainText('Run an automated test case');
  });

  await allure.step('Проверить, что боковая панель содержит "Создайте комбинированный запуск"', async () => {
    await expect(page.locator('nav')).toContainText('Create a combined launch');
  });

  await allure.step('Проверить, что боковая панель содержит "Обработайте результаты тестов"', async () => {
    await expect(page.locator('nav')).toContainText('Work with test results');
  });
});

// Test #10

test('Должен перейти на страницу "Способы установки ТестОпс" через ссылку', async ({ page }) => {
  await allure.description('Проверяет, что пользователь может перейти на страницу "Способы установки ТестОпс" через ссылку "в вашей инфраструктуре"');
  await allure.epic('Документация ТестОпс');
  await allure.feature('Навигация');
  await allure.story('Ссылки');
  await allure.tags('Ссылка', 'Навигация', 'Интерфейс');

  await allure.step('Перейти на домашнюю страницу документации ТестОпс', async () => {
    await page.goto('https://docs.qameta.io/allure-testops/');
  });

  await allure.step('Найти ссылку "в вашей инфраструктуре"', async () => {
    const deployLink = page.locator('a', { hasText: 'to deploy Allure TestOps' });
    await expect(deployLink).toBeVisible();
  });

  await allure.step('Нажать на ссылку "в вашей инфраструктуре"', async () => {
    const installLink = page.locator('a', { hasText: 'to deploy Allure TestOps' });
    await installLink.click();
  });

  await allure.step('Проверить, что URL включает "install"', async () => {
    await expect(page).toHaveURL(/.*install/);
  });

  await allure.step('Проверить, что заголовок на странице "Способы установки ТестОпс"', async () => {
    await expect(page.locator('h1')).toContainText('Install Allure TestOps');
  });
});

// Test #11

test('Должен перейти на страницу "Термины и определения" через ссылку (намеренно сломанный)', async ({ page }) => {
  await allure.description('Проверяет, что пользователь может перейти на страницу "Термины и определения" через ссылку "терминах и определениях ТестОпс"');
  await allure.epic('Документация ТестОпс');
  await allure.feature('Навигация');
  await allure.story('Ссылки');
  await allure.tags('Ошибка', 'Ссылка', 'Навигация', 'Интерфейс');

  await allure.step('Перейти на домашнюю страницу документации ТестОпс', async () => {
    await page.goto('https://docs.qameta.io/allure-testops/');
  });

  await allure.step('Найти ссылку "терминах и определениях ТестОпс"', async () => {
    const deployLink = page.locator('a', { hasText: 'terms and concepts of Allure TestOps' });
    await expect(deployLink).toBeVisible();
  });

  await allure.step('Нажать на ссылку "терминах и определениях ТестОпс"', async () => {
    const installLink = page.locator('a', { hasText: 'intentionally-incorrect-text' });
    await installLink.click();
  });

  await allure.step('Проверить, что URL включает "terms-concepts"', async () => {
    await expect(page).toHaveURL(/.*terms-concepts/);
  });

  await allure.step('Проверить, что заголовок на странице "Термины и определения"', async () => {
    await expect(page.locator('h1')).toContainText('Terms and concepts');
  });
});

// Test #12

test('Должен выполнить поиск документации с помощью сочетания клавиш Ctrl+K (намеренно сломанный)', async ({ page }) => {
  await allure.description('Проверяет поведение поиска с использованием сочетания клавиш Ctrl+K');
  await allure.epic('Документация ТестОпс');
  await allure.feature('Поиск');
  await allure.story('Поиск по сочетанию клавиш');
  await allure.tags('Ошибка', 'Сочетанию клавиш', 'Поиск');

  await allure.step('Перейти на домашнюю страницу документации ТестОпс', async () => {
    await page.goto('https://docs.qameta.io/allure-testops/');
  });

  await allure.step('Нажать Ctrl+K для открытия поля поиска', async () => {
    await page.keyboard.press('Control+KeyK');
  });

  await allure.step('Заполнить поле поиска значением "Jenkins"', async () => {
    await page.fill('input[placeholder="Search"]', 'Jenkins');
  });

  await allure.step('Нажать Enter для выполнения поиска', async () => {
    await page.keyboard.press('Enter');
  });

  await allure.step('Проверить, что отображаются результаты поиска', async () => {
    await expect(page.locator('h1')).toContainText('Search results');
  });
});
