function printLanding(req, res, next){
  res.send(`<h1>This is just the backend for <a href="https://pi-dogs-front.vercel.app/">this project</a>. Nothing to see here!</h1>`)
}

module.exports = {
  printLanding
}
