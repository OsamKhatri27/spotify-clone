const albumsData =[
    {
      id:1,
      name:'category1',
      tagline:'this is category1'
    },

    {
     id:2,
     name:'category2',
     tagline:'this is category2'
   },

   {
     id:3,
     name:'category3',
     tagline:'this is category3'
   },

   {
     id:4,
     name:'category4',
     tagline:'this is category4'
   },

   {
     id:5,
     name:'category5',
     tagline:'this is category5'
   }

 ]



 const playlistsData = [
  {
    id: 101,
    category_id: 3,
    name: 'Home playlist 1',
    img:
      'https://images.unsplash.com/photo-1587201572498-2bc131fbf113?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=924&q=80',
    desc: 'Lorem ipsum',
  },
  {
    id: 102,
    category_id: 3,
    name: 'Home playlist 2',
    img:
      'https://images.unsplash.com/photo-1587151711096-23c51f92c920?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
    desc: 'Lorem ipsum',
  },
  {
    id: 103,
    category_id: 3,
    name: 'Home playlist 3',
    img:
      'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
    desc: 'Lorem ipsum',
  },
  {
    id: 104,
    category_id: 3,
    name: 'Home playlist 3',
    img:
      'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
    desc: 'Lorem ipsum',
  },
  {
    id: 105,
    category_id: 3,
    name: 'Home playlist 3',
    img:
      'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
    desc: 'Lorem ipsum',
  },
  {
    id: 106,
    category_id: 3,
    name: 'Home playlist 3',
    img:
      'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
    desc: 'Lorem ipsum',
  },
  {
    id: 107,
    category_id: 5,
    name: 'Home playlist 3',
    img:
      'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
    desc: 'Lorem ipsum',
  },
  {
    id: 108,
    category_id: 5,
    name: 'Home playlist 3',
    img:
      'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
    desc: 'Lorem ipsum',
  },
  {
    id: 109,
    category_id: 3,
    name: 'Home playlist 3',
    img:
      'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
    desc: 'Lorem ipsum',
  },
  
  {
    id: 110,
    category_id: 3,
    name: 'Home playlist 3',
    img:
      'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
    desc: 'Lorem ipsum',
  },
  {
    id: 111,
    category_id: 4,
    name: 'Home playlist 3',
    img:
      'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
    desc: 'Lorem ipsum',
  },
  {
    id: 112,
    category_id: 3,
    name: 'Home playlist 3',
    img:
      'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
    desc: 'Lorem ipsum',
  },
  {
    id: 113,
    category_id: 1,
    name: 'Focus playlist 1',
    img:
      'https://images.unsplash.com/photo-1587165282385-fe9bbf5eb1a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    desc: 'Lorem ipsum',
  },
  {
    id: 114,
    category_id: 4,
    name: 'Sunday playist',
    img:
      'https://images.unsplash.com/photo-1587143602695-c980e283be9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2702&q=80',
    desc: 'Lorem ipsum',
  },
  {
    id: 115,
    category_id: 2,
    name: 'Mood playist 1 ',
    img:
      'https://images.unsplash.com/photo-1587220111918-7a5c0f0c46f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
    desc: 'Lorem ipsum',
  },
  {
    id: 116,
    category_id: 2,
    name: 'Mood playist 2',
    img:
      'https://images.unsplash.com/photo-1587169544748-d21bd810f57e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    desc: 'Lorem ipsum',
  },
]


const tracks =[
  {
    id:1,
    playlistId:101,
    trackName:"Track1",
    singer:'Singer1',
    duration:'4:30'
  },
  {
    id:2,
    playlistId:101,
    trackName:"Track1",
    singer:'Singer1',
    duration:'4:30'
  },
  {
    id:3,
    playlistId:101,
    trackName:"Track1",
    singer:'Singer1',
    duration:'4:30'
  },
  {
    id:4,
    playlistId:102,
    trackName:"Track1",
    singer:'Singer1',
    duration:'4:30'
  },
  {
    id:5,
    playlistId:102,
    trackName:"Track1",
    singer:'Singer1',
    duration:'4:30'
  },
  {
    id:6,
    playlistId:102,
    trackName:"Track1",
    singer:'Singer1',
    duration:'4:30'
  },
  {
    id:7,
    playlistId:103,
    trackName:"Track1",
    singer:'Singer1',
    duration:'4:30'
  },
  {
    id:8,
    playlistId:103,
    trackName:"Track1",
    singer:'Singer1',
    duration:'4:30'
  },
  {
    id:9,
    playlistId:103,
    trackName:"Track1",
    singer:'Singer1',
    duration:'4:30'
  },
  {
    id:10,
    playlistId:104,
    trackName:"Track1",
    singer:'Singer1',
    duration:'4:30'
  },
  {
    id:11,
    playlistId:104,
    trackName:"Track1",
    singer:'Singer1',
    duration:'4:30'
  },
  {
    id:12,
    playlistId:104,
    trackName:"Track1",
    singer:'Singer1',
    duration:'4:30'
  },

  {
    id:13,
    playlistId:104,
    trackName:"Track1",
    singer:'Singer1',
    duration:'4:30'
  },

  {
    id:14,
    playlistId:105,
    trackName:"Track1",
    singer:'Singer1',
    duration:'4:30'
  },

  {
    id:15,
    playlistId:105,
    trackName:"Track1",
    singer:'Singer1',
    duration:'4:30'
  },

  {
    id:16,
    playlistId:105,
    trackName:"Track1",
    singer:'Singer1',
    duration:'4:30'
  },

  {
    id:17,
    playlistId:106,
    trackName:"Track1",
    singer:'Singer1',
    duration:'4:30'
  },

  {
    id:18,
    playlistId:106,
    trackName:"Track1",
    singer:'Singer1',
    duration:'4:30'
  },

  {
    id:19,
    playlistId:106,
    trackName:"Track1",
    singer:'Singer1',
    duration:'4:30'
  },

  {
    id:20,
    playlistId:107,
    trackName:"Track1",
    singer:'Singer1',
    duration:'4:30'
  },
  {
    id:21,
    playlistId:107,
    trackName:"Track1",
    singer:'Singer1',
    duration:'4:30'
  },
  {
    id:22,
    playlistId:107,
    trackName:"Track1",
    singer:'Singer1',
    duration:'4:30'
  },
  {
    id:23,
    playlistId:108,
    trackName:"Track1",
    singer:'Singer1',
    duration:'4:30'
  },
  {
    id:24,
    playlistId:108,
    trackName:"Track1",
    singer:'Singer1',
    duration:'4:30'
  },
  {
    id:25,
    playlistId:109,
    trackName:"Track1",
    singer:'Singer1',
    duration:'4:30'
  },
  {
    id:26,
    playlistId:109,
    trackName:"Track1",
    singer:'Singer1',
    duration:'4:30'
  },
  {
    id:27,
    playlistId:110,
    trackName:"Track1",
    singer:'Singer1',
    duration:'4:30'
  },
  {
    id:28,
    playlistId:110,
    trackName:"Track1",
    singer:'Singer1',
    duration:'4:30'
  },
  {
    id:29,
    playlistId:112,
    trackName:"Track1",
    singer:'Singer1',
    duration:'4:30'
  },
  {
    id:30,
    playlistId:112,
    trackName:"Track1",
    singer:'Singer1',
    duration:'4:30'
  },
  {
    id:31,
    playlistId:113,
    trackName:"Track1",
    singer:'Singer1',
    duration:'4:30'
  },
  {
    id:32,
    playlistId:114,
    trackName:"Track1",
    singer:'Singer1',
    duration:'4:30'
  },
  {
    id:33,
    playlistId:114,
    trackName:"Track1",
    singer:'Singer1',
    duration:'4:30'
  },
  {
    id:34,
    playlistId:115,
    trackName:"Track1",
    singer:'Singer1',
    duration:'4:30'
  },

  {
    id:35,
    playlistId:116,
    trackName:"Track1",
    singer:'Singer1',
    duration:'4:30'
  },

  {
    id:36,
    playlistId:116,
    trackName:"Track1",
    singer:'Singer1',
    duration:'4:30'
  },


  

]


export {albumsData,playlistsData,tracks}