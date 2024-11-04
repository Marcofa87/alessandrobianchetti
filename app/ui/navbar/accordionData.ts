import {
  Dumbbell,
  GraduationCap,
  BookOpenText,
  LucideIcon,
} from "lucide-react";

// Specifica il tipo `Icon` come un componente che accetta solo le icone da `lucide-react`.
type AccordionItem = {
  title: string;
  content: string;
  Icon: LucideIcon; // Cambiato a `LucideIcon`
};

export const accordionData: AccordionItem[] = [
  {
    title: "La mia storia",
    content: `Ciao sono Alessandro, romano de Roma, classe 1984, dal 2013 sono personal trainer e dal 2024 anche posturologo. 
I miei allenamenti fanno riferimento soprattutto al sollevamento pesi , alla riattivazione e alla tonicità muscolare, infine  allenamento funzionale e tabata. 
Con i miei recenti studi in posturologia, ho appreso l'importanza di una corretta postura e quanto le irregolarità posturali possano incidere sulla performance sportiva integrando ed integrandoli nelle mie sessioni ho potuto notare dei veri risultati.
Il mio obiettivo è il miglioramento estetico, la tonificazione e aumento della massa muscolare integrando una corretta postura , un miglioramento della resa sportiva e dell'elasticità muscolare attraverso dei protocolli strutturati e modellati su ciascun individuo.`,
    Icon: BookOpenText,
  },
  {
    title: "Formazione",
    content: `Mi laureo in scienze motorie e sportive allo IUSM di Roma nell'anno 2013. Nel 2015 conseguo la laurea in economia e management dello sport sempre nella sede accademica. Nel 2024 mi diplomo come professionista nel campo della posturologia alla scuola Educam di Roma.`,
    Icon: GraduationCap,
  },
  {
    title: "Lavoro/Servizi",
    content: `Nel mio studio presente nel cuore del pigneto oltre che di una sala pesi di 21mq attrezzata per le diverse attività, è presente uno spogliatoio e una doccia a disposizione dei clienti. Un punto relax con caffettiera e bollitore per eventuali the e tisane nei periodi freddi dell'anno.`,
    Icon: Dumbbell,
  },
];
/* La mia storia e il mio lavoro
Ciao sono Alessandro, romano de Roma, classe 1984, dal 2013 sono personal trainer e dal 2024 anche posturologo. 
I miei allenamenti fanno riferimento soprattutto al sollevamento pesi , alla riattivazione e alla tonicità muscolare, infine  allenamento funzionale e tabata. 
Con i miei recenti studi in posturologia, ho appreso l'importanza di una corretta postura e quanto le irregolarità posturali possano incidere sulla performance sportiva integrando ed integrandoli nelle mie sessioni ho potuto notare dei veri risultati.
Il mio obiettivo è il miglioramento estetico, la tonificazione e aumento della massa muscolare integrando una corretta postura , un miglioramento della resa sportiva e dell'elasticità muscolare attraverso dei protocolli strutturati e modellati su ciascun individuo.
Formazione 
Mi laureo in scienze motorie e sportive allo IUSM di Roma nell'anno 2013. Nel 2015 conseguo la laurea in economia e management dello sport sempre nella sede accademica. Nel 2024 mi diplomo come professionista nel campo della posturologia alla scuola Educam di Roma.
Servizi e Struttura 
Nel mio studio presente nel cuore del pigneto oltre che di una sala pesi di 21mq attrezzata per le diverse attività  , è presente uno spogliatoio e una doccia a disposizione dei clienti. Un punto relax con caffettiera e bollitore per eventuali the e tisane nei periodi freddi dell'anno. */
