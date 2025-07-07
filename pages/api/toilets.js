export default function handler(req, res) {
  const toilets = [
    {
      id: 1,
      name: "St. Stephen's Green Park Toilet",
      lat: 53.3382,
      lng: -6.2591,
      wheelchair: true,
      babyChanging: true,
    },
    {
      id: 2,
      name: "Phoenix Park Visitor Centre Toilet",
      lat: 53.355,
      lng: -6.329,
      wheelchair: false,
      babyChanging: true,
    },
    {
      id: 3,
      name: "Heuston Station Toilet",
      lat: 53.3462,
      lng: -6.2918,
      wheelchair: true,
      babyChanging: false,
    }
  ];
  res.status(200).json(toilets);
}
