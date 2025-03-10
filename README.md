
# Backend for Football Player Scores

A backend service created for storing football players, with their respective scores based on their performance in football.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Endpoints

### 1. GET ALL PLAYERS (GET)

- **Endpoint:**
https://dincy-players-be.onrender.com/players


- **Returns:**
```json
[
  {
      "id": "7af68854-a3b8-4b79-983f-c6e597f5bcc3",
      "nickname": "<nickname>", 
      "speed_score": 6,
      "resistance_score": 7,
      "technical_score": 4,
      "average_score": 6
  },
  ...
]
```

### CREATE PLAYER (POST)

**Endpoint:**
https://dincy-players-be.onrender.com/create-playe

```json
{
    "nickname": "<nickname>",
    "speed_score": 10, 
    "resistance_score": 10, 
    "technical_score": 10
}
```

**Where:**

speed_score, resistance_score, and technical_score are numbers between 0 and 10.

response:
```json 
{
    "id": "<id>", 
    "nickname": "<nickname>",
    "speed_score": 10,
    "resistance_score": 10,
    "technical_score": 10,
    "average_score": 10
}
```
- ### 3. UPDATE PLAYER (PUT)

**Endpoint:** 

https://dincy-players-be.onrender.com/update-player

**Payload Example:**

```json
{
    "id": "3959ad9e-65ad-45e2-8d37-37ace2dd54a6",
    "nickname": "<nickname>", 
    "speed_score": 7,
    "resistance_score": 8,
    "technical_score": 3
}
```

Returns:

```json
{
    "id": "3959ad9e-65ad-45e2-8d37-37ace2dd54a6",
    "nickname": "<nickname>", 
    "speed_score": 7,
    "resistance_score": 8,
    "technical_score": 3,
    "average_score": 6
}
```
average_score is the average of the three properties mentioned.

### 4. DELETE PLAYER (DELETE)

**Endpoint:**

https://dincy-players-be.onrender.com/delete-player

Payload Example:

```json
{
    "id": "<player-id>"
}
```

Returns:

```json
{
    "message": "Player with id <player-id> has been deleted successfully"
}
```


