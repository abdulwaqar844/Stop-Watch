import React from "react"
import { mount, ReactWrapper, shallow, ShallowWrapper } from "enzyme"
import Timer from "./Timer";
describe("TimerButton", () => {
  let container: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>

  beforeEach(() => {
    container = shallow(<Timer />)
  })

  it("should render a <div />", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1)
  })

  it("should render 3 Buttons", () => {
    expect(container.find("TimerButton").length).toBeGreaterThanOrEqual(3)
  })
})