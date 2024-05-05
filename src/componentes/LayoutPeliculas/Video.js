import React, { useState, useEffect } from 'react';
import '../../estilos/Video.css'

function Video(props) {
  const [videoKey, setVideoKey] = useState([]);

  useEffect(() => {
    // Función para cargar los videos de la película desde TMDb
    const fetchVideo = async () => {
      try {
        // Realiza la solicitud a la API de TMDb para obtener los videos de la película
        const response = await fetch(`https://api.themoviedb.org/3/movie/${props.id}/videos?api_key=0023db00b52250d5bed5debec71d21fb`);
        const data = await response.json();

        // Verifica si hay videos disponibles y establece el videoKey en el estado
        if (data.results && data.results.length > 0) {
          setVideoKey(data.results[0].key);
        }
      } catch (error) {
        console.error('Error al cargar los videos:', error);
      }
    };

    // Llama a la función para cargar los videos cuando cambie el movieId
    fetchVideo();
  }, [props.id]);

  // Si no hay videoKey, muestra un mensaje de carga o un mensaje de que no hay videos disponibles
  if (!videoKey) {
    return <p>No hay videos disponibles</p>;
  }

  // URL del video en YouTube
  const videoUrl = `https://www.youtube.com/embed/${videoKey}`;

  return (
      <div className="video-item">
        {/* Inserta el iframe del video */}
        <iframe
            title={props.title}
            src={videoUrl}
            width="550"
            height="450"
            frameBorder="0"
            allowFullScreen
        />
      </div>
  );
}

export default Video;
