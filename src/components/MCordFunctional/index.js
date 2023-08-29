//Поки гуглила MouseHandler натрапила на цей приклад, записала щоб не забути

import React from "react";
import { useState, useEffect } from "react";

export default function MouseCoordinates() {
  const [mouseCoord, setMouseCord] = useState({x:0, y:0});

  const mouseMoveHandler = (event) => {
    setMouseCord({
        x:event.clientX,
        y:event.clientY
    });
  }

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler);

    return(() => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    })
  },[] )

  return (
    <>
      		Mouse Coordinates: x = {mouseCoord.x}, y={mouseCoord.y}
    </>
  )
}