
# Website Downtime Monitor

A website downtime monitoring application with alerts and uptime reports!


## Badges

[![issues](https://img.shields.io/github/issues/lolzone13/website-downtime-monitor)](https://github.com/lolzone13/website-downtime-monitor/issues) 

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

[![stars](https://img.shields.io/github/stars/lolzone13/website-downtime-monitor)](https://github.com/lolzone13/website-downtime-monitor/stargazers)


## API Reference

### Authentication Routes

#### Google authentication route

```http
  GET /auth/google
```

#### Logout Route

```http
  GET /auth/logout

```

### Website Routes

#### Gets all website details

```http
  GET /api/websites
```

#### post website details

```http
  POST /api/websites/
```

#### Delete Website

```http
  DELETE /api/websites/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to delete |

#### Update Website Details

```http
  PUT /api/websites/update/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to update |

## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform


## Tech Stack

**Client:** React, TailwindCSS

**Server:** Node, Express, MongoDB, Passport.js, Nodemailer


## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

