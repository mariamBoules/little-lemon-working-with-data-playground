# Little Lemon React Native Playground

Welcome to the Little Lemon React Native Playground! This project is designed as a playground for Meta's Coursera course "Working with Data Using React Native." 
Link to course : https://www.coursera.org/programs/instructors-kff6i/learn/meta-working-with-data?source=search

## Project Overview

The app is a simple restaurant menu and customer management application with the following components:
- **Menu**: Displays a list of menu items.
- **Settings**: Allows users to toggle various settings.
- **Customers**: Manages customer data using SQLite.

## Folder Structure

- **App.js**: The main entry point of the application, setting up navigation using `react-navigation`.
- **components/**
  - **menu.js**: Displays the menu items using `FlatList`.
  - **settings.js**: Allows users to toggle account preferences and saves them using `AsyncStorage`.
  - **customers.js**: Manages customer data, including adding, updating, and deleting customers using SQLite.

## Components

### App.js

Sets up the navigation for the application using a Drawer Navigator. The three main screens are:
- **ShowMenu**: Displays the menu items.
- **Settings**: Handles application preferences.
- **Customers**: Manages customer data with SQLite.

### Customers Component

Manages customer information using SQLite, including:
- **Adding** new customers.
- **Editing** customer names.
- **Deleting** customers.

### Menu Component

Displays a list of menu items with their names and prices.

### Settings Component

Allows users to toggle and save preferences for:
- Push notifications
- Marketing emails
- Latest news

## SQLite Setup

The `customers` table is created if it does not already exist. It stores customer `id`, `uid`, and `name`.

## AsyncStorage

Settings preferences are stored and retrieved using `AsyncStorage`.

## Dependencies

- `expo-sqlite`: For SQLite database.
- `react-native-paper`: For UI components.
- `@react-navigation/native` and `@react-navigation/drawer`: For navigation.
- `@react-native-async-storage/async-storage`: For storing settings.


## Acknowledgements

This project was developed as part of Meta's Coursera course "Working with Data Using React Native."
