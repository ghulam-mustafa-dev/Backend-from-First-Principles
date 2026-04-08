# 🔐 Authentication and Authorization

A mechanism to assign an identity and control access:

- **Authentication** → *Who are you?*  
- **Authorization** → *What are you allowed to do?*  

---

## 🔑 Authentication Concepts

### Types of Authentication

#### ➤ Implicit Authentication
- Based on trust

#### ➤ Explicit Authentication
- Independent verification required

---

## 🕰️ Early Authentication

- Physical seals were used
- Easily bypassed → not secure

---

## 🔐 Multi-Factor Authentication (MFA)

Combines multiple factors:

1. **Something you know** → Password  
2. **Something you have** → Phone, OTP  
3. **Something you are** → Biometrics  

---

## 🚀 Modern Authentication

- OAuth
- JWT
- Zero Trust Architecture
- Passkeys

---

## 🧱 Core Components

1. Sessions  
2. JWT  
3. Cookies  

---

## 🌐 Stateless vs Stateful

- Early web (static pages) → Stateless was enough  
- Dynamic apps → Needed **stateful systems**

---

# 🧩 Sessions

- Server stores user data + session ID
- Session ID is sent to client via **cookie**

### Flow:
1. User logs in  
2. Server creates session  
3. Session ID stored in DB / Redis  
4. Sent to client as cookie  

### Features:
- Short-lived  
- Persistent storage (DB / Redis)  
- Survives server restarts  

### Distributed Systems:
- Sessions stored in **Redis**

---

# 🪪 JWT (JSON Web Token)

Used to avoid server-side session storage.

### Structure:
- Header  
- Payload  
- Signature  

### Features:
- Stateless  
- Self-contained  
- Portable across services  

### Pros:
- No DB lookup required  
- Great for microservices  

### Cons:
- Token theft risk  
- Hard to revoke tokens  
- No built-in invalidation  

---

### ⚠️ Hybrid Approach
- Maintain a **blacklist of tokens**
- Adds state → defeats stateless benefit

---

# 🍪 Cookies

- Store small data in browser
- Sent automatically with requests

### Key Points:
- Stored on client  
- Accessible only by the issuing server  

---

## 🔄 Authentication Flow

1. User logs in (email + password)  
2. Server generates:
   - Session ID **or**
   - JWT  
3. Stored in cookie  
4. Client sends cookie in future requests  
5. Server verifies identity  

---

# 🔐 Types of Authentication Systems

## 1. Stateful Authentication

- Server stores session in DB / Redis  
- Client stores session ID in cookie  

### Pros:
- Centralized control  
- Easy revocation  

### Cons:
- Hard in distributed systems  
- Latency due to DB lookup  

---

## 2. Stateless Authentication

- Server generates signed JWT  
- Client sends JWT in headers  

### Pros:
- No server storage  
- Scalable  

### Cons:
- Token revocation is difficult  

---

## 3. API Key Authentication

- Generate API key from platform  
- Used for server-to-server communication  

### Pros:
- Fast  
- Simple  

### Example:
- Using API key to access an API service  

---

## 4. OAuth 2.0

### Problem Solved:
- Avoid sharing passwords between platforms  

### Concept:
- Delegation of access  

### Roles:
- **Resource Owner** → User  
- **Client** → App (e.g., Facebook)  
- **Resource Server** → API (e.g., Google)  
- **Authorization Server** → Issues tokens  

---

### 🔄 OAuth Flow

1. Client redirects user to Authorization Server  
2. User grants permissions  
3. Authorization Server returns token  
4. Client uses token to access Resource Server  

---

## 🔐 OpenID Connect (OIDC)

- Built on top of OAuth  
- Adds **authentication layer**

### Features:
- Uses **ID Token (JWT)**  
- Provides user identity  

---

## 🧠 When to Use What?

| Method     | Use Case |
|------------|---------|
| Stateful   | Web apps, SaaS |
| Stateless  | APIs, microservices |
| OAuth      | Third-party login |
| API Key    | Server-to-server |

---

# 🔒 Authorization

Determines what a user can do after authentication.

---

## 🧑‍💼 RBAC (Role-Based Access Control)

- Assign roles (Admin, User, etc.)
- Server checks role via token or DB lookup

---

## ⚠️ Security Considerations

### 1. Error Messages
- Keep them **generic**
- Avoid revealing:
  - Whether email exists
  - Whether password is wrong  

---

### 2. Timing Attacks
- Attackers analyze response time differences  

### Prevention:
- Use **constant-time operations**
- Add **artificial delay** when needed  

---

# 🚀 Summary

- **Authentication** → Identity  
- **Authorization** → Permissions  
- Key systems:
  - Sessions (stateful)
  - JWT (stateless)
  - OAuth (delegation)
- Always follow **secure practices** to prevent attacks