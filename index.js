require('dotenv').config()

const express = require('express')

const app = express()

const port = 4000

const githubData= {
  "login": "VishnuNakade",
  "id": 74676184,
  "node_id": "MDQ6VXNlcjc0Njc2MTg0",
  "avatar_url": "https://avatars.githubusercontent.com/u/74676184?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/VishnuNakade",
  "html_url": "https://github.com/VishnuNakade",
  "followers_url": "https://api.github.com/users/VishnuNakade/followers",
  "following_url": "https://api.github.com/users/VishnuNakade/following{/other_user}",
  "gists_url": "https://api.github.com/users/VishnuNakade/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/VishnuNakade/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/VishnuNakade/subscriptions",
  "organizations_url": "https://api.github.com/users/VishnuNakade/orgs",
  "repos_url": "https://api.github.com/users/VishnuNakade/repos",
  "events_url": "https://api.github.com/users/VishnuNakade/events{/privacy}",
  "received_events_url": "https://api.github.com/users/VishnuNakade/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Vishnu Nakade",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 23,
  "public_gists": 0,
  "followers": 1,
  "following": 1,
  "created_at": "2020-11-18T17:41:15Z",
  "updated_at": "2024-05-11T10:10:20Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('Hiteshdot.com')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login at chai aur code </h1>')
})

app.get('/youtube', (req,res)=>{
    res.send("<h2>Chai aur code</h2>")
})

app.get('/github',(req,res)=>{
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})