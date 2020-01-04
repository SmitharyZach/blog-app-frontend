const blogs = [
    {
      "title": "how to brew beer",
      "author": "Dog fish head",
      "url": "beer.com",
      "likes": 2332,
      "user": {
        "username": "BrewMaster",
        "name": "Zach",
        "id": "5dbca36d1b5a2d0c1bce529f"
      },
      "id": "5dc604771f3fc5d392ab7d07"
    },
    {
      "title": "how to cook food",
      "author": "bong appetitiate",
      "url": "food.com",
      "likes": 242,
      "user": {
        "username": "BrewMaster",
        "name": "Zach",
        "id": "5dbca36d1b5a2d0c1bce529f"
      },
      "id": "5dc611d41f3fc5d392ab7d08"
    },
    {
      "title": "how to cook for friends gi ing",
      "author": "Becca volk-smith",
      "url": "https://ba.com",
      "likes": 3,
      "user": {
        "username": "BrewMaster",
        "name": "Zach",
        "id": "5dbca36d1b5a2d0c1bce529f"
      },
      "id": "5dc6f4bafba925226a81cd98"
    },
    {
      "title": "Diegos here",
      "author": "Diego",
      "url": "calendly.com",
      "likes": 0,
      "user": {
        "username": "BrewMaster",
        "name": "Zach",
        "id": "5dbca36d1b5a2d0c1bce529f"
      },
      "id": "5dea9550a1fc6a2ca03c52e4"
    },
    {
      "title": "how to cook food part 2",
      "author": "bong appetitiate",
      "url": "food.com",
      "likes": 241,
      "user": {
        "username": "BrewMaster",
        "name": "Zach",
        "id": "5dbca36d1b5a2d0c1bce529f"
      },
      "id": "5deaaee9bf90ebfef16225a8"
    },
    {
      "title": "password man manifesto",
      "author": "pass word man",
      "url": "jfjfjf",
      "likes": 0,
      "user": {
        "username": "Password person",
        "name": "pass word",
        "id": "5db8c6af736a3641d75d5ff4"
      },
      "id": "5deaaf4cbf90ebfef16225a9"
    },
    {
      "title": "pass word part 2",
      "author": "sadf",
      "url": "sf",
      "likes": 0,
      "user": {
        "username": "Password person",
        "name": "pass word",
        "id": "5db8c6af736a3641d75d5ff4"
      },
      "id": "5deaaf54bf90ebfef16225aa"
    },
    {
      "title": "jason",
      "author": "jason",
      "url": "jfjf",
      "likes": 0,
      "user": {
        "username": "BrewMaster",
        "name": "Zach",
        "id": "5dbca36d1b5a2d0c1bce529f"
      },
      "id": "5df3c804994c116f5f1d3fcd"
    }
  ]


  const getAll = () => {
      return Promise.resolve(blogs)
  }

  export default { getAll }