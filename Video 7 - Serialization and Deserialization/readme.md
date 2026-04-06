# 🔄 Serialization and Deserialization

When data is exchanged between a **client and server**, both need a way to understand each other's data format.

This process is handled using:
- **Serialization**
- **Deserialization**

---

## 🧠 What Does It Mean?

- **Serialization** → Converting data into a common format for transmission or storage  
- **Deserialization** → Converting data back into a usable format  

👉 This ensures:
- Server understands client data  
- Client understands server response  

---

## 🌐 Why Do We Need It?

Different systems may use different programming languages or data structures.

To communicate effectively:
- A **common standard format** is used
- Data is converted before sending and after receiving

---

## 📦 Serialization Standards

### 📝 Text-Based Serialization

- JSON
- YAML
- XML

✔ Human-readable  
✔ Easy to debug  
❌ Slightly larger in size  

---

### ⚡ Binary-Based Serialization

- Protobuf (Protocol Buffers)

✔ Compact and fast  
✔ Efficient for large-scale systems  
❌ Not human-readable  

---

## 📄 JSON (JavaScript Object Notation)

- Most commonly used format in web development
- Lightweight and easy to parse

### Key Rules:
- Keys must be in **double quotes**
- Supports strings, numbers, booleans, arrays, and objects

### Example:
```json
{
  "name": "John Doe",
  "age": 30,
  "isDeveloper": true,
  "skills": ["JS", "Node", "Go"]
}
 id="json123"
 ```

---

## 🔁 Full Flow

1. Client sends data → **Serialized (e.g., JSON)**
2. Server receives → **Deserializes** into usable format
3. Server processes data (business logic)
4. Server sends response → **Serialized again**
5. Client receives → **Deserializes**

---

## 🚀 Summary

- Serialization & Deserialization enable **communication between client and server**
- They convert data to a **common format**
- Common formats:
  - JSON (most popular)
  - XML / YAML
  - Protobuf (high-performance systems)