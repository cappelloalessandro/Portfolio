//Import Images
// import athlete from "./img/athlete-small.png";
import athlete2 from "./img/athlete2.png";
import athletepc from "./img/200bpm-pc.png";
import creativepc from "./img/Creativeclub-pc.png";
import leaguepc from "./img/League-pc.png";
import creative from "./img/creativeclub1.jpg";
import league from "./img/league1.jpg";
// import league2 from "./img/league2.jpg";


export const SiteState = () => {
  return [
    {
      title: "200Bpm",
      mainImg: athletepc,
      secondaryImg: athlete2,
      url: "/work/200bpm",
      awards: [
        {
          title: "Tipo di Progetto",
          description:
          "Sito Wordpress con theme builder Divi",
        },
        {
          title: "Scopo del progetto:",
          description:
          "Sito per iscrizione a corse, competizioni e attività sportive della martesana.",
        },  
      ],
      workDescription: "200Bpm è uno dei miei primi siti creati, iniziato nel 2019 ed è ancora attivo e in fase di aggiornamento, visto che gestisco ancora oggi le varie pagine delle corse che vengono riproposte ogni anno con una nuova versione. proponiamo competizioni sportive adatte a tutti, siamo anche in collaborazione con FIASP Italia, grande leader nelle convenzioni sportive ed eventim sportivi.",
    },
    {
      title: "CreativeClub",
      mainImg: creativepc,
      url: "/work/CreativeClub",
      secondaryImg: creative,
      awards: [
        {
          title: "Tipo di Progetto",
          description:
          "Sito Wordpress con theme builder Divi",
        },
        {
          title: "Scopo del progetto:",
          description:
          "Sito Vetrina per studio creativo con sede ad Amsterdam per progetti creativi",
        },  
      ],
      workDescription: "Nato come progetto di fine corso per il corso di * * per scuola Mohole, ora è in fase di deploy e rendere il sito operativo a partire da Ottobre 2021; il sito tratta di progetti creativi creati da un gruppo di creativi, che guardano il design con un occhio diverso dal solito, così da poter avere un modo tutto loro per esprimersi e far risaltare i progetti e i lavori che gli vengono commissionati. ",
    },
    {
      title: "League of Legends Action Figure",
      mainImg: leaguepc,
      url: "/work/League-of-legends-af",
      secondaryImg: league,
      awards: [
        {
          title: "Tipo di Progetto",
          description:
          "Sito Wordpress con theme builder Divi”",
        },
        {
          title: "Scopo del progetto:",
          description:
          "“Sito Infocommerce per Vendita, informazioni e pre-ordine della nuova collezione di league of legends Action Figure",
        },  
      ],
      workDescription: "Questo sito nasce dalla collaborazione tra una società specializzata nella vendita di videogames e organizzazione di eventi e fiere chiamata VxP Project e la Riot Games.Il titolare, mi ha affidato il compito di creare un sito wordpress con lo scopo di esporre la nuova collezione che ha ricevuto in anticipo per la prevendita di queste Action Fiugre, con la possibilità in futuro di aggiornarlo con Woocommerce per permettere anche l'acquisto di esse.",
    },
  ];
};
