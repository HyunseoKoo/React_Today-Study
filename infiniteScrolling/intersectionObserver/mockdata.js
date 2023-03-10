export const MockPost = (count) =>
  Array(count)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      content: faker.lorem.paragraph(),
      User: {
        id: shortId.generate(),
        nick_name: faker.name.firstName(),
        profile_img: faker.image.avatar(),
      },
      Post_img: Array(Math.floor(Math.random() * 3) + 1)
        .fill()
        .map(() => faker.image.imageUrl()),
      Comments: Array(Math.floor(Math.random() * 5) + 1)
        .fill()
        .map(() => {
          return {
            id: shortId.generate(),
            content: faker.lorem.sentence(),
            User: {
              id: shortId.generate(),
              nick_name: faker.name.firstName(),
              profile_img: faker.image.avatar(),
            },

            myComment: 'N',
            createdAt: faker.date.between('2023-01-01T00:00:00.000Z', '2023-01-31T00:00:00.000Z'),
          };
        }),
      createdAt: faker.date.between('2023-01-01T00:00:00.000Z', '2023-01-31T00:00:00.000Z'),
      myPost: 'N',
    }));
