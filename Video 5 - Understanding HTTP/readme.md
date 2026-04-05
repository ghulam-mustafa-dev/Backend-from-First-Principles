# 🌐 Understanding HTTP

HTTP is the medium through which browsers communicate with servers to send or receive data.

---

## ❤️ Core Ideas of HTTP

### 1. Stateless
- No memory of past interactions.
- Each request is treated as a new request.
- Enables easy distribution of requests across multiple servers.

### 2. Client-Server Model
- **Client** initiates the request.
- **Server** holds resources and processes requests.
- Communication happens over a **TCP connection**.

#### Messages:
- **Request Message** → Sent by client  
- **Response Message** → Sent by server  

---

## 📦 HTTP Headers

Headers are separated so that sender and receiver can inspect metadata without parsing the body or URL.

### Types of Headers

#### ➤ Request Headers
- `User-Agent`
- `Authorization`
- `Cookie`
- `Accept`

#### ➤ General Headers
- `Date`
- `Cache-Control`
- `Connection`

#### ➤ Representation Headers
- `Content-Type`
- `Content-Length`
- `Content-Encoding`

#### ➤ Security Headers
- `HSTS`
- `CSP`
- `Set-Cookie`

---

### ✨ Key Concepts

#### 1. Extensibility
- Headers can be extended without changing the protocol.
- Developers can define custom headers.

#### 2. Remote Control
- Headers control server behavior.
- Example: `Authorization`

---

## 🔧 HTTP Methods

Methods define the **intent** of a request.

| Method  | Purpose |
|--------|--------|
| GET    | Fetch data |
| POST   | Create data |
| PUT    | Replace entire resource |
| PATCH  | Partial update |
| DELETE | Remove data |

---

## 🔁 Idempotent vs Non-Idempotent

### Idempotent Methods
(Same result even if called multiple times)
- GET
- PUT
- DELETE

### Non-Idempotent Methods
(Result may change on repeated calls)
- POST
- PATCH

---

## 🌍 CORS (Cross-Origin Resource Sharing)

Allows web apps to access resources from different domains.

### OPTIONS Method
- Used to check server capabilities.
- Common in CORS flow.

---

### 🔄 CORS Workflows

#### 1. Simple Request
- Client sends request.
- If allowed, server adds CORS headers.
- If missing → browser blocks response.

#### 2. Preflighted Request
- Browser sends an `OPTIONS` request first.

##### Triggered when:
1. Method is not GET, POST, HEAD
2. Non-simple headers (e.g., Authorization)
3. Content-Type is not:
   - `application/x-www-form-urlencoded`
   - `multipart/form-data`
   - `text/plain`

---

## 💾 HTTP Caching
- Stores responses for reuse.
- Reduces server load and improves performance.

---

## 🔄 Content Negotiation

Client and server agree on data format.

### Headers Used:
- `Accept`
- `Content-Type`

### Encoding Negotiation
- Server sends compressed data.
- Client decompresses it.
- Reduces transfer size.

---

## 🔗 Persistent Connections (Keep-Alive)
- A single TCP connection handles multiple requests/responses.
- Improves performance by avoiding repeated connection setup.

---

## 📡 Handling Large Requests & Responses

### 1. Multipart Requests
- Used for large uploads (e.g., files).
- Data is sent in parts.

### 2. Streaming Responses
- Server sends data in chunks.

#### Techniques:
- Chunked Transfer Encoding
- Server-Sent Events (Text Event Streaming)

---

## 🔐 SSL, TLS, HTTPS

### SSL (Secure Sockets Layer)
- Original encryption protocol.

### TLS (Transport Layer Security)
- Modern, secure replacement for SSL.
- Encrypts data in transit.
- Uses certificates for authentication.

### HTTPS
- Secure version of HTTP.
- Uses SSL/TLS for encryption.