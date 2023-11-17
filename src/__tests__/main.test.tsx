import React from "react"
import { render, screen } from "@testing-library/react"

//import { MainPage } from "../components/main-page"

describe("Probando TDD por primera vez!", () => {
  /* it("must display the main page title", () => {
    render(<MainPage />)
    expect(screen.getByText(/título buscado/i)).toBeInTheDocument()
  }) */

  it("Inicializando suite de tests...", () => {
    expect("Hello World").toBe("Hello World")
  })
})