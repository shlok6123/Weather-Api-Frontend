# 🌤️ Weather Engine - High Performance Cache Implementation

A full-stack weather search engine designed with a focus on **Performance**, **Clean Architecture**, and **User Experience**. 

This solution features a **Spring Boot** REST API optimized with **Caffeine Caching** to minimize API calls and latency, paired with a modern **React (Vite)** frontend using Glassmorphism design.

## 🚀 Key Features

* [cite_start]**⚡ High-Performance Caching:** Implements `Caffeine` cache with specific eviction policies (time-based & size-based) to serve repeating queries instantly[cite: 5, 6].
* **🛡️ Resilient Error Handling:** Global Exception Handling to gracefully manage API failures and 404s (e.g., City Not Found).
* [cite_start]**🎨 Rich UI:** A responsive, "Glassmorphism" design that displays interesting attributes like humidity, pressure, and wind speed[cite: 7].
* **📖 Live Documentation:** Integrated **Swagger UI** (OpenAPI) for interactive API testing.
* **🏗️ Extensible Architecture:** Follows industry-standard Separation of Concerns (Controller -> Service -> Repository pattern).

## 🛠️ Tech Stack

### Backend
* **Java 17**
* **Spring Boot 3.3** (Web, Cache)
* **Caffeine** (In-memory Caching)
* **Maven** (Build Tool)
* **Lombok** (Boilerplate reduction)

### Frontend
* **React.js 18** (via Vite for fast build times)
* **Axios** (HTTP Client)
* **CSS3** (Custom Animations & Layouts)

---

## ⚙️ Setup & Installation

### Prerequisites
* Java Development Kit (JDK) 17+
* Node.js (v18+)
* Maven

### 1. Backend Setup (Java)

1.  Navigate to the backend folder:
    ```bash
    cd backend
    ```

2.  **Configure API Key:**
    Open `src/main/resources/application.properties` and add your OpenWeatherMap API Key.
    ```properties
    weather.api.key=YOUR_API_KEY_HERE
    ```

3.  **Run the Application:**
    ```bash
    mvn spring-boot:run
    ```
    *The server will start on `http://localhost:8080`.*

### 2. Frontend Setup (React)

1.  Navigate to the frontend folder:
    ```bash
    cd frontend
    ```

2.  **Install Dependencies & Run:**
    ```bash
    npm install
    npm run dev
    ```
    *The UI will run on `http://localhost:5173`.*

---

## 🧪 API Documentation

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/v1/weather/{city}` | Fetches weather data. Checks Cache first -> If missing, calls OpenWeatherMap API. |

**Example Response:**
```json
{
  "name": "Pune",
  "main": {
    "temp": 29.11,
    "humidity": 38
  },
  "weather": [ { "description": "clear sky" } ]
}
