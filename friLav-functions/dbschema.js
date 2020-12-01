let db = {
     users: [
        {
          userId: 'IKcwelsTjMVXkc3hrObnjG76TF93',
          email: 'user@email.com',
          handle: 'user',
          createdAt: '2020-04-30T09:18:47.518Z',
          imageUrl: 'image/dsfsdkfghskdfgs/dgfdhfgdh',
          bio: 'Hello, my name is user, nice to meet you',
          website: 'https://user.com',
          location: 'Lonodn, UK'
        }
    ], 
    screams: [
        {
            userHandle: 'user',
            body: 'this is the scream body',
            createdAt: '2020-04-30T08:13:06.091Z',
            likeCount: 5,
            commentCount: 2
        }
    ],
    comments: [
        {
          userHandle: 'user',
          screamId: 'i07527gcHwdYRFlwPOOh',
          body: 'nice one mate!',
          createdAt: '2020-04-30T08:13:06.091Z'
        }
      ],
      notifications: [
        {
          recipient: 'user',
          sender: 'Jane',
          read: 'true | false',
          screamId: 'i07527gcHwdYRFlwPOOh',
          type: 'like | comment',
          createdAt: '2020-05-04T08:10:06.091Z'
        }
      ]
};

const userDetails = {
    // Redux data
    credentials: {
      userId: 'IKcwelsTjMVXkc3hrObnjG76TF93',
      email: 'user@email.com',
      handle: 'user',
      createdAt: '2020-04-30T09:18:47.518Z',
      imageUrl: 'image/dsfsdkfghskdfgs/dgfdhfgdh',
      bio: 'Hello, my name is user, nice to meet you',
      website: 'https://user.com',
      location: 'Lonodn, UK'
    },
    likes: [
      {
        userHandle: 'user',
        screamId: 'hh7O5oWfWucVzGbHH2pa'
      },
      {
        userHandle: 'user',
        screamId: '3IOnFoQexRcofs5OhBXO'
      }
    ]
  }; 
