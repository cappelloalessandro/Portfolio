//Import Images
import athlete from "./img/athlete-small.png";
import athlete2 from "./img/athlete2.png";
import creativepc from "./img/Creativeclub-pc.png";
import creative from "./img/creativeclub1.jpg";
// import creative2 from "./img/creativeclub2.jpg";
import league from "./img/league1.jpg";
import league2 from "./img/league2.jpg";


export const MovieState = () => {
  return [
    {
      title: "200Bpm",
      mainImg: athlete,
      secondaryImg: athlete2,
      url: "/work/200bpm",
      awards: [
        {
          title: "Tipo di Progetto",
          description:
          "Sito Wordpress con theme builder Divi”",
        },
        {
          title: "Scopo del progetto:",
          description:
          "“Sito per iscrizione a corse, competizioni e attività sportive della martesana.”",
        },  
      ],
      workDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      title: "CreativeClub",
      mainImg: creativepc,
      url: "/work/CreativeClub",
      secondaryImg: creative,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
          "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
          "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
      workDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      title: "League of Legends Action Figure",
      mainImg: league2,
      url: "/work/League-of-legends-af",
      secondaryImg: league,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
          "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
          "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
      workDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];
};
