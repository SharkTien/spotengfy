import fs from 'fs'

fs.writeFileSync("data-user.js",
`
custom_albums = [
    {
        albumName: 'name',
        createdDate: 'date',
        items: [
            {
                id: '00001',
                name: '踊り子 | Odoriko',
                path: 'audio/踊り子 - Vaundy.mp3',
                artist: 'Vaundy',
                cover: 'img/banner/00000.jpg'
            }
        ]
    },
]
`)