
module.exports = {
    routes: [
      { // Path defined with an URL parameter
        method: 'POST',
        path: '/register-artist', 
        handler: 'artist.registerArtist', // Custom action
      },
    ]
  }