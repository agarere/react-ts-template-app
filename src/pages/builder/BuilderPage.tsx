import { Row } from '../../components/BuilderComponents/RowComponent';
import { Col } from '../../components/BuilderComponents/ColComponent';
import { Container } from '../../components/BuilderComponents/ContainerComponent';
import { Button, ButtonType } from '../../components/BuilderComponents/ButtonComponent';
import { useState } from 'react';

function BuilderPage() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const handleButtonClickA = () => {
    console.log("Button clicked! A");
    setCounterA(counterA + 1);
  }

  const handleButtonClickB = () => {
    console.log("Button clicked! B");
    setCounterB(counterB + 1);
  }

  return Container.builder()
    .content(
      Row.builder()
        .content(
          Col.builder()
            .span(6)
            .child(<div style={{ background: "#eee", padding: 10 }}>{counterA}</div>)
            .build(),
          Col.builder()
            .span(6)
            .child(<div style={{ background: "#ccc", padding: 10 }}>{counterB}</div>)
            .build()
        )
        .build(),
      Row.builder()
        .content(
          Col.builder()
            .span(6)
            .content(
              Button.builder()
                .name("Click Me")
                .type(ButtonType.Primary)
                .onClick(handleButtonClickA)
                .build()
            )
            .build(),
          Col.builder()
            .span(6)
            .content(
              Button.builder()
                .name("Click Me")
                .type(ButtonType.Secondary)
                .onClick(handleButtonClickB)
                .build()
            )
            .build()
        )
        .build()
    )
    .build();
}

export default BuilderPage