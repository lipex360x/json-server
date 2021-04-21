<h2 align="center">JSON Server</h2>

![JSON-SERVER](https://github.com/lipex360x/json-server/blob/master/assets/screen.png)

#### :bookmark_tabs: Content Index
- [Start Server](#zap-start-server)
- [JSON File Example](#zap-json-file-example)
- [HTTP GET Request](#zap-http-get-request)
- [VSCode Extension](#zap-vscode-extension)

---

#### :zap: Start Server

In the terminal on the root project path, run: `json-server -w server.json`

* Optional settings

-H: `ip [default: localhost]`
-d: `delay in ms`
-p: `port`

***See more with `-h`***

---

#### :zap: JSON File Example

Create `filename.json` in root path with:

```json
{
  "users": []
}
```

---

#### :zap: HTTP GET Request

In the browser (or with Insomnia GET request), access:

> http://localhost:3000/users

--- 

#### :zap: VSCode Extension

Code Runner

> code --install-extension formulahendry.code-runner

---

:bookmark_tabs: [Go to Content Index](#bookmark_tabs-content-index)
