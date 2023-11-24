<p align='center'>
<img alt='picture' src='./public/1.png'>
<p>

<h1 align='center'>Meditation-API Documentation</h1>

<p align='left'>Welcome to the Secure Meditation API – your gateway to a serene and mindful digital experience. Our API provides a secure and seamless way to access a wealth of meditation content and categories, fostering tranquility and well-being.</p>

## Servers
https://meditation-api.vercel.app

## API Endpoints

| Endpoint                         | Method | URL                                                        | Curl Command                                              |
|----------------------------------|--------|------------------------------------------------------------|------------------------------------------------------------|
| /api/v1/meditationContent        | GET    | `https://meditation-api.vercel.app/api/v1/meditationContent` | `curl https://meditation-api.vercel.app/api/v1/meditationContent` |
| /api/v1/meditationContent/id?{ID} | GET    | `https://meditation-api.vercel.app/api/v1/meditationContent/id?{ID}` | `curl https://meditation-api.vercel.app/api/v1/meditationContent/id?{ID}` |
| /api/v1/meditationContent/videos | GET    | `https://meditation-api.vercel.app/api/v1/meditationContent/videos` | `curl https://meditation-api.vercel.app/api/v1/meditationContent/videos` |
| /api/v1/meditationContent/articles | GET    | `https://meditation-api.vercel.app/api/v1/meditationContent/articles` | `curl https://meditation-api.vercel.app/api/v1/meditationContent/articles` |
| /api/v1/meditationCategory        | GET    | `https://meditation-api.vercel.app/api/v1/meditationCategory` | `curl https://meditation-api.vercel.app/api/v1/meditationCategory` |
| /api/v1/meditationCategory/id?{ID} | GET    | `https://meditation-api.vercel.app/api/v1/meditationCategory/id?{ID}` | `curl https://meditation-api.vercel.app/api/v1/meditationCategory/id?{ID}` |


## Example Usage for Specific Content or Category

If you wish to retrieve information about a specific meditation content or category, you can use the following examples for guidance.

### Retrieve Meditation Content by ID

To fetch details about a specific meditation content, replace `{ID}` with the actual ID of the content you are interested in. Here's an example using CURL:

```bash
curl https://meditation-api.vercel.app/api/v1/meditationCategory/id?1
```

To retrieve the data, refer to the TypeScript example below. Ensure you have the 'he' library installed, as this API is safeguarded against security vulnerabilities, and the JSON responses are encoded for enhanced protection.

### Installation
```
npm install he
```
### Code example
```
"use client"

import { useEffect, useState } from "react"
import he from "he"

const Home = () => {
  const [jsonData, setJsonData] = useState<any | undefined>()

  useEffect(()=> {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/meditationCategory/id?1")
        const data = await response.json()
        const decodedData: any = JSON.parse(he.decode(JSON.stringify(data)))
        console.log(decodedData)
        setJsonData(decodedData)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchData()
  }, [])
  return (
    <div>
      {jsonData && (
        <div>
          <p>{jsonData.id}</p>
          <p>{jsonData.name}</p>
          <p>{jsonData.description}</p>
        </div>
      )}
    </div>
  )
}

export default Home
```

## Tech Stack

- [Next.js](https://nextjs.org) Framework
- [Typescript](https://www.typescriptlang.org) Language
- [Prisma](https://www.prisma.io/) ORM
- [Neon](https://neon.tech/) to manage postgres database
- Good practice with [ESlint](https://eslint.org)
- Deployed with [Vercel](https://vercel.com/)

## Author

- My self ([@vitolinho](https://github.com/vitolinho))
