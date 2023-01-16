import { url } from "inspector";
import React from "react";

const EachHeadline = ({ news }: { news: any }) => {
  //   console.log("testing : ", news);
  // {
  // "title": "Vélez Sarsfield vence a River Plate en duelo de argentinos en octavos de Libertadores",
  // "link": "https://es.investing.com/news/world-news/velez-sarsfield-vence-a-river-plate-en-duelo-de-argentinos-en-octavos-de-libertadores-2267591",
  // "keywords": null,
  // "creator": null,
  // "video_url": null,
  // "description": null,
  // "content": "© Reuters. Héctor Martínez, del River Plate, en acción con Joel Sonora, del Vélez Sarsfield, durante el partido de octavos de final de la Copa Libertadores disputado por ambos equipos en el estadio José Amalfitani de Buenos Aires, Argentina, el 29 de junio de 2 BUENOS AIRES, 29 jun (Reuters) - Vélez Sarsfield venció el miércoles 1-0 como local al popular River Plate en uno de los duelos entre equipos argentinos de los octavos de final de la Copa Libertadores, en una jornada en la cual el campeón Palmeiras goleó 3-0 a Cerro Porteño. En el partido de ida jugado en el estadio José Amalfitani ante 45.000 aficionados, Vélez abrió el marcador a los 15 minutos por intermedio de un penal anotado por Lucas Janson, tras una infracción que cometió el defensor David Martínez. Luego de unos minutos de dominio por parte de River, el conjunto local se repuso para la etapa complementaria y llevó peligro en varias ocasiones a la portería de Franco Armani, pero no estuvo fino en el toque final para sacar una diferencia mayor. \"Vélez fue un rival complicado, no nos dejó jugar, nos presionó en todo el campo y nos hizo sentir incómodos. Hay que prepararse para la vuelta, la serie está abierta\", dijo Armani a la televisión local tras la derrota en la ida. La revancha será el próximo miércoles en el estadio Monumental de River. Más temprano, en un encuentro jugado en el estadio General Pablo Rojas de la ciudad de Asunción, el vigente campeón Palmeiras mantuvo su paso arrollador en la competencia al golear 3-0 como visitante a Cerro Porteño. El conjunto dirigido por el portugués Abel Ferreira sacó ventaja con un doblete de Rony a los minutos 60 y 69, y completó la goleada sobre el final con un gol de Murilo Cerqueira a los 87 minutos. En el otro enfrentamiento de clubes argentinos de la jornada, Colón de Santa Fe y Talleres de Córdoba igualaron 1-1 con tantos de Ramón Ábila y del ecuatoriano Alan Franco, respectivamente. Por su parte, Flamengo superó 1-0 como visitante a Deportes Tolima gracias a un gol de Andreas Pereira a los 17 minutos del partido de ida disputado en la ciudad de Ibagué. (Reporte de Ramiro Scandolo; editado por Darío Fernández)",
  // "pubDate": "2022-06-30 05:08:30",
  // "image_url": "https://i-invdn-com.investing.com/trkd-images/LYNXMPEI5T044_L.jpg",
  // "source_id": "esinvesting",
  // "country": [
  // "spain"
  // ],
  // "category": [
  // "top"
  // ],
  // "language": "spanish"
  // },
  return (
    <div className="headline-single">
      <div className="headlines-thumb">
        <div
          style={{
            backgroundImage: `url(${news.image_url})`,
            backgroundSize: "cover",
            height: "100%",
          }}
        >
          <div className="headlines-thumb-dark">
            <br />
            <div className="headlines-title">{news.title}</div>
          </div>
        </div>
      </div>

      <div className="headlines-description">{news.description}</div>
      {/* <div className="headlines-title">{news.title}</div> */}
    </div>
  );
};

export default EachHeadline;
