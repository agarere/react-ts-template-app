import { ButtonBuilder  } from "../../components/BuilderComponentsDecarators/Button";

function DecoratorBuilderPage() {
  return (
    <>
      {ButtonBuilder.builder()
        .label("Click Me")
        .type("secondary")
        .id("btn-1")
        .className("my-btn")
        .style({ padding: "10px" })
        .onClick(() => alert("Clicked!"))
        .children(<span>🔥</span>)
        .build()}
    </>
  )
}

export default DecoratorBuilderPage