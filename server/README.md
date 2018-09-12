# 🌏 property-explorer-api

Property Explorer REST API

```bash
//get all properties
GET /api/properties

//get all properties within the radius 20km from the given coordinates 
GET /api/properties?latitude=51.5073835&longitude=-0.1277801

//get property by id
GET /api/properties/:id

//update property
PATCH /api/properties/:id
```

❗IMPORTANT❗

Currently Google API is disabled due to timeout issues with developer key and queue buffer. (should work fine with premium account)
To enable it change flag GOOGLE_API_DISABLED to false in ./variables.env

## 🎮 Development

Start developing your own app:

```bash
npm run start:dev or yarn start:dev
```

## ✅ Testing

Test your code:

```bash
npm run test or yarn test
```

## 👌 Production

Production start of the service:

```bash
npm run start or yarn start
```

Open in your browser:

```bash
http://localhost:3001
```

## 📜 License

MIT

## 👨 Author

Mariusz Kaczkowski
