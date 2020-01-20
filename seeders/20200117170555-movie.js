'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('movies', [
      {
        title: 'joker',
        poster: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
        publishId: 2,
        overview: 'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.',
        rating: 83,
        dateReleased: '2019-10-02',
        statsId: 1,
        nowPlaying: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'jumanji: The Next Level',
        poster: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/jyw8VKYEiM1UDzPB7NsisUgBeJ8.jpg',
        publishId: 2,
        overview: 'As the gang return to Jumanji to rescue one of their own, they discover that nothing is as they expect. The players will have to brave parts unknown and unexplored in order to escape the world’s most dangerous game.',
        rating: 67,
        dateReleased: '2019-12-04',
        statsId: 1,
        nowPlaying: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'parasite',
        poster: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
        publishId: 4,
        overview: "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
        rating: 86,
        dateReleased: '2019-05-30',
        statsId: 1,
        nowPlaying: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('movies', null, {});
  }
};
