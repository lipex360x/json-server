<h2 align="center">JSON Server</h2>
<p align="center">A Interactive JSON Server Service</p>
<p align="center">
  <img src="https://github.com/lipex360x/json-server/blob/master/assets/screen.png" alt="JSON SERVER"/>
</p>

#### :bookmark_tabs: Content Index
- [Start Server](#zap-start-server)
- [JSON File Example](#zap-json-file-example)
- [Import Insomnia Data](#zap-import-insomnia-data)
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

#### :zap: Import Insomnia Data

To interactive with the JSON Server on Insomnia REST, first install: [click here](https://insomnia.rest/download) to download.

After that, import ***insomnia.json*** file in `Insomnia Preferences > Data > Import Data`

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
