# Node.js Core Modules Architecture

This repository contains clear examples of Node.js core modules (`fs`, `os`, and `events`). These snippets demonstrate system operations, file manipulation, and event-driven architecture commonly discussed in backend product engineering interviews.

---

## 🚀 Key Modules Covered

### 📂 File System (FS) Module
Demonstrates asynchronous file operations using callback methods.
* **Feature:** Automatically generates a file (`entri.txt`) and writes text content.
* **Key Concept:** Non-blocking asynchronous error handling using parameters.

### 💻 Operating System (OS) Module
Fetches real-time software, hardware, and network details from the host machine.
* **Software Data:** Platform (e.g., win32), kernel type, and operating system build versions.
* **Hardware Data:** Computes Total/Free RAM in Gigabytes (GB) and monitors system uptime in hours.
* **Network Data:** Inspects active network interfaces and configuration parameters.

### 🔔 Events Module (EventEmitter)
An introduction to event-driven programming featuring practical product development scenarios.

* **Scenario 1: Real-time Chat App (e.g., Zoho)**
  * **Method:** Uses `.on()` for persistent event listening.
  * **Behavior:** Continually intercepts and processes infinite stream messages.

* **Scenario 2: Secure Payment Gateways (e.g., Razorpay, PayPal)**
  * **Method:** Uses `.once()` for one-time event handling.
  * **Behavior:** Essential for double-click payment prevention. If a user clicks the "Pay" button twice, subsequent triggers are automatically ignored by the engine to ensure transaction safety.

---

## 📂 Project Structure & Execution

1. Make sure you have [Node.js](https://nodejs.org) installed.
2. Clone the repository and execute your script files via the terminal:

```bash
node your_filename.js
```
