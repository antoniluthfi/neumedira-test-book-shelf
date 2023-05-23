This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deployment
You can see the deployed version of this app here
1. [https://neumedira-test-book-shelf.vercel.app](https://neumedira-test-book-shelf.vercel.app)
1. [https://neumedira-test-book-shelf-antoniluthfi.vercel.app](https://neumedira-test-book-shelf-antoniluthfi.vercel.app)
1. [https://neumedira-test-book-shelf-git-main-antoniluthfi.vercel.app](https://neumedira-test-book-shelf-git-main-antoniluthfi.vercel.app)

## Backend API
Below are some apis that i use from Neumedira:

- ### Login

Endpoint
```bash
POST https://dummyjson.com/auth/login
```
Body
```json
{
    "username": "kminchelle",
    "email": "kminchelle@qq.com", // use this to bypass the login form only as the requirement from the design
    "password": "0lelplR"
}
```
Example Response
```json
{
    "id": 15,
    "username": "kminchelle",
    "email": "kminchelle@qq.com",
    "firstName": "Jeanne",
    "lastName": "Halvorson",
    "gender": "female",
    "image": "https://robohash.org/autquiaut.png",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZyIsImlhdCI6MTY4NDgxODk1MSwiZXhwIjoxNjg0ODIyNTUxfQ.jUjl0TLrMhJ5gEAqsdDnngLZ8DArrrTAD72yirQ8nYk"
}
```
- ### Get All Books
Endpoint
```bash
GET https://643e8199c72fda4a0bf883df.mockapi.io/api/v1/books
```
Example Response
```json
[
    {
        "Title": "consectetur",
        "author": "Mrs. Vera Hilll",
        "image": "https://loremflickr.com/640/480/business",
        "rating": 63,
        "published": "1966-03-30T10:13:50.670Z",
        "description": "Accusamus quia provident in. Deserunt ipsam quae tenetur expedita officiis culpa. Omnis alias voluptate ullam similique nulla aliquam doloribus. Quae iste totam minima beatae architecto laboriosam voluptas. Voluptatum nemo quos dolorum porro sunt. Pariatur a ducimus unde aperiam esse ea ipsam animi iusto.",
        "id": "1"
    },
]
```
- ### Get Book Details
Endpoint
```bash
GET https://643e8199c72fda4a0bf883df.mockapi.io/api/v1/books/{id}
```
Example Response
```json
{
    "Title": "totam",
    "author": "Edmund Trantow",
    "image": "https://loremflickr.com/640/480/technics",
    "rating": 55,
    "published": "1951-06-09T09:24:48.879Z",
    "description": "Animi a pariatur eveniet perspiciatis quo at eaque doloribus. Deserunt accusamus voluptatum vel. Error expedita laborum pariatur atque fugit ad officia similique. Voluptatum alias quae neque occaecati fugiat incidunt enim nobis deleniti. Eos aut sequi hic enim eos voluptatem voluptatibus tenetur.",
    "id": "2"
}
```
## Design Reference
You can see the design reference here: [https://www.figma.com/file/57WmI9mY1GtwpDtW6KUc24/My-Book-Shelf-(Community)?type=design&node-id=1-2&t=ixE7oRMhNE5GZwcd-0](https://www.figma.com/file/57WmI9mY1GtwpDtW6KUc24/My-Book-Shelf-(Community)?type=design&node-id=1-2&t=ixE7oRMhNE5GZwcd-0)

## Let's Connect
- [LinkedIn](https://www.linkedin.com/in/lintang-luthfiantoni-4747a61ab/)
- [WhatsApp](https://wa.me/6282148507278)