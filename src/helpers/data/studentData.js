const students = [
  {
    id: '1',
    firstName: 'Autumn',
    lastName: 'Fotopoulos',
    isDead: false,
    imageUrl: 'https://avatars3.githubusercontent.com/u/67810121?v=4',
  },
  {
    id: '2',
    firstName: 'Bailey',
    lastName: 'Dennis',
    isDead: false,
    imageUrl: 'https://avatars0.githubusercontent.com/u/29682262?v=4',
  },
  {
    id: '3',
    firstName: 'Chris',
    lastName: 'LoJacono',
    isDead: false,
    imageUrl: 'https://avatars2.githubusercontent.com/u/66916708?v=4',
  },
  {
    id: '4',
    firstName: 'Chris',
    lastName: 'Calhoun',
    isDead: false,
    imageUrl: 'https://avatars1.githubusercontent.com/u/42413958?v=4',
  },
  {
    id: '5',
    firstName: 'Dana',
    lastName: 'Pham',
    isDead: false,
    imageUrl: 'https://avatars2.githubusercontent.com/u/67748110?v=4',
  },
  {
    id: '6',
    firstName: 'Deanna',
    lastName: 'Mix',
    isDead: false,
    imageUrl: 'https://avatars1.githubusercontent.com/u/67847120?v=4',
  },
  {
    id: '7',
    firstName: 'Hunter',
    lastName: 'Juneau',
    isDead: false,
    imageUrl: 'https://avatars2.githubusercontent.com/u/20494604?v=4',
  },
  {
    id: '8',
    firstName: 'Jonathon',
    lastName: 'Joyner',
    isDead: false,
    imageUrl: 'https://avatars0.githubusercontent.com/u/67886630?v=4',
  },
  {
    id: '9',
    firstName: 'Jordan',
    lastName: 'Smith',
    isDead: false,
    imageUrl: 'https://avatars2.githubusercontent.com/u/67443077?v=4',
  },
  {
    id: '10',
    firstName: 'Joseph',
    lastName: 'Martin',
    isDead: false,
    imageUrl: 'https://avatars3.githubusercontent.com/u/41244241?v=4',
  },
  {
    id: '11',
    firstName: 'Kaitlyn',
    lastName: 'VanHook',
    isDead: false,
    imageUrl: 'https://avatars3.githubusercontent.com/u/63985074?v=4',
  },
  {
    id: '12',
    firstName: 'Liz',
    lastName: 'Barnes',
    isDead: false,
    imageUrl: 'https://avatars2.githubusercontent.com/u/65733608?v=4',
  },
  {
    id: '13',
    firstName: 'Michael',
    lastName: 'Pfohl',
    isDead: false,
    imageUrl: 'https://avatars2.githubusercontent.com/u/61816911?v=4',
  },
  {
    id: '14',
    firstName: 'Robert',
    lastName: 'Bandstra',
    isDead: false,
    imageUrl: 'https://avatars2.githubusercontent.com/u/67298516?v=4',
  },
  {
    id: '15',
    firstName: 'Ryan',
    lastName: 'McNair',
    isDead: false,
    imageUrl: 'https://avatars2.githubusercontent.com/u/67588177?v=4',
  },
  {
    id: '16',
    firstName: 'Sam',
    lastName: 'Mudick',
    isDead: false,
    imageUrl: 'https://avatars0.githubusercontent.com/u/65687019?v=4',
  },
  {
    id: '17',
    firstName: 'Summer',
    lastName: 'Duke',
    isDead: false,
    imageUrl: 'https://avatars2.githubusercontent.com/u/60371978?v=4',
  },
  {
    id: '18',
    firstName: 'Wanda',
    lastName: 'McInturff',
    isDead: false,
    imageUrl: 'https://avatars0.githubusercontent.com/u/67842770?v=4',
  },
  {
    id: '19',
    firstName: 'Wendell',
    lastName: 'Patton Jr.',
    isDead: false,
    imageUrl: 'https://avatars0.githubusercontent.com/u/63669713?v=4',
  },
  {
    id: '20',
    firstName: 'Will',
    lastName: 'Kotheimer',
    isDead: false,
    imageUrl: 'https://avatars3.githubusercontent.com/u/5234281?v=4',
  },
];

const livingStudents = () => students.filter((student) => student.isDead === false);

const dearlyBeloved = () => students.filter((student) => student.isDead === true);

const followTheLight = (id) => {
  const changeValue = students.find((student) => id === student.id);
  changeValue.isDead = true;
};

export default { livingStudents, dearlyBeloved, followTheLight };
