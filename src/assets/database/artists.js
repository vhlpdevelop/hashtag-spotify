import { shuffleArray } from "../../utils/shuffle";

export const artistArray = [
  {
    id: 1,
    image: "https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4",
    name: "Henrique & Juliano",
  },
  {
    id: 2,
    image: "https://i.scdn.co/image/ab6761610000517499c26e8fb91634b00764bbb9",
    name: "MC Tuto",
  },
  {
    id: 3,
    image: "https://i.scdn.co/image/ab6761610000517477937baabc49dea13c17c706",
    name: "Jorge & Mateus",
  },
  {
    id: 4,
    image: "https://i.scdn.co/image/ab67616100005174b4c07f06044ca6f1a8548192",
    name: "NATTAN",
  },
  {
    id: 5,
    image: "https://i.scdn.co/image/ab676161000051747ffc3038ef5e67354ecdede1",
    name: "Grupo Menos É Mais",
  },
  {
    id: 6,
    image: "https://i.scdn.co/image/ab676161000051747098ffe23a919f7742979c6e",
    name: "Zé Neto & Cristiano",
  },
  {
    id: 7,
    image: "https://i.scdn.co/image/ab67616100005174b97627e4ea832ed67617627a",
    name: "Matheus & Kauan",
  },
  {
    id: 8,
    image: "https://i.scdn.co/image/ab67616100005174668a5535093f4cc53b1fef45",
    name: "Oruam",
  },
  {
    id: 9,
    image: "https://i.scdn.co/image/ab67616100005174acfec0b96ba96562ad2e7fa3",
    name: "Murilo Huff",
  },
  {
    id: 10,
    image: "https://i.scdn.co/image/ab6761610000517483f19000f18fbec5cf328f59",
    name: "Hugo & Guilherme",
  },
  {
    id: 11,
    image: "https://i.scdn.co/image/ab67616100005174ec1fef19ee9676f9ce662f39",
    name: "MC LUUKY",
  },
  {
    id: 12,
    image: "https://i.scdn.co/image/ab67616100005174281fcf09827f1223ca4d729c",
    name: "Léo Foguete",
  },
  {
    id: 13,
    image: "https://i.scdn.co/image/ab67616100005174dbfd9763ee6948c110999581",
    name: "Gusttavo Lima",
  },
  {
    id: 14,
    image: "https://i.scdn.co/image/ab676161000051744ba71e7bb7139281802eb42e",
    name: "Nilo",
  },
  {
    id: 15,
    image: "https://i.scdn.co/image/ab67616100005174121da419911d33812cfd481e",
    name: "Luan Pereira",
  },
  {
    id: 16,
    image: "https://i.scdn.co/image/ab67616100005174946d345050cf85e1b67e00d3",
    name: "Guilherme & Benuto",
  },
  {
    id: 17,
    image: "https://i.scdn.co/image/ab67616100005174ffaebdbc972967729f688e25",
    name: "Marília Mendonça",
  },
  {
    id: 18,
    image: "https://i.scdn.co/image/ab67616100005174fde13b4ff04ee1c0f33c6878",
    name: "Luan Santana",
  },
  {
    id: 19,
    image: "https://i.scdn.co/image/ab67616100005174a291b99de1602566f8d57725",
    name: "Gustavo Mioto",
  },
  {
    id: 20,
    image: "https://i.scdn.co/image/ab67616100005174a4d221889e774d4b173aeaa0",
    name: "Henry Freitas",
  },
];

export const artistsIndexedById = artistArray.reduce((acc, currentObj) => {
  acc[currentObj.id] = currentObj;
  return acc;
}, {});

shuffleArray(artistArray);
