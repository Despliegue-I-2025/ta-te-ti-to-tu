[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/Uc_kVv2r)

Ta-Te-Ti-To-Tu BOT 
 
Descripción del Proyecto:
Este proyecto presenta un bot de ta te ti invulnerable, diseñado con una estrategia de juego óptima. La lógica del bot no utiliza memoria y toma decisiones basadas únicamente en el estado actual del tablero. El objetivo principal es garantizar la victoria siempre que sea posible o, por defecto, asegurar un empate. La arquitectura del bot está diseñada para ser desplegada en un contenedor de Docker, permitiendo su fácil ejecución y prueba en cualquier entorno web.

1. Representación del Tablero
Para la lógica del bot, el tablero de ta te ti se representa con 9 elementos, donde cada posición se identifica con un número del 1 al 9, siguiendo un orden de lectura de izquierda a derecha y de arriba a abajo.
Valores asignados:
1: Representa la marca del jugador X.
2: Representa la marca del jugador O.
0: Representa una casilla vacía.

2. Estrategia de Juego (Lógica de Decisión):
La lógica del bot se basa en una jerarquía de decisiones fijas que evalúa en cada turno. El bot ejecutará la primera jugada que cumpla con la condición, garantizando la decisión más inteligente en cualquier momento de la partida.
Gana la partida: El bot escanea si puede colocar su marca para completar una línea de tres y ganar. Esta es la prioridad más alta.
Bloquea al oponente: Si no puede ganar, el bot verifica si el oponente tiene una jugada para ganar en su próximo turno y la bloquea inmediatamente.
Crea una doble amenaza: Si no hay amenazas inmediatas, el bot busca una jugada que le permita tener dos oportunidades de victoria en el siguiente turno.
Toma una esquina vacía: Esta es la prioridad ofensiva de tu bot. Si no hay amenazas que bloquear ni victorias que asegurar, el bot siempre elegirá una esquina vacía, especialmente al iniciar la partida.
Toma la esquina opuesta: Si el oponente jugó en una esquina y el centro está ocupado, el bot jugará en la esquina opuesta para neutralizar la amenaza y abrir una oportunidad de ataque.
Toma el centro: Si las reglas anteriores no aplican, el bot tomará la posición central (5) si está disponible.
Toma un borde vacío: Como último recurso, el bot jugará en cualquier celda restante en los bordes (2, 4, 6, 8).
