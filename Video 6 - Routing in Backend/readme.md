# 🧭 Routing in Backend

Routing defines **where a request should go** in the server.

- It maps a **Method + URL → Handler (function)**
- It tells the server how to respond to a specific request.

---

## 🧱 Static Routes

- Routes with no variables in the URL.
- Always remain the same.
- No dynamic parameters.

### Example: POST /api/books


---

## 🔀 Dynamic Routes (Path Parameters)

- Routes that include **variable parts** in the URL.
- Used to identify specific resources.

### Example: GET /api/users/123


- `123` is a **path parameter**
- Server extracts this value to fetch specific data

---

## 🔍 Query Parameters

- Used to send **key-value pairs** in a request.
- Commonly used with `GET` requests.

### Example: GET /api/search?query=some+value


- `query=some+value` is a query parameter

---

## 🪜 Nested Routes

- Used to represent **relationships between resources**.

### Example: GET /api/users/123/posts/456


- Fetch:
  - User with ID `123`
  - Post with ID `456` belonging to that user

---

## 🔄 Route Versioning & Deprecation

- Used to manage API changes over time.
- Helps maintain backward compatibility.

### Examples: 
- GET /api/v1/products/
- GET /api/v2/products/


---

## 🚫 Catch-All Routes

- Handles requests for undefined routes.
- Returns a "Not Found" response (usually `404`).

### Purpose:
- Inform the client that the requested route does not exist.